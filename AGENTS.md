# Instrucciones para futuros agentes

Este repositorio contiene la web personal académica de Antonio Cerrato Casado. Es una web estática para GitHub Pages, sin framework, sin JavaScript y sin proceso de compilación.

Para cambios de contenido, estructura o estilo en esta web docente, usar la skill local
`docencia-web-acc`, disponible en `skills/docencia-web-acc/SKILL.md`. Esta copia del
repositorio es la referencia preferente; si también existe una copia instalada fuera del
proyecto, mantener ambas sincronizadas cuando se cambie el procedimiento.

## Estilo y estructura

- Mantener una estructura por páginas, no una única página larga.
- Usar `index.html` como portada.
- Usar `docencia.html`, `investigacion.html`, `yo.html` y páginas dentro de `asignaturas/` para contenido específico.
- Mantener un estilo visual unificado reutilizando `styles.css`.
- El tono general debe ser académico, claro y sobrio. La página `yo.html` puede ser más humana, cercana y personal.
- No introducir dependencias ni frameworks salvo petición explícita.

## Codificación y contenido

- Mantener todos los archivos en UTF-8.
- No dejar caracteres rotos por problemas de codificación.
- No cambiar cargos, asignaturas, periodos docentes, correo, enlaces institucionales ni datos académicos sensibles sin confirmación del usuario.
- Los archivos `personal_info_ACC.md` y `enlaces_aplicaciones.txt` son fuentes de contenido.
- Para el tema `temas/proyectos/documentos-proyecto.html`, el contenido del apartado sobre el Pliego de Prescripciones Técnicas Particulares debe proceder de los documentos Word ubicados en `Fuentes_Ignorar/`. Esa carpeta no se versiona y podría actualizarse en el futuro; si cambia, extraer de nuevo la información de esos Word sin inventar contenido.

## Imágenes

- Los assets visuales principales viven en `assets/`.
- No sobrescribir imágenes existentes salvo petición explícita; crear nombres nuevos y actualizar referencias.
- La portada usa `assets/campus-home.png`.
- La página de docencia usa `assets/teaching-campus.png`.
- Las entradas docentes extensas, y especialmente los casos de estudio sobre errores o
  desastres de ingeniería, deben ser visualmente ricas. No considerar terminada una entrada
  con una única miniatura de vídeo: incorporar varias imágenes relevantes distribuidas a lo
  largo de la narración.
- Priorizar fotografías, planos y figuras de informes oficiales, archivos públicos,
  organismos técnicos o repositorios con licencia clara. Cada imagen documental debe tener
  pie con descripción, fuente, autor o crédito cuando conste, licencia cuando proceda y enlace
  a su ficha de origen.
- Las figuras no deben ser decorativas: deben ayudar a situar el caso, comparar soluciones,
  seguir una secuencia o explicar el mecanismo técnico.
- En los casos de estudio sobre errores o desastres, no sustituir una figura documental o
  técnica con ilustraciones generadas por el agente. Si no se encuentra material contrastado
  con calidad suficiente, buscar otra fuente, enlazar el documento original o dejar la
  incorporación visual pendiente antes que fabricar un esquema de menor claridad.
- Comprobar las dimensiones reales de los assets locales y declarar `width` y `height`
  coherentes. Para planos, documentos, fotografías verticales o encuadres que deban verse
  completos, usar altura automática y `object-fit: contain`; no imponer contenedores que
  recorten el contenido.

## Casos de estudio sobre fallos de ingeniería

- Usar las entradas recientes más completas —en especial
  `temas/proyectos/puente-quebec.html`— como estándar mínimo de profundidad, claridad,
  calidad visual y fuentes.
- Contar el proyecto completo, no únicamente el colapso: necesidad, viabilidad, actores,
  financiación, alcance, ingeniería básica y de detalle, construcción y estados
  provisionales, avisos, accidente, investigación, correcciones, impacto humano y vida
  posterior, siempre que exista documentación suficiente.
- Relacionar los factores técnicos y organizativos mediante una narración causal y
  verificable. Evitar explicaciones monocausales, moralejas simplistas y bloques docentes
  repetitivos del tipo «Qué enseña el caso».
- Integrar de forma natural cuestiones de alcance, coste, plazo, riesgo, documentación,
  interfaces, comunicación y autoridad. Las entradas deben funcionar como artículos
  técnicos legibles, no como fichas esquemáticas.
- Tratar víctimas, trabajadores y comunidades afectadas como parte sustantiva del caso,
  con rigor y sin sensacionalismo.
- Cuando Antonio aporte un vídeo o una transcripción, leerlo completo para localizar
  aspectos relevantes, pero contrastar cronologías, cifras y causalidad con informes
  oficiales, archivos y fuentes técnicas primarias. Una transcripción automática orienta
  la investigación; no sustituye la verificación.
- Separar hechos confirmados, estimaciones, hipótesis técnicas y responsabilidades
  jurídicas. No elevar a dato firme un detalle dramático o secundario que solo aparezca en
  una fuente divulgativa.
- Terminar con referencias anotadas que expliquen qué aporta cada fuente, dando prioridad
  a informes de investigación y organismos oficiales.

## Vídeos externos

- Como la web debe funcionar al abrir los HTML directamente mediante `file://`, no incrustar vídeos de YouTube con `iframe`: YouTube puede devolver el error 153 por falta de un origen HTTP.
- Presentar cada vídeo mediante una tarjeta 16:9 con imagen preliminar, icono de reproducción y texto descriptivo. Toda la tarjeta debe enlazar al vídeo en una pestaña nueva mediante `target="_blank"` y `rel="noopener"`.
- Para YouTube, usar su miniatura pública `https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg`; comprobar que exista y usar `hqdefault.jpg` si no está disponible.
- Para otros proveedores, preferir una imagen local nueva dentro de `assets/`; no sobrescribir imágenes existentes.
- No enlazar reproductores o archivos remotos con certificados caducados, errores de seguridad o disponibilidad dudosa. Buscar una fuente estable o indicar que el recurso no está disponible.
- Reutilizar las clases `video-preview-link`, `video-preview-image`, `video-play-icon` y `video-preview-copy` de `styles.css`.
- Las aplicaciones interactivas, como Streamlit, no se consideran vídeos y pueden conservar sus `iframe` con un enlace externo de respaldo.

## Publicación

- La web debe poder abrirse directamente desde `index.html` y publicarse en GitHub Pages.
- Mantener enlaces relativos para navegación interna.
