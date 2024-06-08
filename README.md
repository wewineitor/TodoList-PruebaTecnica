# Prueba Técnica - To-Do List Application

## 📝 Descripción del Proyecto

Este repositorio contiene el código fuente para una aplicación de gestión de tareas (To-Do List) desarrollada en Javascript con React y Laravel. La aplicación permite a los usuarios gestionar sus tareas diarias con funcionalidades avanzadas y ofrece una API RESTful para la gestión de tareas y autenticación de usuarios.

## Características principales:

- **Lista de Tareas**: Permite agregar nuevas tareas, marcar tareas como completadas, editar tareas existentes y filtrar tareas por estado (todas, completadas, pendientes).

- **Componentización**: La lista de tareas, el formulario para agregar/editar tareas y cada tarea individual están desarrollados como componentes separados.

- **Sistema de Rutas**: Implementado usando React Router o Vue Router para navegar entre las vistas principales de la aplicación.

- **Modo Oscuro/Claro**: Implementación de un tema oscuro/modo claro.

## ⚡ Instalacion

### React

1. Clonar el repositorio: 🔄 Abre tu terminal y navega al directorio donde desees clonar el repositorio. Luego, ejecuta el siguiente comando para clonar el repositorio:

```console
git clone URL-del-repositorio
```

2. Navegar al directorio del proyecto: 📂 Ingresa al directorio del proyecto clonado:
```console
cd nombre-del-proyecto
```

3. Instalar dependencias: 🛠️ Instala las dependencias del proyecto utilizando npm :
```console
npm install
```

4. Iniciar el servidor de desarrollo: 🖥️ Ejecuta el siguiente comando para iniciar el servidor de desarrollo:
```console
npm run dev
```

### Laravel

1. Clonar el repositorio: 🔄 Abre tu terminal y navega al directorio donde desees clonar el repositorio. Luego, ejecuta el siguiente comando para clonar el repositorio:

```console
git clone URL-del-repositorio
```

2. Navegar al directorio del proyecto: 📂 Ingresa al directorio del proyecto clonado:
```console
cd nombre-del-proyecto
```

3. Instalar dependencias de Composer: 🛠️ Ejecuta el siguiente comando para instalar las dependencias de Composer:
```console
composer install
```

4. Configurar el entorno: ⚙️ Crea un archivo .env copiando .env.example y configura tu entorno con los siguientes datos a partir de la linea 22:

```console
DB_CONNECTION=mysql
DB_HOST=srv1441.hstgr.io
DB_PORT=3306
DB_DATABASE=u369255455_prueba
DB_USERNAME=u369255455_edwin
DB_PASSWORD=6NnFFXZ31v/
```

5. Generar clave de aplicación: 🔑 Ejecuta el siguiente comando para generar una nueva clave de aplicación:
```console
php artisan key:generate
```

6. Iniciar servidor de desarrollo: 🖥️ Inicia el servidor de desarrollo de Laravel con el siguiente comando:
```console
php artisan serve
```

## 📌 Puntos importantes
- El proyecto se encuentra desplegado en: [https://frontend.wewindev.net/](https://frontend.wewindev.net/)
- Aunque se intentó integrar Redux, no se logró satisfactoriamente. Se mejorará la comprensión de su implementación para proyectos futuros.
- No tenia mucha experiencia con Laravel. Se adquirió durante el desarrollo del proyecto aprendiendo sobre la marcha.
- La API de Laravel utiliza autenticación mediante un token Bearer. Para acceder a los endpoints no protegidos, el usuario debe estar autenticado y poseer su token correspondiente.
- Dentro del proyecto front, en src/api se encuentra un archivo que sirve como config para la url de la api, el proyecto laravel deberia correr en el puerto 8000, si por alguna razon no funciona se puede cambiar por la url de produccion la cual es https://wewindev.net/api

## 🛠️ Herramientas utilizadas

<img  src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">

<img  src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">

<img  src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">

<img  src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white">

<img  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">

<img  src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white">

<img  src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white">

<img  src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white">

## 👤 Autor

[<img src="https://avatars.githubusercontent.com/u/53845240?v=4" width=115><br><sub>Edwin Isaac Avila Garcia</sub>](https://github.com/wewineitor)
