# antoniocerrato.github.io

Web académica personal de Antonio Cerrato Casado.

La página está planteada como una web estática sencilla para GitHub Pages, con una primera versión en español. Reúne información de docencia, recursos docentes, aplicaciones interactivas de Streamlit, investigación, contacto y una sección personal.

## Estructura

- `index.html`: portada de la web.
- `docencia.html`: página de docencia y mapa de asignaturas.
- `investigacion.html`: página de investigación, actualmente en construcción.
- `yo.html`: página personal, actualmente en construcción.
- `asignaturas/`: páginas específicas de asignaturas.
- `styles.css`: estilos visuales compartidos.
- `assets/campus-home.png`: ilustración principal de la portada.
- `assets/teaching-campus.png`: ilustración interactiva de docencia.
- `AGENTS.md`: instrucciones para futuros agentes.

## Secciones principales

- Inicio.
- Docencia.
- Investigación.
- Yo.
- Contacto.

## Cómo publicar en GitHub Pages

1. Sube los archivos al repositorio `antoniocerrato.github.io`.
2. Entra en **Settings > Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta correspondiente.
5. Guarda los cambios.

## Cómo añadir una aplicación de Streamlit

Edita la página de la asignatura correspondiente dentro de `asignaturas/` o la sección de asignaturas en `docencia.html`. Por ejemplo:

```html
<a href="https://tu-app.streamlit.app/" target="_blank" rel="noopener">
  Nombre de la aplicación
</a>
```

## Próximos pasos recomendados

- Completar la página personal `yo.html`.
- Completar las páginas de asignaturas.
- Desarrollar la página de investigación.
- Crear más adelante una versión inglesa, por ejemplo en `en/index.html`.
