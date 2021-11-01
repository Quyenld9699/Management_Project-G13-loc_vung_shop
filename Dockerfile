FROM node:16-alpine
ENV NODE_ENV development

WORKDIR /app

COPY . .
RUN rm -rf package-lock.json