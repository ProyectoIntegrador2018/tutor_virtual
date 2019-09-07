# Tutor Virtual

[![Maintainability](https://api.codeclimate.com/v1/badges/ba4ca1e8e93e5cef25d7/maintainability)](https://codeclimate.com/github/ProyectoIntegrador2018/tutor_virtual/maintainability)

El sistema tiene como objetivo el automatizar los procesos que lleva a cabo nuestra cliente, Dora Elizabeth García Olivier, perteneciente del Centro Virtual de Aprendizajes. Dentro de sus actividades que actualmente realiza de manera manual se incluyen el: Dar de alta a alumnos, profesores y directivos asociados al servicio social Aprendizaje Verde.

## Tabla de contenidos

* TBD

## Detalles del Cliente

| Nombre              | Email               | Rol              |
| ------------------- | ------------------- | ---------------- |
| Dora García Olivier | degolivier@itesm.mx | Coordinador CVA  |


## Ambientes del Sistema

* **Producción** - [TutorVirtual](http://tutorvirtual.herokuapp.com/)
* **Desarrollo** - [Dev-TutorVirtual](http://dev-tutorvirtual.herokuapp.com/)

Equipo: AD 2019

| Nombre             | Email              | Rol          |
| ------------------ | ------------------ | ------------ |
| Sergio Diaz        | a01192313@itesm.mx | Scrum Master |
| Patricio Forbes    | A01192455@itesm.mx | PO Proxy     |
| Arturo González    | A01193188@itesm.mx | Desarrollo   |

##  Herramientas

Pide acceso a las siguientes herramientas de no ser que no lo tengas:

* [Github repo](https://github.com/ProyectoIntegrador2018/tutor_virtual)
* [Backlog](https://github.com/ProyectoIntegrador2018/tutor_virtual/projects/2)
* [Documentation](https://drive.google.com/drive/folders/16hcLTaW8YtWHzEUo9VfwR-Qjewcsap-G?usp=sharing)

## Configuración del proyecto

### Pre-condiciones
- Install docker and docker-compose.


### Build and Run

EL siguiente comando usa un multi-stage build para usar compilaciones de
varias etapas, y levantar la aplicación con un solo comando:

```
docker-compose up web
```

El comando anterior construirá la imagen si no existe, llamada: `proyecto_integrador / tutor_virtual: development`.

### Debbuging
La estructura del proyecto permite a cualquiera ejecutar fácilmente una consola
de bash para poder ejecutar cualquier tipo de instrucción. Por ejemplo algo como ```rails db:create```, ```rails db:migrate```, o ```rails db:seed```


```
docker-compose run --rm web bash
```

### Pruebas
Si se ejecuta ```rails db:seed```, se agregarán dos usuarios de prueba a la base
de datos. Uno con permisos normales y otro con permisos de administrador.
```
user: user@example.com
password: 123456

user: admin@example.com
password: 123456

```
## Stack Tecnológico

### Librerías Front End:
* Jquery
* CSS

### Librerías Back End:

* Ruby on Rails
