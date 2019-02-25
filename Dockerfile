FROM nginx


RUN rm /etc/nginx/conf.d/*.conf
COPY *.conf /etc/nginx/conf.d/
COPY /dist/matthewrice-xyz/ /usr/share/nginx/html/

