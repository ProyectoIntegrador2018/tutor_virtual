#!/usr/bin/env bash
set -e

echo "Pushing image to Heroku"

HEROKU_APP=tutor-virtual-ad19
IMAGE=tutor_virtual
TAG=`make version`
HEROKU_TAG=`echo ${TAG} | sed 's/[.]/_/g'`

heroku container:push "${IMAGE}_${HEROKU_TAG}" --app ${HEROKU_APP}
