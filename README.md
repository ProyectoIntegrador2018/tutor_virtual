# Tutor Virtual

El sistema tiene como objetivo el automatizar los procesos que lleva a cabo nuestra cliente, Dora Elizabeth García Olivier, perteneciente del Centro Virtual de Aprendizajes. Dentro de sus actividades que actualmente realiza de manera manual se incluyen el: Dar de alta a alumnos, profesores y directivos asociados al servicio social Aprendizaje Verde.

## Tabla de contenidos

* [Detalles del Cliente](#detalles-del-cliente)
* [Ambientes del Sistema](#ambientes-del-sistema)
* [Equipo de trabajo](#equipo-de-trabajo)
* [Herramientas](#herramientas)

### Detalles del Cliente

| Nombre              | Email               | Rol              |
| ------------------- | ------------------- | ---------------- |
| Dora García Olivier | degolivier@itesm.mx | Coordinador CVA  |


### Ambientes del Sistema

* **Producción** - [TBD](TBD)
* **Desarrollo** - [TBD](TBD)

### Equipo de trabajo

| Nombre             | Email              | Rol          |
| ------------------ | ------------------ | ------------ |
| Elías Mera         | a01280762@itesm.mx | Desarrollo   |
| Estafanía Guajardo | a00813202@itesm.mx | Desarrollo   |
| Jorge Limón        | a01280734@itesm.mx | Scrum Master |
| Roger Luna         | a00815024@itesm.mx | Desarrollo   |

### Herramientas

Pide acceso a las siguientes herramientas de no ser que no lo tengas:

* [Github repo](https://github.com/ProyectoIntegrador2018/tutor_virtual)
* [Backlog]()
* [Documentation](https://drive.com)

## Desarrollo

### Configuración del proyecto

Primero descargar [`Composer`](https://getcomposer.org/download/). Esto es para poder instalar Laravel después.
Para instalarlo es necesario correr los siguientes comandos y mover composer a tu $PATH para usarlo con el comando ```composer``` solamente y no ```php composer.phar```:

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

Para instalar [`Laravel`](https://laravel.com/docs/5.7) es necesario correr el siguiente comando:

```
composer global require "laravel/installer"
```

También hay que asegurarse de instalarlo en $PATH para poder usarse globalmente.
Ahora puedes seguir los siguientes pasos:

1. Clonar repositorio en tu computadora

```bash
$ git clone https://github.com/ProyectoIntegrador2018/tutor_virtual.git
```

2. Correr composer dentro de la carpeta clonada para las dependencias.

```bash
composer install
```

3. Encender el servidor de manera local.

```
php artisan serve
```
