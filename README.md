
## Haciendola Backend

Aplicación CRUD de productos y usuarios, con una base inicial de productos cargados mediante un excel.

## Tecnologías destacadas

NestJS: Framework de Node.js para construir aplicaciones eficientes y escalables del lado del servidor.
Express: Framework web minimalista para Node.js utilizado por NestJS como base.
Passport.js: Middleware de autenticación para Node.js.
Sequelize: ORM (Object-Relational Mapping) para Node.js, compatible con varios dialectos SQL, incluido PostgreSQL.
PostgreSQL: Sistema de gestión de bases de datos relacional de código abierto.
JWT (JSON Web Tokens): Método estándar para la transferencia segura de datos entre dos partes.

## Pre requisitos
Node.js y pnpm instalados en tu sistema.
PostgreSQL instalado y configurado en tu sistema.
base de datos que se ajuste al archivo providers.ts dentro de database para lograr la conexión inicial. Las tablas se generan solas.
![database](https://github.com/AgustinGarrone/haciendola-backend/assets/75916775/8e8746e0-e4c8-416c-bfa7-208495381d1d)

## Instalacion

Ejecutamos el comando
```bash

$ git clone https://github.com/AgustinGarrone/haciendola-backend.git
```

Accede al directorio del repositorio
```bash

$ cd haciendola-backend
```

Instala las dependencias del proyecto:

```bash

$ pnpm install
```



## Ejecución

```bash
# development
$ pnpm start

# watch mode
$ npm pnpm start:dev

```
