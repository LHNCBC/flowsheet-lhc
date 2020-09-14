#! /bin/bash
HOST=$1
export FlowsheetBuilderDepl=$(/usr/bin/date '+%m%d%Y') && \
/usr/bin/ssh "gitlab-runner@$HOST" "/usr/bin/mkdir -p ~/$FlowsheetBuilderDepl" && \
/usr/bin/scp $(pwd)/cicd_rudiments/docker-compose.yaml "gitlab-runner@$HOST:~/$FlowsheetBuilderDepl" && \
/usr/bin/ssh "gitlab-runner@$HOST" 'if [ \"$(/usr/bin/docker ps --all -q -f name="^flowsheet-lhc$")\" ]; then /usr/bin/docker rm -f flowsheet-lhc; fi' && \
/usr/bin/ssh "gitlab-runner@$HOST" 'if [ \"$(/usr/bin/docker ps --all -q -f name="^flowsheet-lhc$")\" ]; then /usr/bin/docker rm -f flowsheet-lhc-nginx; fi' && \
/usr/bin/ssh "gitlab-runner@$HOST" "/usr/bin/docker login $NEXUS -u $NEXUS_USER -p $NEXUS_PASSWORD && cd ~/$FlowsheetBuilderDepl && /usr/bin/docker-compose up -d"
