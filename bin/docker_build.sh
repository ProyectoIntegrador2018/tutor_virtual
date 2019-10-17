#!/usr/bin/env bash
set -e

echo "build image"

CONTAINER_REPOSITORY=shekodn
IMAGE=tutor_virtual
TAG=`make version`
HASH=`git log --format="%H" -n 1 | cut -c1-6`

docker build --build-arg RELEASE=${TAG} -t ${CONTAINER_REPOSITORY}/${IMAGE}:${TAG} .
docker build --build-arg RELEASE=${TAG} -t ${CONTAINER_REPOSITORY}/${IMAGE}:${HASH} .
docker tag ${CONTAINER_REPOSITORY}/${IMAGE}:${HASH} ${CONTAINER_REPOSITORY}/${IMAGE}:latest
