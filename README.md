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

* **Producción** - [TutorVirtual](https://tec-tutores.herokuapp.com/)

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

### Test

EL siguiente comando usa un multi-stage build para usar compilaciones de
varias etapas, y levantar la aplicación en el ambiente de ```test``` con un
solo comando:

```
docker-compose run --rm test bash
```
El comando anterior construirá la imagen si no existe, llamada: `proyecto_integrador / tutor_virtual: development`.

### Debbuging
La estructura del proyecto permite a cualquiera ejecutar fácilmente una consola
de bash para poder ejecutar cualquier tipo de instrucción. Por ejemplo algo como ```rails db:create```, ```rails db:migrate```, o ```rails db:seed```

```
docker-compose run --rm web bash
```

### Pruebas
Si se ejecuta ```rails db:seed```, se agregará un usuarios de prueba a la base
de datos con permisos de administrador.
```
user: admin@example.com
password: 123456

```
## Deployment
Toda la información con respecto al deployment de la aplicación se encuentra
[aquí](docs/DEPLOYMENT.md)


## Debugging in production
Toda la información con respecto a debbuging en producción se encuentra
[aquí](docs/DEPLOYMENT.md)


## Stack Tecnológico

### Librerías Front End:
* HTML5
* CSS
* ERB

### Librerías Back End:

* Ruby on Rails

### Otras tecnologías de deployment
* docker
* heroku
* circleci (tbd)
