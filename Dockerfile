FROM nginx:1.25
LABEL authors="lsh"

#RUN rm /etc/nginx/conf.d/default.conf
#RUN rm -r /etc/nginx/nginx.conf

RUN mkdir -p /etc/nginx/ssl
RUN openssl dhparam -out /etc/nginx/ssl/dhparam.pem 4096

COPY nginx /etc/nginx

COPY ./static /usr/share/nginx/static
COPY ./client/build /usr/share/nginx/client
