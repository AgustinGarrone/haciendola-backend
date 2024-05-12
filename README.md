
## Haciendola Backend

Aplicación CRUD de productos y usuarios creada en 24hs, con una base inicial de productos cargados mediante un excel.

## Tecnologías destacadas

- **NestJS**: Framework de Node.js para construir aplicaciones eficientes y escalables del lado del servidor.
- **Express**: Framework web minimalista para Node.js utilizado por NestJS como base.
- **Passport.js**: Middleware de autenticación para Node.js.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js, compatible con varios dialectos SQL, incluido PostgreSQL.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional de código abierto.
- **JWT (JSON Web Tokens)**: Método estándar para la transferencia segura de datos entre dos partes.

## Pre requisitos
- Tener **Docker** instalado en tu sistema

## Instalacion

Ejecutamos el comando
```bash

$ git clone https://github.com/AgustinGarrone/haciendola-backend.git
```

Accede al directorio del repositorio
```bash

$ cd haciendola-backend
```


## Ejecución

```bash
# Construimos la imagen basada en la aplicación
docker build -t haciendola-nest-app .

# Ejecutamos las imagenes (postgres y app)
docker compose up
```

Y listo!

## Documentación
Visitando /docs encuentra la documentación del api rest
**http://localhost:3000/docs**

## Extras realizados
- Usar JWT para manejar la autenticación de usuarios
- Encriptación de contraseñas con Bcrypt
- Usar Typescript
-  Uso de alguna librería o framework para creación de SPA
-  Validar que el usuario esté
logeado para acceder a ventanas privadas
- Aplicación responsiva (hasta cierto punto. Mobile no)
- Uso de algún framework para la construcción del backend en NodeJS
- Validar la autentificación del usuario al intentar acceder a las rutas de
producto.
- Uso de alguna herramienta para generar documentación. Swagger 
