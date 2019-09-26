#!/usr/bin/env bash
set -e

echo "Pushing image to Heroku"

HEROKU_APP=tutor-virtual-ad19
IMAGE=tutor_virtual
TAG=`make version`

heroku container:push "${IMAGE}_${TAG}" --app ${HEROKU_APP}
