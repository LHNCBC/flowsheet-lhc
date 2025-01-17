################################################
export VERSION=$(shell jq -r '.version?' ./package.json)
export APP_IMG=$(CI_PROJECT_NAME)
################################################
ECR=627111370606.dkr.ecr.us-east-1.amazonaws.com

ifeq ($(CI_COMMIT_TAG),)
CI_COMMIT_TAG := testingVersion
endif

.PHONY: image build login push pull tag rollouthc ecrpush kubedeploy kubeclean

all: login

image:
	@echo $(NEXUS)/$(APP_IMG):$(VERSION)

build:
	docker build -t $(NEXUS)/$(APP_IMG):$(VERSION) --build-arg NODE_ENV=production -f ./cicd_harness/docker/nginx/Dockerfile .

login:
	docker login $(NEXUS) -u $(NEXUS_USER) -p $(NEXUS_PASSWORD)

push:
	docker push $(NEXUS)/$(APP_IMG):$(VERSION)

pull:
	docker pull $(NEXUS)/$(APP_IMG):$(VERSION)

tag:
	docker tag $(NEXUS)/$(APP_IMG):$(VERSION) $(ECR)/$(APP_IMG):$(VERSION) 

rollouthc:
	$(shell pwd)/cicd_harness/rollout-healthcheck.sh $(KUBE_NAMESPACE)

kubedeploy:
	envsubst < $(shell pwd)/cicd_harness/deployment.yaml > debug.yaml
	envsubst < $(shell pwd)/cicd_harness/deployment.yaml| kubectl apply -f -

kubeclean:
	envsubst < $(shell pwd)/cicd_harness/deployment.yaml| kubectl delete -f -

ecrpush:
	docker push $(ECR)/$(APP_IMG):$(VERSION)
