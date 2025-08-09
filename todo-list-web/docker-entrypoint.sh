#!/bin/sh
set -e

: "${PORT:=80}"
# Default to the docker-compose service name for local dev; on Render set API_ORIGIN to your API URL
: "${API_ORIGIN:=http://api:3000}"
export PORT
export API_ORIGIN
# Render nginx config from template using envsubst
envsubst '${PORT} ${API_ORIGIN}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

exec nginx -g 'daemon off;'
