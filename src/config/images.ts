export type ImageSlot = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

/**
 * Configuración central de imágenes.
 * Deja `src: ''` para mostrar el placeholder; añade la URL cuando tengas la imagen.
 */
export const IMAGES: Record<string, ImageSlot> = {
  // Vista 1 — Ondas
  view01_waveTypes: {
    id: 'view01_waveTypes',
    src: '',
    alt: 'Diagrama de ondas sonoras propagándose en el agua',
    caption: 'Ondas mecánicas y longitudinales en un medio acuático',
  },
  view01_frequencyDiagram: {
    id: 'view01_frequencyDiagram',
    src: '',
    alt: 'Comparación entre frecuencias altas y bajas en sonar',
    caption: 'Relación frecuencia, detalle y alcance',
  },

  // Vista 2 — Transductor
  view02_transducer: {
    id: 'view02_transducer',
    src: '',
    alt: 'Transductor de sonar montado en un barco',
    caption: 'Transductor: emisión y recepción de pulsos acústicos',
  },
  view02_signalChain: {
    id: 'view02_signalChain',
    src: '',
    alt: 'Cadena de conversión de señal analógica a digital',
    caption: 'Del eco acústico a los datos digitales (ADC)',
  },

  // Vista 3 — Software (carrusel de tareas)
  view03_task_measurement: {
    id: 'view03_task_measurement',
    src: '',
    alt: 'Medición de profundidad con ecosonda',
    caption: 'Cálculo de distancia a partir del tiempo de eco',
  },
  view03_task_filtering: {
    id: 'view03_task_filtering',
    src: '',
    alt: 'Filtrado de señal y reducción de ruido marino',
    caption: 'Eliminación de interferencias en la señal acústica',
  },
  view03_task_maps: {
    id: 'view03_task_maps',
    src: '',
    alt: 'Mapa batimétrico y modelos del fondo marino',
    caption: 'Construcción de mapas e imágenes del fondo oceánico',
  },
  view03_task_science: {
    id: 'view03_task_science',
    src: '',
    alt: 'Análisis científico de datos oceanográficos',
    caption: 'Interpretación para geofísica y oceanografía',
  },

  // Vista 4 — Resultados
  view04_userResults: {
    id: 'view04_userResults',
    src: '',
    alt: 'Pantalla de resultados de sonar para el usuario',
    caption: 'Salida visual para navegación e investigación',
  },
  view04_submarineMap: {
    id: 'view04_submarineMap',
    src: '',
    alt: 'Mapa submarino con detección de objetos',
    caption: 'Mapas y detección de objetos submarinos',
  },

  // Vista 6 — Ejemplos
  view06_noaa: {
    id: 'view06_noaa',
    src: '',
    alt: 'Expedición oceanográfica con equipos de sonar',
    caption: 'Oceanografía: mapeo del océano (ej. NOAA)',
  },
  view06_archaeology: {
    id: 'view06_archaeology',
    src: '',
    alt: 'Restos arqueológicos detectados por sonar',
    caption: 'Arqueología marina y naufragios',
  },
};

export type ImageKey = keyof typeof IMAGES;

export function getImage(key: ImageKey): ImageSlot {
  return IMAGES[key];
}
