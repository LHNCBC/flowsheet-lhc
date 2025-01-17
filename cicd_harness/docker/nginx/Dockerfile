# NOTE: If the BASE_URL env var is set to something like "http://localhost:9009"
# then the image should be started using the same port like:
#    docker run -t -p 9009:80 -d smartonfhir/smart-launcher:latest

FROM lhc-nexus.nlm.nih.gov:8443/lhc-ops/build/node14-alpine-stage:latest as builder

ENV NODE_ENV "development"

RUN addgroup --system app \
    && adduser app -u 101 --system --home /home/app --disabled-password --shell /bin/bash -G app

WORKDIR /home/app/

COPY package.json package-lock.json ./
COPY public ./public
COPY src ./src
COPY .ssh ./.ssh

RUN	chown -R app:app /home/app

USER app
RUN umask 0 && npm config set cache /tmp/.npm \
    && npm ci \
    && npm run test \
    && npm run build

FROM lhc-nexus.nlm.nih.gov:8443/nginx_1.21.3:v2.0.1

COPY --from=builder /home/app/build /usr/share/nginx/www
RUN	chown -R nginx:nginx /usr/share/nginx/www 

WORKDIR /etc/nginx/conf.d
COPY cicd_harness/docker/nginx/default.conf ./

EXPOSE 443


