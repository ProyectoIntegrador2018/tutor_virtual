# Tutor Virtual

[![Maintainability](https://api.codeclimate.com/v1/badges/ba4ca1e8e93e5cef25d7/maintainability)](https://codeclimate.com/github/ProyectoIntegrador2018/tutor_virtual/maintainability)

El sistema tiene como objetivo el automatizar los procesos que lleva a cabo nuestra cliente, Dora Elizabeth García Olivier, perteneciente del Centro Virtual de Aprendizajes. Dentro de sus actividades que actualmente realiza de manera manual se incluyen el: Dar de alta a alumnos, profesores y directivos asociados al servicio social Aprendizaje Verde.

## Tabla de contenidos

* [Detalles del Cliente](#detalles-del-cliente)
* [Ambientes del Sistema](#ambientes-del-sistema)
* [Equipo de trabajo](#equipo-de-trabajo)
* [Herramientas](#herramientas)
* [Configuración del proyecto](#Configuración-del-proyecto)
* [Correr el proyecto para desarrollo](#Correr-el-proyecto-para-desarrollo)
* [Detener el proyecto](#Detener-el-proyecto)

### Detalles del Cliente

| Nombre              | Email               | Rol              |
| ------------------- | ------------------- | ---------------- |
| Dora García Olivier | degolivier@itesm.mx | Coordinador CVA  |


### Ambientes del Sistema

* **Producción** - [TutorVirtual](http://tutorvirtual.herokuapp.com/)
* **Desarrollo** - [Dev-TutorVirtual](http://dev-tutorvirtual.herokuapp.com/)

Equipo: Ene - May 2019

| Nombre             | Email              | Rol          |
| ------------------ | ------------------ | ------------ |
| Hector Ortiz       | a01032773@itesm.mx | Scrum Master |
| Oscar Flores       | a00817333@itesm.mx | Desarrollo   |
| Carlos Sanchez     | a01139506@itesm.mx | Desarrollo   |
| Alfredo Sánchez    | a00397967@itesm.mx | Desarrollo   |
| Diego Contreras    | a00817441@itesm.mx | Desarrollo   |

### Herramientas

Pide acceso a las siguientes herramientas de no ser que no lo tengas:

* [Github repo](https://github.com/ProyectoIntegrador2018/tutor_virtual)
* [Backlog](https://github.com/ProyectoIntegrador2018/tutor_virtual/projects/2)
* [Documentation](https://drive.google.com/drive/folders/16hcLTaW8YtWHzEUo9VfwR-Qjewcsap-G?usp=sharing)

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

3. Migrar la base de datos.

```
php artisan migrate
```

### Correr el proyecto para desarrollo

4. Encender el servidor de manera local.

```
php artisan serve
```

### Detener el proyecto

Para detener el servidor completamente presiona

```
CTRL + C
```

dentro de la terminal donde encendiste el mismo.

## Stack Tecnologico

### Librerias Front End:
* Jquery
* CSS

### Librerias Back End:

* Ruby on Rails

