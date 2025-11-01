# Portal Roleplay - Plantilla

Esta es una plantilla minimal para un portal web de un servidor de roleplay con:
- Tienda (lista de items con precio)
- Trabajos / Sueldos (salarios por hora)
- Enlaces (Discord, reglas, tienda de donaciones, etc.)

Tecnologías:
- Backend: Node.js + Express
- Frontend: HTML / CSS / JS (estático)
- Datos simples: archivos JSON en /data (fáciles de convertir luego a DB)

Instalación y ejecución:
1. Instala dependencias:
   - npm install
2. Ejecuta la app:
   - npm start
   - Accede a http://localhost:3000

Estructura:
- server.js -> servidor Express, sirve static y APIs (/api/shop, /api/jobs, /api/links, /api/buy)
- public/ -> archivos estáticos (páginas y assets)
- data/ -> JSON con datos de ejemplo
- package.json -> comandos e info

Extensiones recomendadas:
- Añadir autenticación (Discord OAuth, Steam, etc.)
- Guardar compras y usuarios en una base de datos (Postgres, MongoDB)
- Backend de administración para agregar/quitar items y trabajos
- Integración con pasarela de pagos para compras reales
- Mejorar UI/UX (frameworks como React/Vue) y hacer mobile-first

Si quieres, puedo:
- Crear la versión con panel de administración (login + CRUD)
- Conectar a una base de datos (indícame cuál)
- Traducir a otro idioma o adaptar el diseño
- Subir estos archivos directamente a tu repo (dime la rama y commit message)