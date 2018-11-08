Prerequisitos
- PHP instalado
- Una cuenta de Heroku
- Composer instalado
- Git funcionando en nuestra maquina

  1. Creacion de un proyecto de laravel
  Empezamos abriendo nuestra terminal y escribimos el comando 
  ```
  composer create-project laravel/laravel --prefer-dist "Nombre de proyecto"
  ```
  Esto nos creara el proyecto inicial de Laravel.
  
  2. Inicializacion de repositorio de git
  De nuevo en nuestra terminal escribimos lo siguiente
  ```
  git init
  git add .
  git commit -m "new laravel project"
  ```
  Esto nos va a crear un archivo git con la configuracion y hara nuestro primer commit en el repositorio
  
  3. Iniciando despliegue en heroku
  Para empezar el despliegue de la aplicacion usaremos los siguientes comandos
    ```
   echo web: vendor/bin/heroku-php-apache2 public/ Procfile
   git add .
   git commit -m "Procfile for Heroku"
    ```
   Esto nos creara nuestro Procfile que es un archivo importante para el despliegue de la aplicacion
   
   4. Craendo app de heroku
   Ahora usaremos el siguiente commando para crear la app de heroku
   ```
   heroku create
   ```
   Esto generara un url aleatorio para el proyecto (puede ser cambiado despues)
   
   5. Generando llave de encriptacion de Laravel
   Ahora generaremos la llave de encriptacion de Laravel, esto es necesario para que 
   se pueda hacer la autenticacion de usuarios en nuestra app
     ```
     heroku config:set
     ```
   Esto nos arrojara una llave, y la pondra en heroku por nosotros para conectarnos a nuestra app de laravel
   
   6. Empujar a heroku
   Ahora subiremos nuestros cambios a heroku usando el siguiente comando 
     ```
     git push heroku master
     ```
    7. Mostrando en heroku
    Por ultimo usaremos el comando
     ```
     heroku craete
     ```
     para crear la aplicacion, ahora puedes verla en el url que fue generado en el paso
     4 :)
