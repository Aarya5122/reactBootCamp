docker containers
docker container ls
docker container ls -a 

docker start <containerName>
docker stop <containerName>

docker run <imageName>
docker run -it <imageName>

docker exec <containerName> <command>
docker exec -it <containerName> bash

docker images
docker image -ls

docker run -it -p <systemPort>:<containerPort> <imageName>

docker run -it -e <key>=<value> -e <key>=<value> <imageName>

docker build -t <customImageName> <pathOFDockerFile | .>

docker login

docker <localImageName> <repoImageName>
docker push <repoName>


Dockerfile => Layer caching

FROM <baseImage | OS | ubuntu> as build/installer (Not run) => code compile and mounted (Executes with TS)

RUN apt-get update
RUN apt-get install -y curl
RUN cuel -sL Node18 | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

WORKDIR /app

COPY <sourceFile> <destinationFile>
COPY . .

//RUN cd app && npm install
RUN  npm install


//FINAL Image
FROM <baseImage (node) | OS | ubuntu> as runner ==> From last step pick and run 
WORKDIR /app
copy --from=<build | alias of stage> app/ app/
ENTRYPOINT ["node", "main.js"]

## Other keywords: EXPOSE <PORTVALUE>; ENV KEY VALUE; CMD <code>


docker-compose.yml

version: '3.8'
services:
    postgres:
        image: postgres
        ports:
            - '1234:1234'
        environment:
            POSTGRES_USERNAME: "username"

docker compose up => permission denied => add "sudo" at start of command (Stack of containers)
docker compose down

docker compose up -d (Detached mode) (Run it in background) (Logs)

# Day 2

## Docker Networking

- docker run -it --name <containerName> <imageName>
- busybox => ping goole.com
- Bridge: Default network driver => host machine ===docker bridge=== docker => POST has to be exposed as it is inside docker.
- Host: docker run -it --network=host <imageName> => Connects to our own host machine => No port mapping => host and docker container stays on same network.
- None: No access to internet.

## Inspect network
docker network inspect <network|driver>


## Custom network

docker network create -d (driver) bridge <networkName>
docker network ls
ping <containerName>

## Volume mounting
- When containers are destroyed container memory is also flushed.
- We can mount the host memory (folder) to container. Which resolves the above issue
docker run -it -v (volume mapping) folderAbsoluteAddress:containerAbsoluteAddress 

docker volume create <volumename>
docker volume inspect <volumename>
docker volume ls
docker volume rm <volumeName>

docker run -it -d --name <containerName> --mount source=<volumeName>,target=<targetValue>

## Efficient caching in layers
- Docker file execution

## .dockerignore
- Same as git ignore.

## Docker Multi Stage Build
- Base image + build => Single stage build
- 