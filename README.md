# Getting Started with Create React App

### Instrucciones backend:

```sh
yum update
yum install -y jdk-11.aarch64
yum install -y zip unzip
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install maven
yum install httpd
systemctl start httpd
systemctl enable httpd.service
firewall-cmd --add-service=http --permanent
firewall-cmd --reload
systemctl start httpd
sudo firewall-cmd --zone=public --permanent --add-port=8080/tcp
sudo firewall-cmd --reload

service httpd restart
```

### htaccess config

.htaccess content file

```
<IfModule mod_rewrite.c>

  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]

</IfModule>

```

# Corregir error 404 no encontrado al recargar el front:

File to edit and change
nano /etc/httpd/conf/httpd.conf

Change from in line 154

AllowOverride None

to

AllowOverride All

Reload the httpd:
service httpd restart

## Ruta por defecto donde se debe cargar el front en el server

/var/www/html/
->en esta carpeta debe ir nuestro build (contenido)
