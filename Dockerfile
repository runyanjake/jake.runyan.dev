from node:latest

WORKDIR /srv/

COPY ./website/. /srv/website/

EXPOSE 3000

WORKDIR /srv/website

CMD [ "npx", "docusaurus", "start", "-h0.0.0.0" ]
