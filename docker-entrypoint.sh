#!/bin/sh
set -eu

: "${PORT:=80}"
: "${VITE_API_BASE_URL:?VITE_API_BASE_URL is required}"

# nginx config (nginx.conf.template me listen ${PORT}; hona chahiye)
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# env.template.js -> env.js
envsubst '${VITE_API_BASE_URL}' \
  < /usr/share/nginx/html/env.template.js \
  > /usr/share/nginx/html/env.js

# Validate nginx config before starting
nginx -t

# Railway (ya kisi platform) me agar command pass nahi hoti, to default nginx start karo
if [ "$#" -eq 0 ]; then
  set -- nginx -g 'daemon off;'
fi

exec "$@"