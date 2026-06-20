---
name: docencia-web-acc
description: Editar la web académica y docente de Antonio Cerrato Casado en github-site-antoniocerrato. Usar para cambios de contenido, estructura o estilo en HTML/CSS; páginas de docencia, asignaturas y temas; integración de materiales docentes; y presentación de vídeos, imágenes o aplicaciones externas.
---

# Docencia Web ACC

## Objetivo

Editar la web pensando en la lectura del alumnado. Mantenerla estática, sobria, académica y publicable directamente mediante GitHub Pages.

## Reglas esenciales

- Leer primero `AGENTS.md` y tratarlo como fuente local de verdad.
- Tratar el HTML visible como material para estudiantes, no como notas de implementación.
- No mostrar etiquetas internas como «Fuente Word», «Markdown», «archivo fuente», «carpeta», «extracción» o «contenido provisional» salvo petición expresa.
- Usar títulos naturales y etiquetas como «Material de clase», «Guía», «Apuntes», «Ejemplo» o «Lectura recomendada».
- No inventar contenido académico. Preservar el significado y la estructura de las fuentes; limitarse a ordenar, limpiar, dividir y adaptar el marcado.
- No enlazar desde la web pública archivos privados o ignorados por Git.
- Mantener la web sin frameworks, compilación ni JavaScript salvo petición expresa.
- Reutilizar la estructura, los enlaces relativos y las clases existentes de `styles.css` antes de crear patrones nuevos.

## Flujo de trabajo

1. Leer `AGENTS.md`, la página que se va a modificar y ejemplos cercanos.
2. Identificar al lector público, normalmente alumnado de la asignatura.
3. Convertir el material en HTML semántico: títulos, párrafos, listas, tablas, notas y cajas de recursos.
4. Mantener títulos y pies orientados al alumnado; dejar la procedencia técnica fuera del contenido visible.
5. Antes de terminar, buscar en el HTML editado términos internos, caracteres rotos y rutas relativas inexistentes.
6. Comprobar `git diff --check`, el estado de Git y que las carpetas privadas sigan sin seguimiento.

## Presentación de vídeos externos

Las páginas deben poder abrirse mediante `file://`. Los reproductores externos pueden exigir un origen HTTP; YouTube, por ejemplo, puede devolver el error 153. Usar por defecto una tarjeta enlazada en lugar de un reproductor incrustado.

### Patrón recomendado

- Colocar la tarjeta inmediatamente bajo el título o la introducción del tema.
- Usar una imagen 16:9, un icono de reproducción superpuesto y un texto breve.
- Hacer pulsable toda la tarjeta con `target="_blank"` y `rel="noopener"`.
- Añadir un `aria-label` descriptivo y un `alt` que explique la imagen.
- Reutilizar `video-preview-link`, `video-preview-image`, `video-play-icon`, `video-preview-copy` y `hero-video`.
- Para YouTube, obtener el identificador de la URL y usar `https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg`; verificar la imagen y recurrir a `hqdefault.jpg` si es necesario.
- Para otros proveedores, crear un asset local con nombre nuevo. No presentar una ilustración como fotograma real si no lo es.
- Verificar que la página de destino y su certificado funcionen. No conservar enlaces que produzcan errores de seguridad.
- Mantener los enlaces con marcas de tiempo en pestaña nueva cuando ayuden a seguir el contenido.

Los `iframe` de aplicaciones interactivas como Streamlit son una excepción: conservarlos cuando aporten interacción real y acompañarlos de un enlace externo de respaldo.

## Notas del proyecto

- `Fuentes_Ignorar/` contiene documentos no versionados. Para `temas/proyectos/documentos-proyecto.html`, actualizar el PPTP desde esos documentos si cambian.
- Los assets principales viven en `assets/`; crear nombres nuevos y no sobrescribir los existentes sin permiso.
- Mantener todos los archivos en UTF-8 y la navegación interna mediante rutas relativas.
