#!/bin/bash
KUBE_NAMESPACE=$1
runtime="5 minute"
endtime=$(date -ud "$runtime" +%s)

while [[ $(date -u +%s) -le $endtime ]]
do
   kubectl rollout status "deployment/${CI_PROJECT_NAME}" -n ${KUBE_NAMESPACE}
   if [ $? -eq 0 ]; then
      exit  0
   fi
   sleep 10
done
exit 1
