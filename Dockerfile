FROM node:10

ADD . /app
WORKDIR /app

RUN npm install serve -g
RUN npm install


COPY . .

RUN npm run build

EXPOSE 5000

CMD  serve dist -p 5000
