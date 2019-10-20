#!/usr/bin/env bash
set -e

echo "run container"

CONTAINER_REPOSITORY=shekodn
IMAGE=tutor_virtual
TAG=`make version`

PORT=80

docker run -p ${PORT}:${PORT} -e "PORT=${PORT}" \
	${CONTAINER_REPOSITORY}/${IMAGE}:${TAG}
