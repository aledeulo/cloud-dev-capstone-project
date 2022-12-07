FROM node:12.16.2-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# start app
EXPOSE 3000
CMD ["npm", "run", "start"]