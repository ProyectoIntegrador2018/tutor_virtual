# References:
# https://iridakos.com/tutorials/2019/04/07/dockerizing-a-rails-application.html
# https://blog.codeship.com/running-rails-development-environment-docker/

# Step 1: Use the official Ruby 2.6.3 Slim Strech image as base:
FROM ruby:2.6.3-slim-stretch AS runtime

# Step 2: We'll set the MALLOC_ARENA_MAX for optimization purposes & prevent memory bloat
# https://www.speedshop.co/2017/12/04/malloc-doubles-ruby-memory.html
ENV MALLOC_ARENA_MAX="2"

# Step 3: We'll set '/usr/src' path as the working directory:
# NOTE: This is a Linux "standard" practice - see:
# - http://www.pathname.com/fhs/2.2/
# - http://www.pathname.com/fhs/2.2/fhs-4.1.html
# - http://www.pathname.com/fhs/2.2/fhs-4.12.html
WORKDIR /usr/src

# Step 4: We'll set the working dir as HOME and add the app's binaries path to
# $PATH:
ENV HOME=/usr/src PATH=/usr/src/bin:$PATH

# Step 5: We'll install curl for later dependencies installations
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    curl

# Step 6: Add nodejs source
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -

# Step 7: Add yarn packages repository
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Step 8: Install the common runtime dependencies:
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    apt-transport-https software-properties-common \
    ca-certificates \
    libpq5 \
    openssl \
    nodejs \
    tzdata \
    yarn && \
    rm -rf /var/lib/apt/lists/*

# Step 9: Start off from the "runtime" stage:
FROM runtime AS development

# Step 10: Install the development dependency packages with alpine package
# manager:
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Step 11: Copy the project's Gemfile + lock:
ADD Gemfile* /usr/src/

# Step 12: Install bundler ~2.0
RUN gem install bundler -v 2.0.1

# Step 13: Install the current project gems - they can be safely changed later
# during development via `bundle install` or `bundle update`:
RUN bundle install --jobs=20 --retry=5

# Step 14: Set the default command:
CMD [ "rails", "server", "-b", "0.0.0.0" ]

# Step 15: Add the current directory
ADD . /usr/src

# Step 16: Install Yarn packages:
RUN yarn install

# Step 17: Start off from the development stage image:
FROM development AS builder

# Step 18: Precompile assets:
RUN export DATABASE_URL=postgres://postgres@example.com:5432/fakedb \
    SECRET_KEY_BASE=10167c7f7654ed02b3557b05b88ece \
    RAILS_ENV=production && \
    rails assets:precompile && \
    rails secret > /dev/null

# Step 19: Remove installed gems that belong to the development & test groups -
# we'll copy the remaining system gems into the deployable image on the next
# stage:
RUN bundle config without development:test && bundle clean

# Step 20: Remove files not used on release image:
RUN rm -rf \
    bin/setup \
    bin/update \
    entrypoint.sh \
    config/spring.rb \
    node_modules \
    spec \
    tmp/*

# V: Release stage: ============================================================
# In this stage, we build the final, deployable Docker image, which will be
# smaller than the images generated on previous stages:

# Step 21: Start off from the runtime stage image:
FROM runtime AS release

# Step 22: Copy the remaining installed gems from the "builder" stage:
COPY --from=builder /usr/local/bundle /usr/local/bundle

# Step 23: Copy from app code from the "builder" stage, which at this point
# should have the assets from the asset pipeline already compiled:
COPY --from=builder /usr/src /usr/src

# Step 24: Set the RAILS/RACK_ENV and PORT default values:
ENV RAILS_ENV=production RACK_ENV=production PORT=3000

# Step 25: Generate the temporary directories in case they don't already exist:
RUN mkdir -p /usr/src/tmp/cache && \
    mkdir -p /usr/src/tmp/pids && \
    mkdir -p /usr/src/tmp/sockets && \
    chown -R nobody /usr/src

# Step 26: Set the container user to 'nobody':
USER nobody

# Step 27: Set the default command:
CMD [ "puma" ]