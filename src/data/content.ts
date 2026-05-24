export const SITE = {
  title: 'SONAR y Ecosondas en Geofísica y Oceanografía',
  subtitle: 'Infografía interactiva',
} as const;

export const NAV_ITEMS = [
  { id: 'vista-1', label: 'Ondas sonoras', number: 1 },
  { id: 'vista-2', label: 'Transductor', number: 2 },
  { id: 'vista-3', label: 'Software', number: 3 },
  { id: 'vista-4', label: 'Resultados', number: 4 },
  { id: 'vista-5', label: 'Pros y contras', number: 5 },
  { id: 'vista-6', label: 'Ejemplos', number: 6 },
  { id: 'referencias', label: 'Referencias', number: null },
] as const;

export const VIEW01 = {
  title: '¿Qué tipo de onda es?',
  subtitle: '¿Cuáles son las propiedades físicas fundamentales para que funcione?',
  intro:
    'El SONAR y las ecosondas utilizan ondas sonoras. Estas ondas son:',
  waveTypes: [
    {
      title: 'Ondas mecánicas',
      description:
        'Necesitan un medio material para propagarse; en este caso, el agua.',
      icon: '〰️',
    },
    {
      title: 'Ondas longitudinales',
      description:
        'Las partículas vibran en la misma dirección de propagación de la onda.',
      icon: '↔️',
    },
  ],
  propertiesTitle: 'Propiedades físicas fundamentales',
  frequency: {
    title: 'Frecuencia',
    description: 'Determina el detalle y alcance de la señal.',
    high: {
      label: 'Frecuencias altas',
      items: ['Mayor precisión', 'Menor alcance'],
    },
    low: {
      label: 'Frecuencias bajas',
      items: ['Mayor profundidad', 'Menor detalle'],
    },
  },
  velocity: {
    title: 'Velocidad del sonido en el agua',
    value: '1500 m/s',
    description: 'El sonido viaja aproximadamente a esta velocidad.',
    factors: ['Temperatura', 'Salinidad', 'Presión'],
  },
  reflection: {
    title: 'Reflexión',
    description:
      'Cuando la onda sonora golpea un objeto o el fondo marino, rebota y genera un eco.',
  },
  returnTime: {
    title: 'Tiempo de retorno',
    description:
      'El sistema calcula la distancia midiendo cuánto tarda el eco en regresar.',
  },
  simpleExplanation: {
    title: 'Explicación sencilla',
    text: 'El sistema envía un sonido al agua y espera el eco de regreso. Con el tiempo que tarda en volver, calcula profundidad o ubicación de objetos.',
  },
} as const;

export const VIEW02 = {
  title: '¿Cómo interpreta el sistema esta onda?',
  subtitle: '¿Qué sensor convierte la onda física en señal digital?',
  transducer: {
    title: 'Transductor',
    intro: 'El dispositivo principal es el transductor. Funciona como:',
    roles: [
      { role: 'Altavoz', action: 'emite ondas sonoras' },
      { role: 'Micrófono', action: 'recibe el eco' },
    ],
    conversions: [
      { from: 'Energía eléctrica', to: 'sonido' },
      { from: 'Sonido', to: 'señal eléctrica' },
    ],
  },
  hydrophones: {
    title: 'Hidrófonos',
    description:
      'En algunos sistemas también se utilizan hidrófonos: sensores especializados para captar sonidos bajo el agua.',
  },
  digitalTitle: '¿Cómo se vuelve digital?',
  digitalSteps: [
    'El eco llega al sensor.',
    'El sensor lo convierte en señal eléctrica.',
    'Un convertidor analógico-digital (ADC) transforma esa señal en datos digitales.',
    'El software interpreta esos datos.',
  ],
} as const;

export const VIEW03 = {
  title: '¿Cuál es el trabajo principal del software?',
  tasks: [
    {
      title: 'Medición de distancia',
      description:
        'Calcula profundidad usando el tiempo del eco. La fórmula básica relaciona velocidad del sonido y tiempo de ida y vuelta.',
      imageKey: 'view03_task_measurement',
    },
    {
      title: 'Filtrado de ruido',
      description: 'Elimina interferencias producidas por:',
      items: ['Corrientes', 'Burbujas', 'Otros sonidos marinos'],
      imageKey: 'view03_task_filtering',
    },
    {
      title: 'Construcción de imágenes y mapas',
      description: 'El software crea:',
      items: [
        'Mapas del fondo marino',
        'Modelos 3D',
        'Detección de peces u objetos',
        'Análisis geológicos',
      ],
      imageKey: 'view03_task_maps',
    },
    {
      title: 'Interpretación científica',
      description: 'En geofísica y oceanografía ayuda a:',
      items: [
        'Estudiar placas tectónicas',
        'Analizar volcanes submarinos',
        'Investigar ecosistemas marinos',
        'Medir profundidades oceánicas',
      ],
      imageKey: 'view03_task_science',
    },
  ],
  formula: {
    title: 'Fórmula de profundidad',
    variables: [
      { symbol: 'd', meaning: 'distancia o profundidad' },
      { symbol: 'v', meaning: 'velocidad del sonido' },
      { symbol: 't', meaning: 'tiempo de ida y regreso' },
    ],
  },
} as const;

export const VIEW04 = {
  title: '¿Cuál es el resultado final para el usuario?',
  intro:
    'Gracias al procesamiento del software, el usuario obtiene:',
  cards: [
    {
      title: 'Mapas submarinos',
      description: 'Permiten conocer la forma del fondo oceánico.',
    },
    {
      title: 'Detección de objetos',
      description: 'Como:',
      items: ['Peces', 'Submarinos', 'Rocas', 'Restos arqueológicos'],
    },
    {
      title: 'Navegación segura',
      description: 'Evita que barcos choquen o encallen.',
    },
    {
      title: 'Investigación científica',
      description: 'Ayuda a descubrir:',
      items: [
        'Fosas oceánicas',
        'Volcanes submarinos',
        'Corrientes marinas',
        'Cambios geológicos',
      ],
    },
  ],
} as const;

export const VIEW05 = {
  title: 'Ventajas y desventajas',
  advantages: [
    {
      title: 'Funciona bajo el agua',
      description:
        'El sonido viaja mucho mejor que la luz en el océano.',
    },
    {
      title: 'Gran precisión',
      description:
        'Puede detectar objetos y profundidades con alta exactitud.',
    },
    {
      title: 'Permite crear mapas oceánicos',
      description: 'Fundamental para la ciencia marina.',
    },
    {
      title: 'Ayuda a la navegación',
      description: 'Incrementa la seguridad marítima.',
    },
  ],
  disadvantages: [
    {
      title: 'Puede afectar animales marinos',
      description:
        'Algunos sonidos intensos alteran el comportamiento de ballenas y delfines.',
    },
    {
      title: 'Alto costo',
      description: 'Los sistemas avanzados son muy costosos.',
    },
    {
      title: 'Interferencias',
      description:
        'La temperatura y salinidad afectan la precisión.',
    },
    {
      title: 'Alcance limitado según frecuencia',
      description:
        'No todas las frecuencias funcionan igual en aguas profundas.',
    },
  ],
} as const;

export const VIEW06 = {
  title: 'Ejemplos actuales de esta aplicación',
  examples: [
    {
      title: 'Oceanografía',
      description:
        'Instituciones como NOAA usan SONAR para mapear el océano.',
      link: 'https://oceanexplorer.noaa.gov/technology/sonar/sonar.html',
      linkLabel: 'NOAA — Sonar Technology',
    },
    {
      title: 'Pesca industrial',
      description: 'Las ecosondas detectan bancos de peces.',
    },
    {
      title: 'Exploración submarina',
      description:
        'Se usa para estudiar volcanes y placas tectónicas.',
    },
    {
      title: 'Arqueología marina',
      description:
        'Permite encontrar barcos hundidos y restos históricos.',
    },
    {
      title: 'Navegación marítima',
      description:
        'Los barcos modernos usan ecosondas para medir profundidad constantemente.',
    },
  ],
} as const;

export const REFERENCES = {
  title: 'Referencias bibliográficas',
  subtitle: 'Fuentes recomendadas para leer',
  sources: [
    {
      label: 'NOAA — Sonar Technology',
      url: 'https://oceanexplorer.noaa.gov/technology/sonar/sonar.html',
    },
    {
      label: 'Woods Hole Oceanographic Institution — Sonar Single Beam',
      url: 'https://www.whoi.edu/ocean-learning-hub/ocean-topics/ocean-tech/acoustics/sonar-single-beam/',
    },
    {
      label: 'LibreTexts — Measuring the Depth of the Ocean',
      url: 'https://geo.libretexts.org/Bookshelves/Oceanography/Introduction_to_Physical_Oceanography_%28Stewart%29/03%3A_The_Physical_Setting/3.4%3A_Measuring_the_Depth_of_the_Ocean',
    },
    {
      label: 'ScienceInsights — Echo Sounder Explained',
      url: 'https://scienceinsights.org/what-is-an-echo-sounder-and-how-does-it-work/',
    },
    {
      label: 'NOAA Ocean Exploration',
      url: 'https://oceanexplorer.noaa.gov/',
    },
  ],
} as const;

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
