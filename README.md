# 💼 Portafolio Personal — Ivonee Montserrat Vargas Vicente

Portafolio web personal construido con **HTML, CSS y JavaScript**, usando **Bootstrap 5** como
framework de estilos, a partir de la plantilla **Resume** de Start Bootstrap.

🔗 **Repositorio:** `https://github.com/Ivonee-Montserrat-Vargas-Vicente/TU-REPOSITORIO`
🌐 **GitHub Pages (demo en vivo):** `https://Ivonee-Montserrat-Vargas-Vicente.github.io/TU-REPOSITORIO/`

> ⚠️ Reemplaza `TU-REPOSITORIO` por el nombre real que le des al repositorio una vez que lo
> subas y actives GitHub Pages.

---

## 📖 Descripción del proyecto

Este portafolio está construido con **Bootstrap 5** (no se combina con Tailwind), usando como
base la plantilla gratuita y de código abierto:

- **Plantilla usada:** Start Bootstrap - Resume
- **Descargar plantilla:** https://startbootstrap.com/theme/resume
- **Repositorio original de la plantilla:** https://github.com/StartBootstrap/startbootstrap-resume
- **Licencia:** MIT (de uso libre, incluso comercial)

### Menú / secciones del portafolio

El sitio es de una sola página (*single page*) con una barra de navegación lateral fija que
lleva a cada sección mediante scroll suave:

| Sección | Descripción |
|---|---|
| **Sobre mí** (`#about`) | Presentación personal: nombre, datos de contacto y una breve descripción de quién soy y qué me interesa como estudiante de Ingeniería en Sistemas Computacionales. |
| **Proyectos** (`#experience`) | Sección reutilizada de "Experiencia" de la plantilla original, renombrada a "Proyectos" ya que aún no tengo experiencia laboral formal. Incluye proyectos académicos y personales realizados, y uno planeado a futuro. |
| **Educación** (`#education`) | Formación académica: institución, programa de estudios y periodo. |
| **Habilidades** (`#skills`) | Tecnologías que domino actualmente (HTML, CSS, JavaScript, Java, Bootstrap, MySQL, PostgreSQL) y las que quiero seguir desarrollando. |
| **Intereses** (`#interests`) | Gustos e intereses personales fuera del desarrollo. |
| **Logros** (`#awards`) | Cursos, certificaciones y metas relevantes. |
| **Contacto** (`#contact`) | Sección añadida sobre la plantilla original. Formulario de contacto (nombre, correo, mensaje) con validación en JavaScript puro. |

---

## 🛠️ Proceso de creación

1. **Elección de la plantilla:** se eligió *Start Bootstrap - Resume* por su diseño limpio tipo
   currículum, con barra lateral fija y secciones ancladas por scroll, ideal para un portafolio
   personal.
2. **Descarga:** se obtuvo el código fuente oficial desde el repositorio de GitHub
   (`StartBootstrap/startbootstrap-resume`), usando la carpeta `dist/` que ya viene compilada
   (HTML, CSS y JS listos para usar sin necesidad de Node/npm).
3. **Reorganización de archivos:** se adaptó la estructura de carpetas de la plantilla al formato
   pedido en la actividad:
   - `css/styles.css` → CSS base de la plantilla (Bootstrap + estilos del tema), sin modificar.
   - `css/portafolio.css` → archivo nuevo con las personalizaciones propias (colores, efectos
     hover, estilos del formulario de contacto).
   - `js/scripts.js` → JS base de la plantilla (scrollspy y comportamiento del menú responsivo).
   - `js/portafolio.js` → archivo nuevo con la validación del formulario de contacto en
     JavaScript puro.
   - `img/` → imágenes usadas (foto de perfil, favicon).
4. **Traducción y adaptación del contenido:** todo el texto de ejemplo (en inglés, tipo
   "lorem ipsum" corporativo) se tradujo y se reemplazó por contenido en español relacionado con
   un estudiante en formación: experiencia académica, habilidades que se están aprendiendo y
   metas de certificación.
5. **Nuevas secciones:** la plantilla original no incluye una sección de "Proyectos" ni de
   "Contacto", así que se agregaron dos secciones nuevas siguiendo el mismo estilo visual del
   resto del sitio (`#projects` y `#contact`), y se añadieron sus respectivos enlaces en el menú
   de navegación.
6. **Formulario funcional (front-end):** se programó `js/portafolio.js` para validar los campos
   del formulario de contacto (nombre, correo, mensaje) y mostrar un mensaje de confirmación,
   ya que al ser un sitio estático (GitHub Pages) no hay backend para procesar envíos reales.
7. **Personalización visual:** en `css/portafolio.css` se cambió el color de acento principal,
   se agregó una sombra a la foto de perfil y pequeños efectos `hover` en la sección de
   proyectos y de habilidades, sin tocar el CSS original de la plantilla.
8. **Foto de perfil:** se reemplazó la imagen genérica de la plantilla (`img/profile.jpg`) por
   una foto real, formal y profesional (fondo neutro, buena iluminación, vestimenta adecuada),
   tal como pide la actividad.
9. **Publicación:** se subió el proyecto a un repositorio público de GitHub y se activó
   **GitHub Pages** desde la configuración del repositorio (rama `main`, carpeta raíz `/`).

---

## 🗂️ Estructura del repositorio

```
├── README.md
├── index.html
├── css/
│   ├── styles.css        # CSS base de la plantilla (Bootstrap 5 + tema)
│   └── portafolio.css    # Estilos personalizados
├── js/
│   ├── scripts.js        # JS base de la plantilla (scrollspy, menú)
│   └── portafolio.js     # JS personalizado (validación del formulario)
└── img/
    ├── profile.jpg        # Foto de perfil (reemplazar por foto real)
    └── favicon.ico
```

---

## 📸 Capturas de pantalla

> Agrega aquí capturas de pantalla del portafolio funcionando en el navegador
> (sección "Sobre mí", "Proyectos" y "Contacto" son buenas opciones).
> Guarda las imágenes en `img/screenshots/` y enlázalas así:
>
> ```md
> ![Vista de inicio](img/screenshots/inicio.png)
> ![Sección de proyectos](img/screenshots/proyectos.png)
> ```

---

## 🚀 Cómo ver el proyecto localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   ```
2. Entra a la carpeta del proyecto y abre `index.html` directamente en tu navegador,
   o usa una extensión como *Live Server* en VS Code.

## 🌐 Cómo activar GitHub Pages

1. Ve a tu repositorio en GitHub → **Settings** → **Pages**.
2. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
3. Guarda los cambios y espera un par de minutos.
4. El link de tu portafolio en vivo aparecerá en esa misma sección
   (formato `https://TU-USUARIO.github.io/TU-REPOSITORIO/`).

---

## 📄 Créditos

- Plantilla base: [Start Bootstrap - Resume](https://startbootstrap.com/theme/resume) por
  David Miller / Start Bootstrap, licencia MIT.
- Iconos: [Font Awesome](https://fontawesome.com/).
- Adaptación, contenido y secciones nuevas: [Tu Nombre].
