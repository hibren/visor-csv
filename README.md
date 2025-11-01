# 🗺️ Visor de Ubicaciones CSV con Leaflet

Este proyecto es un **visor interactivo de ubicaciones geográficas** desarrollado con **React**, **Leaflet** y **TailwindCSS**, que permite **cargar archivos CSV** con coordenadas (`latitude`, `longitude`) y visualizar los puntos en un mapa dinámico.

Además, incluye una **leyenda generada automáticamente** según las descripciones del CSV, un **panel lateral** para cargar o limpiar datos, y **popups personalizados** con colores e información de cada punto.

---

## ✨ Características principales

- 📂 Carga de archivos `.csv` mediante drag & drop o selector.
- 🗺️ Visualización de puntos en **Leaflet** con mapa claro (OpenStreetMap).
- 🎨 Colores dinámicos por categoría de descripción (detectadas automáticamente).
- 💬 Popups tipo tarjeta con diseño limpio y moderno.
- 📘 Leyenda flotante dinámica con botón de apertura/cierre (`ℹ️`).
- 🧭 Ajuste automático del mapa según las coordenadas cargadas.
- 🧱 Construido con **React + Vite / Create React App**, **TailwindCSS**, y **Framer Motion**.

---

## 🧰 Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|--------------|
| ⚛️ **React** | Framework principal de la aplicación |
| 🗺️ **Leaflet** + **React-Leaflet** | Motor de mapas interactivos |
| 🎨 **TailwindCSS** | Framework CSS para diseño moderno |
| 🪶 **Lucide-React** | Íconos minimalistas |
| 📦 **PapaParse** | Lectura y parseo rápido de archivos CSV |
| 🌀 **Framer Motion** | Animaciones suaves para UI (sidebar y leyenda) |

---

## ⚙️ Instalación y ejecución

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/TU_USUARIO/visor-csv.git
   cd visor-csv

2. **Instalar dependencias**

- npm install


3. **Ejecutar el servidor de desarrollo**

- npm start


4. **Abrir http://localhost:3000** en el navegador.




