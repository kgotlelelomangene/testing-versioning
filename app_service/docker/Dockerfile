
FROM python:3.7.16-slim-buster
# base file
RUN apt-get update && \
    apt-get install gcc libc-dev g++ libffi-dev libxml2 unixodbc-dev -y
RUN python -m pip install --upgrade pip

RUN groupadd -r appuser && useradd -g appuser appuser

USER appuser

ENV PATH="/home/appuser/.local/bin:${PATH}"

WORKDIR /home/appuser

# python postgresql
USER root

RUN apt-get update && apt-get install odbc-postgresql -y
RUN python -m pip install --upgrade pip
RUN pip install psycopg2-binary==2.9.5


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
