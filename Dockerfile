# NOTE: If the BASE_URL env var is set to something like "http://localhost:9009"
# then the image should be started using the same port like:
#    docker run -t -p 9009:80 -d smartonfhir/smart-launcher:latest

FROM node:14.15.5 as builder

ENV NODE_ENV      "development"

RUN adduser --system --group app 

WORKDIR /home/app/

COPY package.json package-lock.json ./
COPY public ./public
COPY src ./src
COPY .ssh ./.ssh

RUN	chown -R app:app /home/app

USER app 
RUN     npm ci && \
	npm run test && \
	npm run build


FROM lhc-nexus.nlm.nih.gov:8443/nginx_1.21.3:v1.0.1

COPY --from=builder /home/app/build /usr/share/nginx/www
RUN	chown -R nginx:nginx /usr/share/nginx/www && \
	rm /etc/nginx/conf.d/default.conf 	

WORKDIR /etc/nginx/conf.d
COPY ci/flowsheet-lhc.conf ./

EXPOSE 443


