#!/bin/bash

# Apply Secret
kubectl apply -f secret.yaml

# Apply ConfigMap
kubectl apply -f configmap.yaml

# Apply MongoDB Deployment
kubectl apply -f mongodb-deployment.yaml

# Apply Mongo Express Deployment
kubectl apply -f mongo-express.yaml

# Apply MongoDB Service
kubectl apply -f svc.yaml

# Apply Mongo Express Service
kubectl apply -f express-ui-service.yaml

echo "All resources applied successfully."
