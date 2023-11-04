FROM nginx:1.25
LABEL authors="lsh"

#RUN rm /etc/nginx/conf.d/default.conf
#RUN rm -r /etc/nginx/nginx.conf

COPY nginx /etc/nginx

COPY ./static /usr/share/nginx/static
COPY ./client/build /usr/share/nginx/client