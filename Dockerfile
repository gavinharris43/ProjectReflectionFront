FROM node:latest as node-build
WORKDIR /build
COPY . .
RUN npm install
RUN npm run build
FROM node:latest
WORKDIR /opt/website
COPY --from=node-build /build/build .
RUN npm install -g serve
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/serve", "-l", "3000"]

