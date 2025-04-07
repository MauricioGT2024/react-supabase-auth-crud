# React Supabase Auth CRUD

Aplicación web desarrollada con React que implementa autenticación y operaciones CRUD utilizando Supabase como backend.

## Características

- Autenticación con email usando Magic Link de Supabase
- CRUD completo de tareas
- Interfaz responsiva con Bootstrap
- Gestión de estado con Context API
- Enrutamiento con React Router

## Tecnologías

- React 19
- Supabase
- Bootstrap 5
- Vite
- React Router

## Configuración del proyecto

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd react-supabase-auth-crud
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
```
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Estructura de la base de datos

La aplicación requiere una tabla `tasks` en Supabase con la siguiente estructura:

```sql
create table tasks (
  id serial primary key,
  name text not null,
  done boolean default false,
  user_id uuid references auth.users not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

## Funcionalidades

- **Autenticación**: Sistema de login mediante Magic Link
- **Gestión de tareas**: 
  - Crear nuevas tareas
  - Marcar tareas como completadas
  - Eliminar tareas
  - Filtrar tareas por estado (completadas/pendientes)

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter
- `npm run preview`: Previsualiza la versión de producción
