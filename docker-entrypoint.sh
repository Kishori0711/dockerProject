#!/bin/sh
set -eu

: "${PORT:=80}"
: "${VITE_API_BASE_URL:?VITE_API_BASE_URL is required}"

# IMPORTANT: envsubst ko replace karne ke liye vars export hone chahiye
export PORT VITE_API_BASE_URL

# nginx config generate
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# env.template.js -> env.js
envsubst '${VITE_API_BASE_URL}' \
  < /usr/share/nginx/html/env.template.js \
  > /usr/share/nginx/html/env.js

# Validate nginx config
nginx -t

# Agar platform (Railway) command pass na kare, to nginx start kar do
if [ "$#" -eq 0 ]; then
  set -- nginx -g 'daemon off;'
fi

exec "$@"