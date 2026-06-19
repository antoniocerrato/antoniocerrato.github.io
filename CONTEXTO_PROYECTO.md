# Contexto para continuar el proyecto

Este archivo resume el estado actual de la web personal de Antonio Cerrato Casado para que una futura sesión pueda retomarla sin reconstruir el contexto desde cero.

## Objetivo general

La web es una página personal académica y docente para GitHub Pages. Debe ser estática, sencilla de mantener, en español, con un estilo visual unificado y sobrio.

La idea actual es organizarla por páginas, no como una única página larga:

- `index.html`: portada.
- `docencia.html`: entrada a docencia con mapa visual de asignaturas.
- `investigacion.html`: página de investigación, por ahora en construcción.
- `yo.html`: página personal, de tono humano y cercano, por ahora en construcción.
- `asignaturas/`: páginas principales de asignaturas.
- `temas/`: páginas de temas o unidades docentes.

## Estado reciente

Última actualización de contexto: 2026-06-19.

Último commit subido a GitHub:

```text
13e2d0b Añade aplicaciones PERT
```

En esa actualización se hizo lo siguiente:

- Se añadieron dos nuevas aplicaciones Streamlit de PERT a `enlaces_aplicaciones.txt`.
- Se enlazaron las dos apps en `docencia.html`, dentro de la asignatura Proyectos de Ingeniería.
- Se enlazaron las dos apps en `asignaturas/proyectos-ingenieria.html`, agrupadas bajo `Planificación de proyectos`.
- Se añadió a `AGENTS.md` la indicación de usar la skill `docencia-web-acc` cuando esté disponible.

Actualización de sesión de 2026-06-19:

- Se añadió una nueva aplicación Streamlit de planificación y programación de proyectos:
  `CPM-PERT AoA con simulación Monte Carlo`.
- La nueva app se añadió a `enlaces_aplicaciones.txt`, `docencia.html` y `asignaturas/proyectos-ingenieria.html`, dentro de `Planificación de proyectos`.
- Se empezó a desarrollar la asignatura de Procedimientos Generales de Construcción.
- Se creó la carpeta `temas/procedimientos/`.
- Se creó `temas/procedimientos/pipe-jacking.html`, como entrada base sobre pipe jacking o hinca de tuberías.
- Se creó `temas/procedimientos/box-jacking.html`, como entrada sobre box jacking o hinca de cajón.
- `asignaturas/procedimientos-construccion.html` enlaza directamente a `Pipe jacking` y `Box jacking`, sin subenlaces internos.
- Se añadieron estilos en `styles.css` para vídeos HTML5 y tarjetas de recursos visuales.
- En `pipe-jacking.html` se insertaron vídeos HTML5 de Pipe Jacking Association/Iseki:
  - `PJA_Introduction.mp4`.
  - `ISEKI Pipejacking Microtunelling Animation.m4v`.
- En `box-jacking.html` no se deben usar esos vídeos de PJA/Iseki como si fueran box jacking, porque son de pipe jacking / microtunnelling.
- Para `box-jacking.html` se añadieron recursos visuales específicos del caso Werrington:
  - Vídeo de BBC News sobre el cajón empujado bajo la East Coast Main Line.
  - Página de Network Rail sobre `Werrington grade separation`.
- Importante: se probó a embeber páginas HTML de Pipe Jacking Association con `iframe`, pero dieron problemas o enlaces 404. Evitar `pipejacking.html`; usar `pipeintro.html` como página externa, o los archivos de vídeo directos si siguen disponibles.

El repositorio no quedó limpio al final de esta sesión: hay cambios pendientes en páginas docentes, estilos, enlaces de apps y nuevas páginas bajo `temas/procedimientos/`.

## Estilo visual

- Mantener el estilo de la portada: texto a la izquierda e imagen/mapa a la derecha cuando sea posible.
- Usar `styles.css` como hoja común.
- Mantener una estética académica, clara y sobria.
- No usar frameworks ni dependencias de build salvo que Antonio lo pida expresamente.
- Las tarjetas deben ser discretas, con bordes suaves y coherentes con el estilo actual.
- Las páginas de asignatura y tema deben sentirse parte de la misma web, no como documentos aislados.

## Archivos importantes

- `index.html`: portada con imagen `assets/campus-home.png`.
- `docencia.html`: página de docencia con mapa `assets/teaching-campus.png`.
- `asignaturas/proyectos-ingenieria.html`: página de la asignatura Proyectos de Ingeniería.
- `asignaturas/procedimientos-construccion.html`: página de Procedimientos Generales de Construcción.
- `asignaturas/tecnologia-materiales-construccion.html`: página relacionada con Tecnología de Materiales de Construcción / Construcción de Aeropuertos I.
- `temas/proyectos/estudios-previos-viabilidad-economica.html`: primer tema real creado.
- `temas/procedimientos/pipe-jacking.html`: tema introductorio sobre pipe jacking / hinca de tuberías.
- `temas/procedimientos/box-jacking.html`: tema sobre box jacking / hinca de cajón.
- `styles.css`: estilos globales, incluyendo estilos para temas, navegación lateral, fórmulas, cajas de recursos e iframes.
- `AGENTS.md`: instrucciones generales para futuros agentes.
- `README.md`: descripción pública del proyecto.

## Imágenes actuales

- `assets/campus-home.png`: portada. Es un campus isométrico con una casita para la sección `Yo`.
- `assets/teaching-campus.png`: mapa docente. Tiene tres zonas:
  - Proyectos de Ingeniería: edificio de oficinas.
  - Procedimientos: zona de construcción.
  - Materiales: laboratorio de materiales.
- `assets/engineering-campus.png`: imagen original conservada como respaldo. No sobrescribir salvo petición explícita.

## Páginas y enlaces docentes

En `docencia.html` hay tres accesos principales:

- Proyectos de Ingeniería.
- Procedimientos Generales de Construcción.
- Tecnología de Materiales de Construcción.

En `asignaturas/proyectos-ingenieria.html`, `Análisis financiero` y `Crédito y financiación` deben colgar de:

- `Estudios previos - Viabilidad económica`

En `asignaturas/proyectos-ingenieria.html`, las aplicaciones de PERT cuelgan de:

- `Planificación de proyectos`

El tema está en:

- `temas/proyectos/estudios-previos-viabilidad-economica.html`

## Tema creado: Estudios previos - Viabilidad económica

El tema contiene dos unidades de aprendizaje:

1. `Tipos de crédito y sistemas de amortización`
   - Sistema americano.
   - Sistema italiano/alemán.
   - Sistema francés.
   - App embebida de Crédito y financiación.

2. `Análisis financiero de inversiones`
   - Flujos de caja antes de impuestos.
   - Amortizaciones y base imponible.
   - VAN.
   - TIR.
   - Prima de riesgo.
   - Payback simple y ajustado.
   - Rotación del capital.
   - App embebida de Análisis financiero.

La página usa MathJax para fórmulas LaTeX. Mantener esta configuración si se crean más temas con fórmulas:

```html
<script>
  window.MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]]
    }
  };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

## Aplicaciones Streamlit

Las apps están enlazadas y embebidas con `iframe` en el tema de viabilidad económica.

Análisis financiero:

```text
https://e6zekqwyxrgyqzrlygxtpm.streamlit.app/
```

Crédito y financiación:

```text
https://app-app-proyectos-financiacion-ayhrrrdjzncdsnkhu2adba.streamlit.app/
```

PERT - Método de los tres valores:

```text
https://app-app-pert-beta-rn2vcevphg96wr6tcgwatm.streamlit.app/
```

Simulador PERT AoN:

```text
https://appapppert-5sih3pdrjfbej26psurqwb.streamlit.app/
```

CPM-PERT AoA con simulación Monte Carlo:

```text
https://appapppert-aoa-gtw6uamf4v2rcxwaesx5cw.streamlit.app/
```

Para embeber Streamlit se está usando `?embed=true`, por ejemplo:

```html
<iframe
  src="https://e6zekqwyxrgyqzrlygxtpm.streamlit.app/?embed=true"
  title="Aplicación de análisis financiero"
  loading="lazy"
></iframe>
```

Mantener también un botón/enlace externo de respaldo porque Streamlit puede tardar en despertar o verse mejor en pestaña nueva.

## Enlaces oficiales de asignaturas

Procedimientos Generales de Construcción:

```text
https://www.us.es/estudiar/que-estudiar/oferta-de-grados/grado-en-ingenieria-civil/2250033
```

Proyectos y Dirección de Obras:

```text
https://www.us.es/estudiar/que-estudiar/oferta-de-grados/grado-en-ingenieria-civil/2250034
```

Construcción de Aeropuertos I:

```text
https://www.us.es/estudiar/que-estudiar/oferta-de-grados/grado-en-ingenieria-aeroespacial/1970032
```

En Proyectos conviene incluir el enlace oficial de Proyectos y Dirección de Obras. En una fase anterior también se habló de que Proyectos y Procedimientos comparten contenidos, así que el enlace de Procedimientos puede aparecer relacionado si Antonio lo quiere.

## Temas creados en Procedimientos

La asignatura `asignaturas/procedimientos-construccion.html` enlaza ahora dos temas:

- `temas/procedimientos/pipe-jacking.html`
- `temas/procedimientos/box-jacking.html`

`Pipe jacking` debe funcionar como entrada base para entender la hinca con gatos hidráulicos, pozos de ataque y recepción, guiado, rozamiento, lubricación y control de asientos.

`Box jacking` debe centrarse en cajones rectangulares, pasos inferiores, marcos de drenaje, pasos bajo ferrocarril o carretera, control de asientos y auscultación. Puede mencionar su relación con pipe jacking, pero no debe mezclar los vídeos o ejemplos de pipe jacking como si fueran box jacking.

Recursos visuales actuales:

- En `pipe-jacking.html`, vídeos HTML5 directos de Pipe Jacking Association/Iseki:
  - `https://www.pipejacking.org/assets/pj/static/PJA_Introduction.mp4`
  - `https://www.pipejacking.org/assets/pj/static/ISEKI%20Pipejacking%20Microtunelling%20Animation.m4v`
- En `box-jacking.html`, caso Werrington:
  - BBC News: `https://www.bbc.co.uk/news/av/uk-england-cambridgeshire-55800851`
  - Network Rail: `https://www.networkrail.co.uk/running-the-railway/our-routes/lne-and-em/east-coast-mainline-route-upgrade/werrington-grade-separation/`

Si se añaden más vídeos de box jacking, comprobar que sean realmente de box jacking, box culvert jacking, jacked box, curved box jack o hinca de cajón, no solo de pipe jacking.

## Preferencias de Antonio

- La portada debe ser más tipo portada, no una página con demasiadas secciones.
- Mantener enlaces a perfiles de investigación y contacto en la portada.
- La sección `Yo` debe tener tono humano, cercano y personal.
- El texto `Profesor Ayudante Doctor` debe tener un tamaño algo mayor que antes.
- En Docencia, la imagen debe aparecer a la derecha como en la portada, no obligar a hacer scroll para verla.
- Las asignaturas deben poder crecer con temas, unidades, imágenes y aplicaciones.
- GitHub Pages sigue siendo una opción adecuada mientras la web sea estática y las imágenes estén optimizadas.

## Codificación

Muy importante: mantener todos los archivos en UTF-8.

En varias ocasiones han aparecido textos rotos por problemas de codificación. Antes de terminar una sesión, buscar:

```powershell
rg "codificacion-rota" -n .
```

Si aparecen coincidencias, corregirlas.

## Verificaciones útiles

Comprobar rutas internas:

```powershell
$files = Get-ChildItem -Recurse -File -Include *.html; foreach ($file in $files) { $content = Get-Content -Raw -LiteralPath $file.FullName; [regex]::Matches($content, '(?:href|src)="([^"]+)"') | ForEach-Object { $link = $_.Groups[1].Value; if ($link -notmatch '^(https?:|mailto:|#)') { $path = $link.Split('#')[0]; if ($path) { $target = Join-Path $file.DirectoryName $path; if (-not (Test-Path -LiteralPath $target)) { "Missing in $($file.Name): $link" } } } } }
```

Comprobar estado:

```powershell
git status --short
```

## Posibles próximos pasos

- Crear una página de tema para planificación de proyectos / PERT si las aplicaciones crecen con teoría, ejemplos o prácticas.
- Revisar visualmente en navegador `pipe-jacking.html` y `box-jacking.html`, especialmente los vídeos HTML5 y las tarjetas del caso Werrington.
- Buscar más vídeos realmente específicos de box jacking y sustituir búsquedas abiertas por enlaces concretos si se encuentran fuentes fiables.
- Revisar visualmente en navegador las apps embebidas y ajustar altura de `.app-embed` si hace falta.
- Convertir las páginas de asignatura a carpetas con `index.html` si el contenido crece mucho.
- Crear más temas dentro de `temas/proyectos/`.
- Añadir imágenes optimizadas por tema, preferiblemente en carpetas organizadas por asignatura.
- Completar `yo.html` con un texto más personal.
- Completar `investigacion.html` con líneas de investigación y producción científica.
- Valorar analítica ligera si Antonio quiere contar visitas o clics.
