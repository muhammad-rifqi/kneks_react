FROM nginx:alpine

# Copy hasil build React
COPY build/ /usr/share/nginx/html

# Tambah konfigurasi custom Nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
