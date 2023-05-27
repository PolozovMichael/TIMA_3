FROM node:16-buster-slim as build

WORKDIR /opt/web
ENV NODE_ENV="production"
ENV PATH="/opt/web/node_modules/.bin:$PATH"

EXPOSE 3000

COPY . .

RUN npm install

CMD ["vite"]