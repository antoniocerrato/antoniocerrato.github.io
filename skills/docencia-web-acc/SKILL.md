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
- Tratar las imágenes como parte del contenido docente. Las entradas extensas y los casos de
  estudio deben incluir varias imágenes o figuras relevantes repartidas por la narración; una
  sola miniatura de vídeo no constituye una cobertura visual suficiente.
- Elegir cada recurso visual por su función explicativa: contexto, configuración, secuencia,
  comparación o mecanismo. Priorizar fuentes oficiales y licencias claras y documentar la
  procedencia en el pie.
- En casos de estudio sobre errores o desastres no reemplazar las figuras documentales o
  técnicas con ilustraciones generadas por el agente. Si no hay material contrastado de
  calidad suficiente, buscar otra fuente, enlazar el documento original o dejar la imagen
  pendiente.

## Casos de estudio de ingeniería

- Tomar como referencia editorial las entradas más recientes y completas del proyecto,
  especialmente `temas/proyectos/puente-quebec.html`. Igualar como mínimo su profundidad,
  claridad narrativa, riqueza visual y trazabilidad de fuentes.
- Reconstruir el proyecto, no solo el instante del fallo. Cuando las fuentes lo permitan,
  explicar la necesidad inicial, estudios y viabilidad, promotor y financiación, alcance,
  organización y reparto de autoridad, ingeniería básica y de detalle, fabricación o
  construcción, estados provisionales, señales previas, accidente, investigación,
  correcciones, consecuencias humanas y evolución posterior de la infraestructura.
- Presentar los factores técnicos y organizativos como una cadena de decisiones verificable.
  Evitar reducir un caso complejo a una causa única, una moraleja o una lista genérica de
  «lecciones aprendidas».
- Integrar la lectura docente en la narración. Evitar secciones mecánicas como «Qué enseña
  el caso», preguntas aisladas para el aula o fichas repetitivas cuando la relación con
  alcance, coste, plazo, riesgo, documentación, interfaces y responsabilidades pueda
  explicarse directamente en el artículo.
- Dar entidad propia a las personas afectadas. Incluir víctimas, trabajadores, comunidades
  y distribución social del riesgo cuando estén documentados, sin convertirlos en una nota
  secundaria ni utilizar un tono sensacionalista.
- Si el usuario aporta un vídeo, documental o transcripción, leer el material completo y
  usarlo para descubrir líneas de investigación, cronologías y aspectos humanos o
  constructivos. No tratar la transcripción automática como fuente de autoridad: contrastar
  cifras, causalidad y afirmaciones técnicas con informes oficiales, archivos, organismos
  públicos o bibliografía técnica primaria.
- Diferenciar hechos confirmados, estimaciones, hipótesis técnicas y responsabilidades
  jurídicas. Suavizar o excluir los detalles secundarios que no puedan verificarse.
- Cerrar cada entrada con referencias anotadas: priorizar informes de investigación y
  fuentes oficiales; indicar brevemente qué aporta cada enlace.

## Flujo de trabajo

1. Leer `AGENTS.md`, la página que se va a modificar y ejemplos cercanos.
2. Si es un caso de estudio, revisar al menos dos entradas recientes de calidad y sus fuentes
   para fijar el estándar editorial antes de escribir.
3. Identificar al lector público, normalmente alumnado de la asignatura.
4. Convertir el material en HTML semántico: títulos, párrafos, listas, tablas, notas y cajas de recursos.
5. Mantener títulos y pies orientados al alumnado; dejar la procedencia técnica fuera del contenido visible.
6. Revisar la cobertura visual: comprobar que haya varias figuras útiles, bien distribuidas,
   con texto alternativo y pies que identifiquen claramente su fuente contrastada.
7. Comprobar las dimensiones intrínsecas de cada asset local y declarar `width` y `height`
   correctos. Usar el patrón de imagen natural (`height: auto` y `object-fit: contain`) cuando
   el encuadre tenga que respetarse completo; no imponer una ventana que recorte planos,
   fotografías verticales o documentos.
8. Verificar anclas, estructura HTML, rutas relativas, caracteres rotos y, cuando el entorno
   lo permita, revisar la página renderizada en escritorio y móvil.
9. Comprobar `git diff --check`, el estado de Git y que las carpetas privadas sigan sin seguimiento.
10. Al cerrar una sesión de trabajo relevante, actualizar `CONTEXTO_PROYECTO.md` con las
    decisiones editoriales, fuentes incorporadas, verificaciones y trabajo pendiente.

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
