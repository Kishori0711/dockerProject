#!/bin/sh
set -eu

TEMPLATE="/usr/share/nginx/html/env.template.js"
OUT="/usr/share/nginx/html/env.js"

# dist/ me public/* copy hota hai, isliye template yahin milega
if [ -f "$TEMPLATE" ]; then
  envsubst < "$TEMPLATE" > "$OUT"
else
  echo "window.__ENV__ = { VITE_API_URL: \"${VITE_API_URL:-}\" };" > "$OUT"
fi
