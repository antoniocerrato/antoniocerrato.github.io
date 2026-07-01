# Contexto para continuar el proyecto

Este archivo resume el estado actual de la web personal de Antonio Cerrato Casado para que una futura sesión pueda retomarla sin reconstruir el contexto desde cero.

## Estado vigente — 2026-07-01

Este apartado prevalece sobre los historiales anteriores.

- Cierre de sesión: bloque docente verificado y listo para quedar publicado en `master`.
- La sesión incluye trabajo acumulado desde el último commit previo `6b2da55 suelos estabilizados 2`.
- Se ha ampliado la serie `Catástrofes y errores en proyectos de ingeniería` con cinco
  entradas nuevas:
  - `temas/proyectos/fiu-pasarela-peatonal.html`
  - `temas/proyectos/hyatt-regency.html`
  - `temas/proyectos/mars-climate-orbiter.html`
  - `temas/proyectos/challenger.html`
  - `temas/proyectos/airbus-a380-catia.html`
- Cada entrada separa expresamente:
  - tipo de error: proyecto, diseño, revisión, gestión, operación o comunicación;
  - coste del error: humano, económico, técnico, reputacional, científico o de programa;
  - lectura expositiva desde Proyectos de Ingeniería;
  - referencias y recursos visuales.
- Se han eliminado las secciones de `Actividad propuesta` de las páginas de la serie de
  catástrofes y errores. El criterio vigente es que estas entradas sean más expositivas y
  sirvan como lectura directa para clase.
- La entrada `temas/proyectos/hyatt-regency.html` se ha reescrito para explicar con más
  detalle el camino de cargas, el cambio de barras de suspensión, el papel de los planos de
  taller y la diferencia entre error de proyecto y error de gestión del proyecto.
- Revisión editorial posterior: evitar secciones y frases demasiado explícitas del tipo
  `Lectura desde Proyectos de Ingeniería`, `Qué enseña el caso`, `Para clase...`,
  `La lección...` o preguntas docentes directas. La reflexión sobre errores de diseño,
  gestión, interfaces, coste y riesgo debe quedar integrada de forma velada en un texto
  expositivo, con tono de artículo o blog técnico.
- La entrada `temas/proyectos/mars-climate-orbiter.html` se ha ampliado para evitar la
  simplificación de “error de unidades”:
  - identifica a NASA/JPL como centro líder y a Lockheed Martin Astronautics como
    contratista principal;
  - explica el papel de `SM_FORCES`, el archivo AMD y la interfaz que exigía `N-s`;
  - señala que el software de tierra produjo `lbf-s`, provocando una subestimación por
    factor 4,45;
  - incorpora eventos AMD 10-14 veces más frecuentes por la asimetría del panel solar,
    anomalías no cerradas formalmente, TCM-5 no ejecutada y problemas de ingeniería de
    sistemas/comunicación.
- `temas/proyectos/catastrofes-errores-proyectos-ingenieria.html` enlaza ahora esos casos
  desde la tabla general y explica que los casos enlazados tienen entrada propia.
- `asignaturas/proyectos-ingenieria.html` enlaza las nuevas entradas bajo la sección de
  Catástrofes y errores en proyectos de ingeniería.
- Criterio aplicado: priorizar casos con informes oficiales o fuentes técnicas sólidas y
  recursos visuales útiles para clase:
  - FIU: informe NTSB y vídeo NTSB.
  - Hyatt Regency: ficha e informe NIST/NBS y vídeo histórico enlazado.
  - Mars Climate Orbiter: ficha NASA Science, imagen NASA/JPL-Caltech e informe NASA.
  - Challenger: informe Rogers publicado por NASA e imagen NASA en dominio público.
  - Airbus A380 y CATIA: página oficial de Airbus, síntesis con referencias sobre retrasos,
    cableado, CATIA V4/V5 y gestión de configuración, e imagen de Wikimedia Commons.
- Verificaciones realizadas:
  - `git diff --check`: sin errores; solo avisos habituales LF/CRLF en Windows.
  - Comprobación de rutas internas HTML: sin rutas rotas.
  - Búsqueda de patrones típicos de codificación rota en archivos tocados: sin incidencias.
- Tras el commit y push de cierre, el siguiente paso natural es revisar visualmente en
  GitHub Pages las nuevas páginas de pilotes y de catástrofes/errores, especialmente
  imágenes externas, tarjetas de vídeo y lectura en móvil.

## Estado vigente — 2026-06-30

Este apartado prevalece sobre los historiales de 2026-06-29 y 2026-06-19 que se conservan más abajo.

- Rama `master` sincronizada con `origin/master`, con cambios pendientes sin commit.
- Último commit publicado: `6b2da55 suelos estabilizados 2`.
- Sitio público: `https://antoniocerrato.github.io/`.
- La web sigue siendo estática, sin framework, sin JavaScript y sin compilación.
- Las reglas obligatorias están en `AGENTS.md`.
- La skill local preferente está en `skills/docencia-web-acc/SKILL.md`.

### Cambios pendientes al cierre

`git status --short --branch` muestra:

- `M CONTEXTO_PROYECTO.md`
- `M asignaturas/procedimientos-construccion.html`
- `M asignaturas/proyectos-ingenieria.html`
- `M docencia.html`
- `M styles.css`
- `?? temas/procedimientos/pilotes-in-situ.html`
- `?? temas/procedimientos/seguridad-pilotes-in-situ.html`
- `?? temas/proyectos/catastrofes-errores-proyectos-ingenieria.html`
- `?? temas/proyectos/tacoma-narrows.html`

No se ha hecho commit ni push de estos cambios.

### Proyectos de Ingeniería

Se ha añadido un nuevo bloque de casos de estudio sobre catástrofes y errores en proyectos
de ingeniería.

Páginas relevantes:

- `temas/proyectos/catastrofes-errores-proyectos-ingenieria.html`
- `temas/proyectos/tacoma-narrows.html`

`asignaturas/proyectos-ingenieria.html` enlaza ahora:

- `temas/proyectos/estudios-previos-viabilidad-economica.html`
- `temas/proyectos/documentos-proyecto.html`
- `temas/proyectos/catastrofes-errores-proyectos-ingenieria.html`
  - subenlace a `#lista`
  - subenlace a `temas/proyectos/tacoma-narrows.html`

`docencia.html` incluye también un enlace directo a
`temas/proyectos/catastrofes-errores-proyectos-ingenieria.html` dentro de la tarjeta de
Proyectos de Ingeniería.

#### Catástrofes y errores en proyectos de ingeniería

La página funciona como lista inicial de casos de estudio. No debe leerse como una lista
cerrada ni exhaustiva, sino como un repertorio docente para explicar fallos técnicos,
organizativos, económicos, de operación, mantenimiento, comunicación y gestión del riesgo.

Incluye, entre otros:

- Tacoma Narrows.
- Puente del Tay.
- Puente de Quebec.
- St. Francis, Malpasset, Vajont, Teton y Banqiao.
- Hyatt Regency, Ronan Point, Sampoong, Rana Plaza y Grenfell.
- I-35W, Morandi y pasarela FIU.
- Citicorp Center y Millennium Bridge.
- Denver baggage system, Berlín-Brandenburgo, Ópera de Sídney, Big Dig y Eurotúnel.
- Herald of Free Enterprise, MS Estonia y London Valour.
- Lago Peigneur, Upper Big Branch, Frank Slide y Donner Pass.
- Sayano-Shushenskaya, Deepwater Horizon, Piper Alpha y Bhopal.
- Three Mile Island, Demon Core, Tokaimura, Chernóbil y Fukushima.
- Great Smog de Londres.
- Challenger, Columbia, Apollo 13, Nedelin, Ariane 5 y Mars Climate Orbiter.
- Korean Air Lines 007, Japan Airlines 123, American Airlines 587, Empire State B-25 y Boeing 737 MAX.
- OceanGate Titan, Gudauri, Love Parade y Gansu ultramaratón.

Varios casos se añadieron a partir del canal `Tragicus Disaster`:
`https://www.youtube.com/@tragicusdisaster`. No se incrustaron vídeos; la página solo cita
el canal como referencia inicial y recomienda completar cada caso con informes técnicos,
fuentes oficiales o investigaciones independientes.

Se decidió no incluir como desastre concreto el vídeo genérico sobre carreteras peligrosas
de China porque no identifica un caso único; puede servir en el futuro para una entrada
sobre diseño geométrico, explotación vial y riesgo.

#### Caso Tacoma Narrows

La página `temas/proyectos/tacoma-narrows.html` es la primera entrada desarrollada de la
serie de catástrofes y errores.

Contenido principal:

- Ficha rápida del caso.
- Imágenes históricas con cita y enlace a ficha de origen/licencia.
- Qué se proyectó.
- Qué ocurrió.
- Explicación de que el fallo no fue simplemente “resonancia”, sino una inestabilidad
  aeroelástica con oscilación torsional creciente.
- Lectura desde Proyectos de Ingeniería: alcance, coste, innovación, riesgo, comunicación
  y aprendizaje.
- Actividad propuesta para alumnos.
- Referencias.

Imágenes integradas en la página:

- Día de apertura del puente, procedente de University of Washington Libraries Digital
  Collections vía Wikimedia Commons:
  `https://commons.wikimedia.org/wiki/File:Opening_day_of_the_Tacoma_Narrows_Bridge,_Tacoma,_Washington.jpg`
- Colapso del vano principal, Wikimedia Commons, dominio público en Estados Unidos:
  `https://commons.wikimedia.org/wiki/File:Tacoma-narrows-bridge-collapse.jpg`

Otras referencias citadas en la página:

- `https://en.wikipedia.org/wiki/Tacoma_Narrows_Bridge_(1940)`
- `https://www.loc.gov/programs/national-film-preservation-board/film-registry/complete-national-film-registry-listing/`

### Estilos añadidos

`styles.css` incorpora estilos reutilizables para figuras de casos con imagen y pie citado:

- `.case-figure-grid`
- `.case-figure`
- `.case-figure img`
- `.case-figure figcaption`

Son responsive: dos columnas en escritorio y una columna en móvil. Mantener este patrón
para futuras entradas con imágenes citadas de fuentes externas.

### Criterio vigente para imágenes externas

Para entradas de casos de estudio:

- Priorizar imágenes de fuentes institucionales, archivos, organismos públicos, Wikimedia
  Commons o licencias abiertas claras.
- Integrar la imagen solo si hay ficha, origen y licencia suficientemente claros.
- Incluir pie de figura con autor/fuente/licencia cuando proceda y enlace a la ficha.
- Evitar descargar o copiar imágenes de prensa, blogs, capturas de YouTube o fuentes sin
  permiso/licencia clara.
- Si no hay imagen reutilizable, preferir enlace externo o esquema/figura propia claramente
  indicado como elaboración docente.

### Procedimientos Generales de Construcción

Se mantienen pendientes las páginas nuevas ya resumidas en el bloque de 2026-06-29:

- `temas/procedimientos/pilotes-in-situ.html`
- `temas/procedimientos/seguridad-pilotes-in-situ.html`

`asignaturas/procedimientos-construccion.html` enlaza esas dos páginas además de pipe
jacking, box jacking, suelos expansivos y estabilización con cal.

### Verificaciones de cierre

- Búsqueda de patrones típicos de codificación rota sobre los archivos tocados: sin coincidencias reales.
- Comprobación de enlaces internos HTML: sin rutas rotas.
- `git diff --check`: sin errores; solo avisos habituales LF/CRLF de Git en Windows.
- `Fuentes_Ignorar/` y `Fuentes_ignorar/` deben seguir ignoradas por Git.

## Estado vigente — 2026-06-29

Este apartado prevalece sobre el historial de 2026-06-19 que se conserva más abajo.

- Rama `master` sincronizada con `origin/master`, con cambios pendientes de la sesión actual.
- Último commit publicado: `6b2da55 suelos estabilizados 2`.
- Sitio público: `https://antoniocerrato.github.io/`.
- La web sigue siendo estática, sin framework, sin JavaScript y sin compilación.
- Las reglas obligatorias están en `AGENTS.md`.
- La skill local preferente está en `skills/docencia-web-acc/SKILL.md`.

### Procedimientos Generales de Construcción

`asignaturas/procedimientos-construccion.html` enlaza seis temas:

1. `temas/procedimientos/pipe-jacking.html`
2. `temas/procedimientos/box-jacking.html`
3. `temas/procedimientos/suelos-expansivos-movimiento-tierras.html`
4. `temas/procedimientos/estabilizacion-suelos-cal.html`
5. `temas/procedimientos/pilotes-in-situ.html`
6. `temas/procedimientos/seguridad-pilotes-in-situ.html`

#### Suelos expansivos y movimiento de tierras

La entrada explica sobreexcavación, prehumectación, transporte mediante traíllas,
empuje coordinado con bulldozers D8/D9, extensión, compactación por tongadas,
maquinaria y control topográfico.

Vídeos:

- `https://www.youtube.com/watch?v=eogRt5vAbNs`
- `https://www.youtube.com/watch?v=F1l0eSJIztc`
- `https://www.youtube.com/watch?v=TWVtv9bO48E`

#### Estabilización de suelos con cal

La entrada desarrolla utilidad, selección del suelo, intercambio catiónico,
floculación, reacciones puzolánicas, dosificación mediante ensayos, ejecución,
maquinaria, control, comparación con otros ligantes y seguridad.

Vídeos:

- `https://www.youtube.com/watch?v=OdHaxWbirSI`
- `https://www.youtube.com/watch?v=mqoJiXDlv4U`
- `https://www.youtube.com/watch?v=FBGDYUpBdT8`
- `https://www.youtube.com/watch?v=_y6_md5ZG-o`
- `https://www.youtube.com/watch?v=-Pn5VJq1odU`

El último vídeo usa `hqdefault.jpg`; `maxresdefault.jpg` devolvía una miniatura gris.

#### Pilotes ejecutados in situ

La entrada `temas/procedimientos/pilotes-in-situ.html` funciona como página índice
para una futura serie de pilotes in situ. Toma como referencia la NTE-CPI/1977 del
BOE y presenta las especificaciones CPI-2 a CPI-8 agrupadas didácticamente:

- Pilotes de desplazamiento: CPI-2 y CPI-3.
- Pilotes de extracción con sostenimiento: CPI-4, CPI-5 y CPI-6.
- Pilotes barrenados: CPI-7 y CPI-8.

La NTE consultada en el BOE muestra en la hoja de diseño las especificaciones CPI-2
a CPI-8. No inventar un CPI-1 si no se aporta una fuente concreta que lo justifique.

Vídeo enlazado en la cabecera de la entrada:

- `https://www.youtube.com/watch?v=9RnBrK-RYy0&t=335s`

#### Seguridad en la ejecución de pilotes in situ

La entrada resume prevención de riesgos laborales en pilotes in situ a partir del vídeo:

- `https://www.youtube.com/watch?v=xPbM0b8LmvA`

La página organiza el contenido por fases: plataforma de trabajo, maquinaria y radios
de acción, perforación, pilotes con lodos o bentonita, izado de armaduras, hormigonado,
retirada de entubación y protección final del pilote.

### Decisión vigente para vídeos externos

- No incrustar YouTube mediante `iframe`: al abrir con `file://` puede aparecer el error 153.
- Usar tarjeta 16:9 con miniatura, icono de reproducción y apertura en pestaña nueva.
- Reutilizar `video-preview-link`, `video-preview-image`, `video-play-icon` y `video-preview-copy`.
- Para varias tarjetas usar `video-preview-grid`: dos columnas en escritorio, una en móvil y última tarjeta centrada si el número es impar.
- Mantener `min-width: 0` y `max-width: 100%` para evitar desbordamientos tras desplegar en GitHub Pages.
- Probar `maxresdefault.jpg` y recurrir a `hqdefault.jpg` cuando no exista una miniatura real de alta resolución.
- Las aplicaciones Streamlit sí pueden conservar `iframe`, siempre con enlace externo de respaldo.

Los vídeos directos de Pipe Jacking Association dejaron de ser fiables porque el
servidor presentó un certificado caducado. No recuperar reproductores directos sin
verificar antes el proveedor.

### Criterio editorial vigente

- Escribir para alumnado; Antonio es el profesor.
- Procesar las transcripciones para explicar procedimientos, utilidad, maquinaria y controles.
- No convertir las páginas en una descripción cronológica de cada vídeo.
- No inventar contenido académico ni dosificaciones universales.
- Mantener UTF-8, enlaces relativos y el estilo sobrio compartido de `styles.css`.

### Verificaciones de cierre

- `git status --short --branch`: quedan cambios pendientes en `CONTEXTO_PROYECTO.md`,
  `asignaturas/procedimientos-construccion.html` y nuevas páginas bajo
  `temas/procedimientos/`.
- `git diff --check`: sin errores; solo avisos habituales LF/CRLF de Git en Windows.
- `Fuentes_Ignorar/` continúa fuera del seguimiento de Git.

## Objetivo general

La web es una página personal académica y docente para GitHub Pages. Debe ser estática, sencilla de mantener, en español, con un estilo visual unificado y sobrio.

La idea actual es organizarla por páginas, no como una única página larga:

- `index.html`: portada.
- `docencia.html`: entrada a docencia con mapa visual de asignaturas.
- `investigacion.html`: página de investigación, por ahora en construcción.
- `yo.html`: página personal, de tono humano y cercano, por ahora en construcción.
- `asignaturas/`: páginas principales de asignaturas.
- `temas/`: páginas de temas o unidades docentes.

## Historial anterior — 2026-06-19, ya superado

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
- `temas/procedimientos/pilotes-in-situ.html`: página índice sobre pilotes ejecutados in situ.
- `temas/procedimientos/seguridad-pilotes-in-situ.html`: página sobre prevención de riesgos en pilotes in situ.
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

La asignatura `asignaturas/procedimientos-construccion.html` enlaza ahora seis temas:

- `temas/procedimientos/pipe-jacking.html`
- `temas/procedimientos/box-jacking.html`
- `temas/procedimientos/suelos-expansivos-movimiento-tierras.html`
- `temas/procedimientos/estabilizacion-suelos-cal.html`
- `temas/procedimientos/pilotes-in-situ.html`
- `temas/procedimientos/seguridad-pilotes-in-situ.html`

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
