#!/usr/bin/env bash
set -e

echo "run container"

CONTAINER_REPOSITORY=shekodn
IMAGE=tutor_virtual
TAG=`make version`

PORT=3000

docker run -p ${PORT}:${PORT} -e "PORT=${PORT}" -e "SECRET_KEY_BASE=123456" \
	${CONTAINER_REPOSITORY}/${IMAGE}:${TAG}
