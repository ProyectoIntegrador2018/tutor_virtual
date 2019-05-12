Prerequisitos
- Tener Ruby y Rails instalado
- Una cuenta de Heroku
- Tener Git en la computadora

Deployment de aplicacion en el Heroku:
  1. Asegurate de estar en el directorio que contiene la apicacion de rails y crea un app en Heroku
  ```
  $ heroku create
  ```
  
  2. Haz deploy del codigo
  ```
  $ git push heroku master
  ```
  Si no se marcaron errores durante el deply se puede continuar a migrar la base de datos.
  
  3. Migrar base de datos al heroku
    ```
   $ heroku run rake db:migrate
    ```
   Con esto se logra el deployment y la aplicacion esta disponible para ejecutar
   
   4. Ejecuta la aplicacion para visistar en tu blrowser
   ```
   $ heroku open
   ```
