# Web Application Containerization Exercise

This exercise will help you explore containerization, Docker, and Kubernetes basics. You'll containerize a simple web application that displays an environment variable.

## Prerequisites
- Docker installed
- Minikube installed
- kubectl installed
- Docker Hub account

## Files Provided
- `index.html`: Basic web page
- `server.js`: Simple Node.js server

## Exercise Steps

### 1. Create Dockerfile
Create a Dockerfile that:
- Uses node:alpine as base image
- Sets up a working directory
- Copies both HTML and JS files
- Exposes port 3000
- Runs the Node.js server

### 2. Build and Test Docker Image Locally
```bash
# Build image (replace USERNAME with your Docker Hub username and provide a version number of your choice)
docker build -t USERNAME/capstone-web:<version> .

# Test locally
docker run -d -p 8080:3000 -e APPNAME="Local Test App" USERNAME/capstone-web:latest

# Verify in browser
open http://localhost:8080
```

### 3. Push to Docker Hub
```bash
# Login to Docker Hub
docker login

# Push image
docker push USERNAME/capstone-web:latest
```

### 4. Create Kubernetes Deployment YAML
Create a deployment.yaml that includes:
- Deployment resource
  - 2 replicas
  - Container image from your Docker Hub
  - Environment variable APPNAME
  - Container port 3000
- NodePort service
  - Maps to port 3000
  - NodePort type

### 5. Deploy to Minikube
```bash
# Start Minikube if not running
minikube start

# Apply deployment
kubectl apply -f deployment.yaml

# Get NodePort
kubectl get svc

# Get Minikube IP
minikube ip
```

### 6. Test Deployment
Access your application at:
```
http://MINIKUBE_IP:NODEPORT
```

## Success Criteria
- Docker image builds successfully
- Application runs locally with Docker
- Application shows environment variable value
- Kubernetes deployment works
- Application accessible via NodePort
- Environment variable displays correctly in K8s deployment

## Troubleshooting Tips
- Use `docker ps` to check running containers
- Use `docker logs CONTAINER_ID` for container logs
- Use `kubectl get pods` to check pod status
- Use `kubectl describe pod POD_NAME` for detailed pod info
- Use `kubectl logs POD_NAME` for pod logs

## Clean Up
```bash
# Stop local Docker container
docker ps
docker stop CONTAINER_ID

# Delete K8s deployment
kubectl delete -f deployment.yaml

# Stop Minikube (optional)
minikube stop
```