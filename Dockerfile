# References:
# https://iridakos.com/tutorials/2019/04/07/dockerizing-a-rails-application.html
# https://blog.codeship.com/running-rails-development-environment-docker/

FROM ruby:2.6.1

# Install apt based dependencies required to run Rails as
# well as RubyGems. As the Ruby image itself is based on a
# Debian image, we use apt-get to install those.
RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs

# Configure the main working directory. This is the base
# directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
RUN mkdir -p /app
WORKDIR /app

# Copy the Gemfile as well as the Gemfile.lock and install
# the RubyGems. This is a separate step so the dependencies
# will be cached unless changes to one of those two files
# are made.
COPY Gemfile Gemfile.lock ./
RUN gem install bundler -v 2.0.1 && bundle install --jobs 20 --retry 5

# Copy the main application.
COPY . ./

# Expose port 3000 to the Docker host, so we can access it
# from the outside.
EXPOSE 3000

ENTRYPOINT ./entrypoint.sh
