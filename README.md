# 💼 Portafolio Personal — Ivonee Montserrat Vargas Vicente

Portafolio web personal de **Ivonee Montserrat Vargas Vicente**, estudiante de Ingeniería en
Sistemas Computacionales. Es un sitio de una sola página construido con **HTML, CSS y
JavaScript**, usando **Bootstrap 5** como framework de estilos, a partir de la plantilla
**Resume** de Start Bootstrap. Muestra quién soy, mis proyectos, mi formación académica, mis
habilidades técnicas y una forma de contactarme.

🔗 **Repositorio:** `https://github.com/Ivonee-Montserrat-Vargas-Vicente/TU-REPOSITORIO`
🌐 **GitHub Pages (demo en vivo):** `https://ivonee-montserrat-vargas-vicente.github.io/TU-REPOSITORIO/`

> ⚠️ Reemplaza `TU-REPOSITORIO` por el nombre real de tu repositorio una vez que lo subas
> y actives GitHub Pages.

---

## 📖 Descripción del proyecto

- **Framework CSS usado:** Bootstrap 5 (no se combina con Tailwind).
- **Plantilla específica:** Start Bootstrap - Resume.
- **Descargar la plantilla:** https://startbootstrap.com/theme/resume
- **Repositorio original de la plantilla:** https://github.com/StartBootstrap/startbootstrap-resume
- **Licencia de la plantilla:** MIT (uso libre, incluso comercial).

### Menú y secciones del portafolio

El sitio tiene una barra de navegación lateral fija que lleva a cada sección mediante scroll
suave. Las secciones, en el orden en que aparecen en el menú, son:

| Sección | Descripción |
|---|---|
| **Sobre mí** (`#about`) | Presentación personal: nombre, datos de contacto (correo y teléfono) y una breve descripción de quién soy y qué me interesa como estudiante de Ingeniería en Sistemas Computacionales. Incluye enlaces a mis redes (GitHub, LinkedIn, correo). |
| **Proyectos** (`#experience`) | Sección de la plantilla original llamada "Experience", que renombré y adapté a "Proyectos" porque todavía no tengo experiencia laboral formal. Incluye proyectos académicos y personales que ya hice, y uno que tengo planeado a futuro. |
| **Educación** (`#education`) | Mi formación académica: institución, programa de estudios y periodo. |
| **Habilidades** (`#skills`) | Tecnologías que domino actualmente (HTML, CSS, JavaScript, Java, Bootstrap, MySQL, PostgreSQL) y las que quiero seguir desarrollando (React/Node.js, Python, etc.). |
| **Intereses** (`#interests`) | Gustos e intereses personales fuera del desarrollo de software. |
| **Logros** (`#awards`) | Cursos, certificaciones y metas relevantes. |
| **Contacto** (`#contact`) | Sección nueva que agregué (no existe en la plantilla original). Formulario de contacto con campos de nombre, correo y mensaje, validado con JavaScript puro. |

---

## 🛠️ Proceso de creación

Así fue cómo armé el portafolio a partir de la plantilla, paso a paso:

1. **Elección de la plantilla.** Elegí *Start Bootstrap - Resume* por su diseño limpio tipo
   currículum, con barra lateral fija y secciones ancladas por scroll, ideal para un portafolio
   personal.
2. **Descarga de la plantilla.** Obtuve el código fuente oficial desde el repositorio de GitHub
   de Start Bootstrap, usando la carpeta `dist/`, que ya viene compilada (HTML, CSS y JS listos
   para usar, sin necesidad de Node ni npm).
3. **Reorganización de archivos.** Adapté la estructura de carpetas de la plantilla al formato
   pedido en la actividad:
   - `css/styles.css` → CSS base de la plantilla (Bootstrap 5 + estilos del tema), sin modificar.
   - `css/portafolio.css` → archivo nuevo con mis personalizaciones (color de acento, sombra en
     la foto de perfil, efectos al pasar el mouse, centrado del contenido, estilos del formulario
     de contacto).
   - `js/scripts.js` → JS base de la plantilla (scrollspy y comportamiento del menú responsivo).
   - `js/portafolio.js` → archivo nuevo con la validación del formulario de contacto en
     JavaScript puro.
   - `img/` → imágenes usadas (foto de perfil, favicon).
4. **Traducción y adaptación del contenido.** Todo el texto de ejemplo de la plantilla (en
   inglés, tipo "lorem ipsum" corporativo) lo reemplacé por contenido real en español: mi
   presentación, mis proyectos académicos y personales (sistema de gestión escolar en Java y
   MySQL, lista de tareas en JavaScript, portafolio, y un sistema de inventario planeado en
   PostgreSQL), mi educación, mis habilidades reales y mis metas de aprendizaje.
5. **Nueva sección de Contacto.** La plantilla original no incluye un formulario de contacto,
   así que agregué esta sección siguiendo el mismo estilo visual del resto del sitio, con su
   enlace correspondiente en el menú de navegación.
6. **Formulario funcional del lado del cliente.** Programé `js/portafolio.js` para validar los
   campos del formulario (nombre, correo, mensaje) y mostrar un mensaje de confirmación, ya que
   al ser un sitio estático en GitHub Pages no hay backend para procesar envíos reales.
7. **Personalización visual.** En `css/portafolio.css` cambié el color de acento principal,
   agregué una sombra a la foto de perfil, pequeños efectos `hover` en la sección de proyectos y
   de habilidades, y centré el contenido de cada sección en pantallas grandes (la plantilla
   original lo dejaba pegado a la izquierda con mucho espacio vacío a la derecha).
8. **Foto de perfil.** Reemplacé la imagen genérica de la plantilla (`img/profile.jpg`) por una
   foto real, formal y profesional (fondo neutro, buena iluminación, vestimenta adecuada), tal
   como pide la actividad.
9. **Publicación.** Subí el proyecto a un repositorio público de GitHub y activé **GitHub
   Pages** desde la configuración del repositorio (rama `main`, carpeta raíz `/`).

---

## 🗂️ Estructura del repositorio
├── README.md
├── index.html
├── css/
│   ├── styles.css        # CSS base de la plantilla (Bootstrap 5 + tema)
│   └── portafolio.css    # Estilos personalizados
├── js/
│   ├── scripts.js        # JS base de la plantilla (scrollspy, menú)
│   └── portafolio.js     # JS personalizado (validación del formulario)
└── img/
├── profile.jpg        # Foto de perfil
└── favicon.ico
---

## 📸 Capturas de pantalla

Portafolio funcionando en el navegador:

**Sección "Sobre mí"**

![Sección Sobre mí](img/screenshots/sobre-mi.png)

**Sección "Proyectos"**

![Sección Proyectos](img/screenshots/proyectos.png)

**Sección "Contacto"**

![Sección Contacto](img/screenshots/contacto.png)

> 📌 Para que estas imágenes se vean, crea la carpeta `img/screenshots/`, guarda ahí tus
> capturas con esos nombres (`sobre-mi.png`, `proyectos.png`, `contacto.png`) y súbelas junto
> con el resto del proyecto.

---

## 🚀 Cómo ver el proyecto localmente

1. Clona el repositorio:
```bash
   git clone https://github.com/Ivonee-Montserrat-Vargas-Vicente/TU-REPOSITORIO.git
```
2. Entra a la carpeta del proyecto y abre `index.html` directamente en tu navegador,
   o usa una extensión como *Live Server* en VS Code.

## 🌐 Cómo activar GitHub Pages

1. Ve a tu repositorio en GitHub → **Settings** → **Pages**.
2. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
3. Guarda los cambios y espera un par de minutos.
4. El link de tu portafolio en vivo aparecerá en esa misma sección
   (formato `https://ivonee-montserrat-vargas-vicente.github.io/TU-REPOSITORIO/`).

---

## 📄 Créditos

- Plantilla base: [Start Bootstrap - Resume](https://startbootstrap.com/theme/resume) por
  David Miller / Start Bootstrap, licencia MIT.
- Iconos: [Font Awesome](https://fontawesome.com/).
- Adaptación, contenido y secciones nuevas: Ivonee Montserrat Vargas Vicente.
