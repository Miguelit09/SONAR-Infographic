# SONAR y Ecosondas — Infografía interactiva

Infografía interactiva sobre SONAR y ecosondas en geofísica y oceanografía, construida con **Vite + React + TypeScript**.

## Desarrollo

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (normalmente `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Estructura

| Ruta | Descripción |
|------|-------------|
| `src/data/content.ts` | Textos de todas las vistas (español) |
| `src/config/images.ts` | URLs de imágenes (único archivo a editar para imágenes) |
| `src/components/sections/` | Vistas 1–6 y referencias |
| `src/components/ui/` | Componentes reutilizables |
| `src/components/layout/` | Cabecera y navegación lateral |

## Cómo añadir imágenes

1. Sube tus imágenes a un hosting (o colócalas en `public/images/`).
2. Abre [`src/config/images.ts`](src/config/images.ts).
3. Asigna la URL al campo `src` del slot correspondiente.

Ejemplo:

```ts
view01_waveTypes: {
  id: 'view01_waveTypes',
  src: '/images/ondas-sonoras.png',  // o URL externa
  alt: 'Diagrama de ondas sonoras propagándose en el agua',
  caption: 'Ondas mecánicas y longitudinales en un medio acuático',
},
```

Si `src` está vacío (`''`), se muestra un **placeholder** con el texto alternativo y el ID del slot.

### Tabla de slots de imagen

| ID del slot | Vista | Descripción sugerida |
|-------------|-------|----------------------|
| `view01_waveTypes` | 1 | Diagrama de ondas mecánicas/longitudinales en agua |
| `view01_frequencyDiagram` | 1 | Comparación frecuencias altas vs bajas |
| `view02_transducer` | 2 | Transductor en barco o ROV |
| `view02_signalChain` | 2 | Cadena sensor → ADC → software |
| `view03_task_measurement` | 3 | Carrusel: medición de profundidad |
| `view03_task_filtering` | 3 | Carrusel: filtrado de ruido |
| `view03_task_maps` | 3 | Carrusel: mapas e imágenes del fondo marino |
| `view03_task_science` | 3 | Carrusel: interpretación científica |
| `view04_userResults` | 4 | Pantalla o mapa de resultados para el usuario |
| `view04_submarineMap` | 4 | Mapa con detección de objetos |
| `view06_noaa` | 6 | Expedición oceanográfica / NOAA |
| `view06_archaeology` | 6 | Arqueología marina o naufragio |

## Navegación

- Menú lateral fijo (escritorio) con scroll suave a cada sección.
- En móvil: botón flotante **Menú** que abre un panel lateral.
- La sección visible se resalta automáticamente al hacer scroll.

## Referencias

- [NOAA — Sonar Technology](https://oceanexplorer.noaa.gov/technology/sonar/sonar.html)
- [WHOI — Sonar Single Beam](https://www.whoi.edu/ocean-learning-hub/ocean-topics/ocean-tech/acoustics/sonar-single-beam/)
- [LibreTexts — Measuring Ocean Depth](https://geo.libretexts.org/Bookshelves/Oceanography/Introduction_to_Physical_Oceanography_%28Stewart%29/03%3A_The_Physical_Setting/3.4%3A_Measuring_the_Depth_of_the_Ocean)
- [ScienceInsights — Echo Sounder](https://scienceinsights.org/what-is-an-echo-sounder-and-how-does-it-work/)
- [NOAA Ocean Exploration](https://oceanexplorer.noaa.gov/)
