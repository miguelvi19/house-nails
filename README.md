# House Nails App

Aplicativo base para estandarizar la operacion de House Nails.

## Que incluye

- Inicio con KPIs, ventas, equipo, agenda del dia y alertas de inventario.
- Agenda semanal con filtros por manicurista.
- Clientes con busqueda, filtros y vista de perfil.
- Pagos y caja con pendientes de cobro.
- Inventario con alertas y ajuste de stock.
- Recordatorios con plantillas e historial.

## Desarrollo local

```bash
npm install
npm run dev
```

Luego abre la URL local que muestre Vite.

## Subirlo a GitHub

Desde esta carpeta:

```bash
git init
git add .
git commit -m "Crear aplicativo House Nails"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/house-nails-app.git
git push -u origin main
```

Antes de ejecutar `git remote add`, crea el repositorio vacio en GitHub y reemplaza `TU-USUARIO`.

## Desplegar en Vercel

1. Entra a Vercel y elige `Add New Project`.
2. Importa el repositorio de GitHub.
3. Usa estos valores:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

El archivo `vercel.json` ya deja configurado el build y las rutas para que la aplicacion funcione como SPA.

## Estructura

```text
house-nails/
  src/
    main.jsx
    styles.css
  public/
    favicon.svg
  index.html
  package.json
  vite.config.js
  vercel.json
```

## Version sin instalar

Tambien deje un prototipo autonomo en:

`../house-nails-standalone.html`

Ese archivo se puede abrir directamente en el navegador para revisar la estructura general.
