# Inalambria-test
Repositorio para prueba técnica de inalambria. Este repositorio contiene el Backend para el proyecto de la librería.

Este consiste en un API utilizando Express, MySQL, GraphQL y Apollo.

# Configuración 

## Online
Este proyecto puede ser accedido a través de internet en el siguiente [enlace](http://ec2-52-10-114-157.us-west-2.compute.amazonaws.com:8000/graphql).  Sin embargo si deseas ejecutarlo localmente a continuación se mencionan algunas posibilidades.

## Local:

### Opción 1: Node.js
Para esta opción es necesario que poseas las siguientes herramientas:
- Node 8.4.0 o superior
- NPM 6.0.0 o Superior
- Copiar el archivo .env que se le envió por correo en el directorio raíz del proyecto, este contiene las credenciales necesarias para su correcto funcionamiento.

Ejecuta `npm install`en el directorio raíz del proyecto y posteriormente ejecuta `npm start`, el resultado será un servidor de express ejecutando en el localhost:8000 de tu máquina.

### Opción 2: Docker
Nota: Al igual que la anterior, es necesario que copies el archivo .env que se te envío por correo en el directorio raíz del proyecto.

Si posees Docker instalado en tu máquina también podras ejecutar el proyecto de manera sencilla con los siguientes comandos.
Ejecuta `docker build -t "back" .`  e inmediatamente la ejeecución de este termina ejecuta `docker run -d -p 8000:8000 --name=backend back`. El proyecto estará corriendo en el localhost:8000 de tu máquina.

# Trabajo futuro:
- Agregar lógica de spinner de carga en el front cada vez que se hagan peticiones asíncronas ya que algunas de estas son muy tardías y generan en el usuario la impresión de que se ha congelado la página.
- Agregar caché (con redis) del lado del servidor para queries recurrentes y adicionalmente implementar el patrón flyweight para tener una mejor separación de responsabilidades y ejecutar más rápido las reservas de libros.
- Agregar paginación del lado del servidor del lado del servidor por esta misma razón.
- Optimizaciones  para acelerar el rendimiento de la página (SSR, Service Workers, etc)
