FROM node:16-alpine

ARG BUILD_ENVIRONMENT="staging"
ARG CI_PIPELINE_IID

ADD . /src
WORKDIR /src
ENV ENVIRONMENT=${BUILD_ENVIRONMENT}
RUN env

RUN JOBS=max yarn install
RUN JOBS=max yarn run build:${ENVIRONMENT}

CMD yarn serve
