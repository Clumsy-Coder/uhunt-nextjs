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

FROM node:alpine

WORKDIR /usr/app

# COPY package.json next.config.js .env* ./
# COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]