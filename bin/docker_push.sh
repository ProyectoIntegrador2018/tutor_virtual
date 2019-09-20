#!/usr/bin/env bash
set -e

echo "push image"

CONTAINER_REPOSITORY=shekodn
IMAGE=tutor_virtual
TAG=`make version`
HASH=`git log --format="%H" -n 1 | cut -c1-6`

docker push ${CONTAINER_REPOSITORY}/${IMAGE}:${TAG}
docker push ${CONTAINER_REPOSITORY}/${IMAGE}:${HASH}
docker push ${CONTAINER_REPOSITORY}/${IMAGE}:latest
