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
