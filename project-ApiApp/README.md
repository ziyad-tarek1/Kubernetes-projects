# flask-minikube-project

1- after creating the docker image and adding the depences and exposing the needed ports "5000"

we use a tagging to push it to our local CR docker hub you can get it from the below command
  docker pull ziyadtarek99/flask-app:1.2

2- then start your minikube and using kubectl create the deployment and services from the attached mainfest in order 
  kubectl apply -f deployment-def.yaml
  kubectl apply -f services-def.yaml
3- checking if all is running in a good status using the below command
    kubectl get all

4- Accessing Your Flask Application 
  4.1- From Within the VM or Cluster
    Use kubectl port-forward to forward a local port to the pod:
      kubectl port-forward pod/frontend-556f77b9cb-wskp4 5000:5000
    http://localhost:5000
  4.2- From Outside the VM
  kubectl get nodes -o wide
minikube service frontend
