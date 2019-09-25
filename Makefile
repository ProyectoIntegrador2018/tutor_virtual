APP=tutor_virtual
PROJECT=github.com/ProyectoIntegrador2018/tutor_virtual
RELEASE?=0.0.0

COMMIT?=$(shell git rev-parse HEAD)
BUILD_TIME?=$(shell date -u '+%Y-%m-%d_%H:%M:%S')

.DEFAULT_GOAL := help

build:## Spins that beautiful container!
	@./bin/docker_build.sh

bump:## Bumps version
	@./bin/bump_version.sh

check:## Check if the tag that is going to be pushed is unique. In other words, if RELEASE variable was updated in the Makefile.
	@./bin/docker_check.sh

help: ##Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'


prod:##prod: Run latest built simulating a production env.
	@echo 'Prod triggered'
	@./bin/docker_run_local_production.sh

##push: push docker image to docker hub
push: check
	@./bin/docker_push.sh

rmi:## Removes docker image
	@./bin/docker_rmi.sh

run:## Run latest built
	@echo 'Run triggered'
	@./bin/docker_run.sh

test: ##Run all automated tests.
	@echo 'Test triggered'

version: ##Prints current version
	@echo -n ${RELEASE}
	@echo
