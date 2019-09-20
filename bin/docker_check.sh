#!/usr/bin/env bash
set -e

# The goal of this script is to check if the tag that is going to be pushed is unique.
# In other words, if RELEASE variable was updated in the Makefile.
echo "check if the tag wasn't pushed before"

CONTAINER_REPOSITORY=shekodn
IMAGE=tutor_virtual
TAG=`make version`

! docker pull ${CONTAINER_REPOSITORY}/${IMAGE}:${TAG}
