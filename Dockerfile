FROM node
WORKDIR /build
RUN npm install -g serve

ENTRYPOINT ["/usr/local/bin/serve", "-s", "build", "-l" , "3000"]
EXPOSE 3000

COPY package.json package.json
RUN npm install

COPY . .
RUN npm run build --production

