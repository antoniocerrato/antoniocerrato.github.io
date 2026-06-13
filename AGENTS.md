# Instrucciones para futuros agentes

Este repositorio contiene la web personal académica de Antonio Cerrato Casado. Es una web estática para GitHub Pages, sin framework, sin JavaScript y sin proceso de compilación.

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

## Publicación

- La web debe poder abrirse directamente desde `index.html` y publicarse en GitHub Pages.
- Mantener enlaces relativos para navegación interna.
