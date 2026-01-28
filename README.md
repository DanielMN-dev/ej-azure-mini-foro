Mini Foro Web – Node.js & Azure

Aplicación web sencilla desarrollada con Node.js y Express siguiendo el patrón MVC.
Incluye frontend en HTML, CSS y JavaScript y backend preparado para conexión con Azure SQL Database.

Tecnologías
- Node.js
- Express
- Azure SQL Database
- HTML5 / CSS3 / JavaScript
- Fetch API
- Helmet (seguridad)
- dotenv

Funcionalidades
- Listado de tareas
- Creación de nuevas tareas
- API REST
- Manejo de errores
- Seguridad básica

Arquitectura
- MVC
- Separación de frontend y backend
- Variables de entorno para credenciales

Seguridad
- Uso de Helmet
- Consultas SQL parametrizadas
- Validación de datos en backend
- No exposición de credenciales

Preparado para Azure

El backend está configurado para conectarse a Azure SQL Database mediante variables de entorno y conexión cifrada.

Ejecución local
```bash
npm install
npm run dev
