###################################
########## builder ################
FROM centos:latest AS builder

ARG	NODE_VERSION
ENV	NODE_VERSION=$NODE_VERSION

ARG	NEXUS_USER
ENV	NEXUS_USER=$NEXUS_USER

ARG     NEXUS_PASSWORD
ENV     NEXUS_PASSWORD=$NEXUS_PASSWORD

# Installing packages
RUN     echo -e "[yarn]\n\
name==Yarn Repository\n\
baseurl=https://dl.yarnpkg.com/rpm/\n\
enabled=1\n\
gpgcheck=1\n\
gpgkey=https://dl.yarnpkg.com/rpm/pubkey.gpg\n" > /etc/yum.repos.d/yarn.repo && \
	yum -y update && \
		yum -y install wget zip git python2 make gcc-c++ && \
			ln -s /usr/bin/python2 /usr/bin/python
				#yum -y install yarn-1.22.5.el7_1.x86_64

# Installing nodejs
WORKDIR	/opt
RUN   	wget https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz && \
	mkdir nodejs && \
        tar -xvzf node-v${NODE_VERSION}-linux-x64.tar.gz -C ./nodejs && \
        mv nodejs/node-v${NODE_VERSION}-linux-x64  nodejs/${NODE_VERSION} && \
        ln -s /opt/nodejs/${NODE_VERSION} /opt/nodejs/current && \
        ln -s /opt/nodejs/current/bin/node /usr/bin/node && \
        ln -s /opt/nodejs/current/bin/npm /usr/bin/npm && \
	npm install -g yarn

	#npm install -g react-scripts && \
	#npm install -g react && \
	#npm install -g serve

# Will run the build under /tmp 
WORKDIR /tmp
COPY . .

# Adding webserv user, setting up neccessary folders and fixing permissions 
RUN	groupadd -g 1001 webserv && \
	useradd -m -r -u 1001 -g webserv webserv && \
        mkdir -p /home/webserv/.ssh && cp -r cicd_rudiments/.ssh/* /home/webserv/.ssh/ && \
	chown -R webserv:webserv /home/webserv && \
	chown -R webserv:webserv /tmp && \
        echo -e "registry=https://lhc-nexus.nlm.nih.gov/repository/lhc-npm-group/\n\
always-auth=true\n\
_auth=`echo -ne ${NEXUS_USER}:${NEXUS_PASSWORD}|base64`\n" > /home/webserv/.npmrc

USER    webserv

# Building app
RUN	export PATH=$PATH:/opt/nodejs/current/bin && \	
	npm install && \
	npm run build

#	export PATH=$PATH:/tmp/node_modules
#	yarn install --verbose; exit 0 
	#yarn install --dev --network-timeout=30000 --verbose 2>/dev/null

#RUN npm install 
#&& \
#	npm run build

#RUN /opt/nodejs/${NODE_VERSION}/bin/serve -n -s build
