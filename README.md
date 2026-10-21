# 📊 Análisis Numérico: TP's del Grupo 11

Portal unificado de acceso a las aplicaciones interactivas desarrolladas para la cátedra de **Análisis Numérico** (3er Año - Ingeniería en Sistemas de Información).

---

## 🚀 Proyectos y Enlaces Desplegados

A continuación se detallan los módulos y trabajos prácticos disponibles en el portal:

| Módulo | Tema / Descripción | Estado | Enlace de Producción |
| :--- | :--- | :---: | :--- |
| **TP 01** | **Métodos de Jacobi y Gauss-Seidel**<br>Resolución iterativa de sistemas de ecuaciones lineales ($Ax = b$). | 🟢 Disponible | [analisis-numerico-tp-2.vercel.app](https://analisis-numerico-tp-2.vercel.app/) |
| **TP 02** | **Ajuste Alométrico (Caso 4) - Clústeres de Animales**<br>Modelado no lineal, regresión de potencia y agrupamiento morfométrico. | 🟢 Disponible | [frontend-weld-six-54.vercel.app](https://frontend-weld-six-54.vercel.app/) |
| **TP 03** | **Método de Euler**<br>Aproximación numérica para Ecuaciones Diferenciales Ordinarias (EDO). | 🟢 Disponible | [metodo-euler-grupo11.vercel.app](https://metodo-euler-grupo11.vercel.app/) |
| **TP 04** | **Trabajo Práctico Nº 4**<br>Próxima entrega académica. | ⏳ En desarrollo | Anclaje local (`#card-pendiente`) |

---

## 🛠️ Tecnologías Empleadas

El portal fue construido utilizando estándares modernos de desarrollo web sin dependencias pesadas:

- **HTML5 Semántico**: Estructura accesible (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`) con atributos de accesibilidad (`aria-label`, `role`).
- **CSS3 Moderno**:
  - Variables CSS (*Design Tokens*) para mantenimiento de paleta cromática y tipografías.
  - Estética *Dark Mode* con efectos de *Glassmorphism* (`backdrop-filter: blur()`).
  - Animaciones y micro-interacciones (elevación en *hover*, iluminación de bordes y efecto *spotlight*).
  - **Media Queries**: Totalmente responsivo para computadoras de escritorio, tablets y dispositivos móviles.
- **JavaScript Vanilla**:
  - Manejo de notificación emergente (*Toast notification*) para el módulo pendiente.
  - Cálculo de coordenadas de cursor para efectos visuales reactivos en tarjetas.

---

## 📂 Estructura del Proyecto

```text
contenido_tps_unificado/
│
├── index.html        # Página principal de inicio con las 4 tarjetas interactivas
├── styles.css        # Hoja de estilos con variables, diseño responsivo y animaciones
├── script.js         # Lógica interactiva para eventos, accesibilidad y notificaciones
├── vercel.json       # Configuración base de despliegue para Vercel
├── .gitignore        # Exclusiones de archivos del sistema operativo y editores
└── README.md         # Documentación del proyecto
```

---

## 🌐 Despliegue en Vercel

Este proyecto cuenta con `vercel.json` preconfigurado con encabezados de seguridad y optimización de caché para sitios estáticos:

1. **Vía Dashboard (GitHub / GitLab / Bitbucket)**:
   - Importá el repositorio en [vercel.com/new](https://vercel.com/new).
   - Vercel detectará el proyecto estático de forma automática (no requiere configuración de Build Command ni Output Directory).
   - Hacé clic en **Deploy**.

2. **Vía Vercel CLI**:
   - En la terminal del proyecto, ejecutá:
     ```bash
     npx vercel
     ```
   - Para desplegar a producción:
     ```bash
     npx vercel --prod
     ```

---

## 💻 Cómo Ejecutar el Proyecto Localmente

No se requiere ningún gestor de paquetes ni instalación de librerías adicionales:

1. **Opción 1: Apertura directa**
   - Hacé doble clic en el archivo `index.html` para abrirlo en cualquier navegador web moderno (Chrome, Edge, Firefox, Brave, Safari).

2. **Opción 2: Extensión Live Server (VS Code)**
   - Abrí el proyecto en Visual Studio Code.
   - Hacé clic derecho sobre `index.html` y seleccioná **"Open with Live Server"**.

3. **Opción 3: Servidor HTTP rápido (Python)**
   - En la consola o terminal dentro del directorio del proyecto, ejecutá:
     ```bash
     python -m http.server 8080
     ```
   - Abrí en tu navegador: `http://localhost:8080`

---

## 👥 Autores

- **Grupo 11** — *Análisis Numérico*
- **Carrera**: Ingeniería en Sistemas de Información (3° Año)
