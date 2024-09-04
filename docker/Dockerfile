ARG BASE_IMAGE
FROM ${BASE_IMAGE}

USER root

# RUN apt-get update -y && apt-get install wget -y

# USER appuser

WORKDIR /app
COPY ./app ./app
COPY ./docker/docker-entrypoint.sh .
COPY ./package.json .

USER root
RUN chmod +x ./docker-entrypoint.sh
# USER appuser

ENTRYPOINT [ "./docker-entrypoint.sh" ]
