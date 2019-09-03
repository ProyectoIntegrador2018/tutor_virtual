#!/bin/bash
set -e

# Compile the assets
bundle exec rake assets:precompile

# Creates the database for the current RAILS_ENV environment.
# If RAILS_ENV is not specified it defaults to the development and test databases.
rails db:create

# Runs migrations for the current environment that have not run yet.
# By default it will run migrations only in the development environment.
rails db:migrate

# db:seed Runs the db/seeds.rb file.
rails db:seed

# Start the server
bundle exec rails server -b 0.0.0.0
