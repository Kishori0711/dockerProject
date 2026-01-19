#!/bin/sh
set -eu

: "${PORT:=80}"
: "${VITE_API_BASE_URL:?VITE_API_BASE_URL is required}"

# nginx config
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# env.template.js -> env.js
envsubst '${VITE_API_BASE_URL}' \
  < /usr/share/nginx/html/env.template.js \
  > /usr/share/nginx/html/env.js

# Validate nginx config before starting
nginx -t

exec "$@"