# Repo Backend Grup 4 de EA Q1 2024-25 --> TeachMe
Jordi Figueras, Pere Garcés, Bryan García i Júlia Roquet
Resumen de los pasos principales:
Modelo de Datos:

Se crea un modelo de Etiqueta en MongoDB, que contiene los campos nUsuario (un array de ObjectIds que hace referencia al modelo de Usuario), colorFav y descripcion.
Operaciones CRUD:

Se implementan funciones para realizar operaciones CRUD en el recurso de etiquetas:
Crear, listar, actualizar y eliminar etiquetas.
Funciones adicionales para asignar usuarios a etiquetas mediante el ID de la etiqueta o el nombre del usuario.
Rutas y Controladores:

Se definen rutas y controladores para las operaciones CRUD, además de rutas específicas para asignar usuarios a etiquetas.
GET: Para obtener etiquetas, con la opción de hacer un populate para obtener los usuarios asociados.
POST: Para crear una nueva etiqueta o asignar un usuario a una etiqueta.
PUT: Para actualizar etiquetas existentes.
DELETE: Para eliminar etiquetas.
Pruebas:

Se usa Postman o similar para hacer peticiones a las rutas y verificar que las operaciones (como asignar usuarios a etiquetas) funcionan correctamente.
Problema Resuelto:
El sistema permite gestionar etiquetas, asignando a cada una usuarios según sus identificadores, realizando todas las operaciones necesarias (crear, listar, actualizar, eliminar) y asegurando la integridad de las relaciones entre usuarios y etiquetas en MongoDB.


