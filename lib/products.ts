export interface Product {
  id: string
  name: string
  type: string
  tagline: string
  price: string
  activeIngredients: string[]
  shortDescription: string
  benefits: string[]
  skinType: string
  usageMode: string
  image: string
  images: string[]
  featured: boolean
}

export const products: Product[] = [
  {
    id: 'jabon-facial',
    name: 'Jabón Facial de Carbón Activado, Aloe Vera y Ácido Salicílico',
    type: 'Limpiador facial de limpieza profunda',
    tagline: 'Pureza profunda',
    price: '$[PRECIO]',
    activeIngredients: ['Carbón Activado', 'Aloe Vera', 'Ácido Salicílico', 'Vitamina E'],
    shortDescription: 'Sistema limpiador purificante diseñado para piel grasa y con tendencia acneica.',
    benefits: [
      'Elimina impurezas, exceso de grasa y residuos ambientales',
      'Contribuye a disminuir puntos negros y brotes de acné',
      'Limpia profundamente sin generar resequedad extrema',
      'Refresca y ayuda a equilibrar la piel',
    ],
    skinType: 'Mixta, grasa y con tendencia acneica',
    usageMode: 'Aplicar sobre el rostro húmedo con masajes circulares y retirar con abundante agua. Usar día y noche.',
    image: '/images/jabon_facial.png',
    images: ['/images/jabon_facial.png'],
    featured: false,
  },
  {
    id: 'crema-hidratante',
    name: 'Crema Hidratante de Colágeno, Elastina, Vitamina E y Niacinamida',
    type: 'Crema facial hidratante y revitalizante',
    tagline: 'Nutrición profunda 24h',
    price: '$[PRECIO]',
    activeIngredients: ['Colágeno Hidrolizado', 'Elastina Hidrolizada', 'Vitamina E', 'Niacinamida', 'Glicerina'],
    shortDescription: 'Emulsión hidratante facial desarrollada para mejorar hidratación, elasticidad y apariencia de la piel.',
    benefits: [
      'Aporta hidratación profunda y sensación de suavidad',
      'Ayuda a mejorar la elasticidad y apariencia de la piel',
      'Contribuye a fortalecer la barrera cutánea',
      'Favorece una apariencia luminosa y uniforme',
    ],
    skinType: 'Todo tipo de piel, especialmente piel seca o con signos de envejecimiento',
    usageMode: 'Aplicar sobre el rostro limpio con suaves movimientos ascendentes hasta su absorción.',
    image: '/images/hidratante.png',
    images: ['/images/hidratante.png', '/images/crema_hidratante.png'],
    featured: true,
  },
  {
    id: 'tonico-manzanilla',
    name: 'Tónico de Manzanilla y Ácido Hialurónico',
    type: 'Tónico facial calmante e hidratante',
    tagline: 'Calma e hidratación',
    price: '$[PRECIO]',
    activeIngredients: ['Extracto de Manzanilla', 'Ácido Hialurónico', 'Glicerina', 'Extractos Botánicos'],
    shortDescription: 'Tónico calmante e hidratante para piel sensible o irritada.',
    benefits: [
      'Ayuda a calmar la piel sensible y reducir el enrojecimiento',
      'Brinda hidratación ligera y sensación refrescante',
      'Prepara la piel para potenciar la absorción de otros productos',
    ],
    skinType: 'Sensible, seca o irritada',
    usageMode: 'Aplicar después de la limpieza facial con algodón o directamente sobre el rostro.',
    image: '/images/tonico_manzanilla.png',
    images: ['/images/tonico_manzanilla.png'],
    featured: false,
  },
  {
    id: 'tonico-hamamelis',
    name: 'Tónico de Hamamelis y Ácido Salicílico',
    type: 'Tónico facial purificante',
    tagline: 'Control y equilibrio',
    price: '$[PRECIO]',
    activeIngredients: ['Hamamelis', 'Ácido Salicílico', 'Aloe Vera', 'Extracto de Sauce'],
    shortDescription: 'Tónico facial purificante e hidratante enfocado en balancear piel grasa.',
    benefits: [
      'Ayuda a controlar el exceso de grasa',
      'Contribuye a minimizar visualmente los poros',
      'Refresca y mejora la textura de la piel',
    ],
    skinType: 'Grasa y con tendencia acneica',
    usageMode: 'Aplicar sobre la piel limpia evitando el contorno de ojos.',
    image: '/images/tonico_hamamelis.png',
    images: ['/images/tonico_hamamelis.png'],
    featured: false,
  },
  {
    id: 'serum-vitamina-c',
    name: 'Sérum de Vitamina C, Extracto de Arroz, Elastina y Colágeno',
    type: 'Sérum facial iluminador y rejuvenecedor',
    tagline: 'Luminosidad e iluminación',
    price: '$[PRECIO]',
    activeIngredients: ['Vitamina C', 'Extracto de Arroz', 'Elastina', 'Colágeno'],
    shortDescription: 'Sérum antioxidante e iluminador enfocado en rejuvenecimiento facial.',
    benefits: [
      'Ayuda a iluminar y unificar el tono de la piel',
      'Contribuye a mejorar la apariencia de líneas finas',
      'Favorece una apariencia más firme y luminosa',
    ],
    skinType: 'Todo tipo de piel',
    usageMode: 'Aplicar de 3 a 5 gotas sobre el rostro limpio antes de la crema hidratante.',
    image: '/images/serum_vitaminac.png',
    images: ['/images/serum_vitaminac.png'],
    featured: true,
  },
  {
    id: 'serum-colageno',
    name: 'Sérum de Colágeno y Ácido Hialurónico',
    type: 'Sérum facial hidratante y reafirmante',
    tagline: 'Firmeza y relleno celular',
    price: '$[PRECIO]',
    activeIngredients: ['Colágeno', 'Ácido Hialurónico', 'Glicerina', 'Activos Humectantes'],
    shortDescription: 'Sérum hidratante y reafirmante de rápida absorción.',
    benefits: [
      'Aporta hidratación intensiva',
      'Ayuda a mejorar la elasticidad y firmeza de la piel',
      'Contribuye a prevenir signos visibles de envejecimiento',
    ],
    skinType: 'Piel seca, madura o deshidratada',
    usageMode: 'Aplicar mañana y noche sobre el rostro limpio.',
    image: '/images/serum_colageno.png',
    images: ['/images/serum_colageno.png'],
    featured: true,
  },
]

export const featuredProducts = products.filter((p) => p.featured)
