FROM nginx:1.25
LABEL authors="lsh"

#RUN rm /etc/nginx/conf.d/default.conf
#RUN rm -r /etc/nginx/nginx.conf

COPY nginx /etc/nginx

WORKDIR /workspace

COPY init.sh .

RUN sh init.sh