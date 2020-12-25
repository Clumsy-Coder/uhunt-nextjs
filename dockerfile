# Base on offical Node.js Alpine image
FROM node:latest as builder

# Set working directory
WORKDIR /usr/app

# install node-prune (https://github.com/tj/node-prune)
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all files
COPY ./ ./

# Build app
RUN yarn build

# remove development dependencies
RUN yarn install --production

# run node prune. Reduce node_modules size
RUN /usr/local/bin/node-prune

####################################################### 

FROM nginx:alpine

# label used to connect the docker image to the github repo
# check https://docs.github.com/en/free-pro-team@latest/packages/guides/connecting-a-repository-to-a-container-image#connecting-a-repository-to-a-container-image-on-the-command-line
LABEL org.opencontainers.image.source https://github.com/clumsy-coder/uhunt-nextjs

WORKDIR /usr/app

RUN apk add nodejs-current npm supervisor
RUN mkdir mkdir -p /var/log/supervisor && mkdir -p /etc/supervisor/conf.d

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./.nginx/default.conf /etc/nginx/conf.d/

# COPY package.json next.config.js .env* ./
# COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules

# supervisor base configuration
ADD supervisor.conf /etc/supervisor.conf

# replace $PORT in nginx config (provided by executior) and start supervisord (run nextjs and nginx)
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && \
  supervisord -c /etc/supervisor.conf