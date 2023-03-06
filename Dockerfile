FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN npm run build

ENV PORT=5000
ENV HOST=0.0.0.0

EXPOSE 5000

CMD ["npm", "run", "start"]