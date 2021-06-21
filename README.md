sudo docker stop

sudo docker rm $(sudo docker ps -a -f status=exited -q)

sudo docker build -t oxigeno-web-image .

sudo docker run  -d --restart always -p 3000:3000 --name fundacion-oxigeno-web oxigeno-web-image
