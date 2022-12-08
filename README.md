[![CircleCI](https://dl.circleci.com/status-badge/img/gh/aledeulo/cloud-dev-capstone-project/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/aledeulo/cloud-dev-capstone-project/tree/master)

## Client app domain:
http://aabf70953306f49a9a63ecdcf0725c86-585267314.us-east-1.elb.amazonaws.com/

## Description:
This project uses the Serverless capstone project but separated into two different parts and two different deployment style and includes full CI/CD
### Client:
The client is deployed to AWS EKS and the domain is exposed through the service. Deployment specs here: `.circleci.config.yml`
### Backend:
Backend uses Serverless to deploy all the necessary resources related to the app in order to work. Deployment specs here: `.circleci.config.yml`

### CI/CD Deployment:
Powered by CircleCI. Find the CircleCI configuration related to the deployment on `.circleci.config.yml`