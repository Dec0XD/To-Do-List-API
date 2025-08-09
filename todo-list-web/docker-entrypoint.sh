#!/bin/sh
set -e

: "${PORT:=80}"
: "${API_ORIGIN:=http://localhost:3000}"
# Render nginx config from template using envsubst
envsubst '${PORT} ${API_ORIGIN}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

exec nginx -g 'daemon off;'
