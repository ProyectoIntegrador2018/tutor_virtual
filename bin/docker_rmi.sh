#!/usr/bin/env bash
set -e

echo "remove image"

CONTAINER_REPOSITORY=shekodn
IMAGE=tutor_virtual
TAG=`make version`
HASH=`git log --format="%H" -n 1 | cut -c1-6`

docker rmi ${CONTAINER_REPOSITORY}/${IMAGE}:${TAG}
docker rmi ${CONTAINER_REPOSITORY}/${IMAGE}:${HASH}
