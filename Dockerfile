FROM node:16-alpine

ARG BUILD_ENV="staging"
ARG CI_PIPELINE_IID

ADD . /src
WORKDIR /src
ENV BUILD=${BUILD_ENV}
RUN env

RUN JOBS=max yarn install
RUN JOBS=max yarn run build:${BUILD}

CMD yarn serve:${BUILD}
