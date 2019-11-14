#!/usr/bin/env bash
set -e

echo "Pushing image to Heroku"

HEROKU_APP=tutor-virtual-ad19
CONTAINER_REPOSITORY=shekodn
IMAGE=tutor_virtual
TAG=`make version`
HEROKU_TAG=`echo ${TAG} | sed 's/[.]/_/g'`


# docker build -t registry.heroku.com/${HEROKU_APP}/web .
docker login --username=_ --password=${HEROKU_TOKEN} registry.heroku.com

docker build -t registry.heroku.com/${HEROKU_APP}/${IMAGE}:${TAG} .

# docker build --build-arg RELEASE=${TAG} -t ${CONTAINER_REPOSITORY}/${IMAGE}:${TAG} .
# docker pull ${CONTAINER_REPOSITORY}/${IMAGE}:${TAG}
docker push registry.heroku.com/${HEROKU_APP}/${IMAGE}:${TAG}
