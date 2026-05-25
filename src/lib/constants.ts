// ============================================================
// Magdalena OS — Constants & Labels
// ============================================================

export const EVENT_TYPE_LABELS: Record<string, string> = {
  oficial: 'Acto Oficial',
  presentacion: 'Presentación',
  desfile: 'Desfile',
  religioso: 'Acto Religioso',
  social: 'Acto Social',
  infantil: 'Acto Infantil',
  reunion: 'Reunión',
  ensayo: 'Ensayo',
  prueba_indumentaria: 'Prueba Indumentaria',
  galanía: 'Galanía',
  caravana: 'Caravana Festera',
  ofrenda: 'Ofrenda',
  personalizado: 'Personalizado',
};

export const EVENT_TYPE_COLORS: Record<string, string> = {
  oficial: '#1a3a5c',
  presentacion: '#b8860b',
  desfile: '#8b2252',
  religioso: '#4a0e4e',
  social: '#2d6a4f',
  infantil: '#e07c24',
  reunion: '#546e7a',
  ensayo: '#6d4c41',
  prueba_indumentaria: '#ad1457',
  galanía: '#c9a227',
  caravana: '#d84315',
  ofrenda: '#6a1b9a',
  personalizado: '#455a64',
};

export const EVENT_TYPE_ICONS: Record<string, string> = {
  oficial: '🏛️',
  presentacion: '🎭',
  desfile: '🎪',
  religioso: '⛪',
  social: '🥂',
  infantil: '🎈',
  reunion: '📋',
  ensayo: '🎯',
  prueba_indumentaria: '👗',
  galanía: '👑',
  caravana: '🎵',
  ofrenda: '💐',
  personalizado: '📌',
};

export const FORMALITY_LABELS: Record<string, string> = {
  muy_formal: 'Muy Formal',
  formal: 'Formal',
  semiformal: 'Semiformal',
  informal: 'Informal',
};

export const STATUS_LABELS: Record<string, string> = {
  planificado: 'Planificado',
  confirmado: 'Confirmado',
  en_curso: 'En Curso',
  completado: 'Completado',
  cancelado: 'Cancelado',
};

export const STATUS_COLORS: Record<string, string> = {
  planificado: '#78909c',
  confirmado: '#2e7d32',
  en_curso: '#1565c0',
  completado: '#4caf50',
  cancelado: '#c62828',
};

export const ROLE_LABELS: Record<string, string> = {
  madrina_infantil: 'Madrina Infantil',
  madrina_mayor: 'Madrina Mayor',
  presidente: 'Presidente',
  coordinadora: 'Coordinadora',
  dama: 'Dama',
  familia: 'Familia',
  invitado: 'Invitado/a',
  proveedor_contacto: 'Proveedor',
};

export const ROLE_ICONS: Record<string, string> = {
  madrina_infantil: '👧',
  madrina_mayor: '👩',
  presidente: '🎖️',
  coordinadora: '📋',
  dama: '🌸',
  familia: '👨‍👩‍👧',
  invitado: '🤝',
  proveedor_contacto: '🏪',
};

export const INFLUENCE_LABELS: Record<string, string> = {
  verde: 'Reforzar',
  amarillo: 'Encuadrar',
  rojo: 'Evitar dinámica',
};

export const INFLUENCE_COLORS: Record<string, string> = {
  verde: '#2e7d32',
  amarillo: '#f9a825',
  rojo: '#c62828',
};

export const GARMENT_CATEGORY_LABELS: Record<string, string> = {
  vestido: 'Vestido',
  jubon: 'Jubón',
  manteleta: 'Manteleta',
  delantal: 'Delantal',
  aderezo: 'Aderezo',
  peineta: 'Peineta',
  joyeria: 'Joyería',
  medias: 'Medias',
  zapatos: 'Zapatos',
  ropa_interior: 'Ropa Interior',
  manton: 'Mantón',
  capa: 'Capa',
  complemento: 'Complemento',
  peinado: 'Peinado',
  banda: 'Banda',
};

export const GARMENT_STATUS_LABELS: Record<string, string> = {
  disponible: 'Disponible',
  en_arreglo: 'En Arreglo',
  pendiente_compra: 'Pendiente Compra',
  prestada: 'Prestada',
  alquilada: 'Alquilada',
  perdida: 'Perdida',
};

export const GARMENT_STATUS_COLORS: Record<string, string> = {
  disponible: '#2e7d32',
  en_arreglo: '#f57f17',
  pendiente_compra: '#e65100',
  prestada: '#1565c0',
  alquilada: '#6a1b9a',
  perdida: '#c62828',
};

export const TASK_PRIORITY_LABELS: Record<string, string> = {
  urgente: 'Urgente',
  alta: 'Alta',
  media: 'Media',
  baja: 'Baja',
};

export const TASK_PRIORITY_COLORS: Record<string, string> = {
  urgente: '#c62828',
  alta: '#e65100',
  media: '#f9a825',
  baja: '#78909c',
};

export const TASK_STATUS_LABELS: Record<string, string> = {
  pendiente: 'Pendiente',
  en_progreso: 'En Progreso',
  completada: 'Completada',
  bloqueada: 'Bloqueada',
};

export const TASK_STATUS_COLORS: Record<string, string> = {
  pendiente: '#78909c',
  en_progreso: '#1565c0',
  completada: '#2e7d32',
  bloqueada: '#c62828',
};

export const BUDGET_CATEGORY_LABELS: Record<string, string> = {
  indumentaria: 'Indumentaria',
  logistica: 'Logística',
  regalos: 'Regalos y Detalles',
  arreglos: 'Arreglos',
  alquileres: 'Alquileres',
  comida: 'Comida y Bebida',
  transporte: 'Transporte',
  decoracion: 'Decoración',
  peluqueria: 'Peluquería',
  otros: 'Otros',
};

export const BUDGET_CATEGORY_ICONS: Record<string, string> = {
  indumentaria: '👗',
  logistica: '🚛',
  regalos: '🎁',
  arreglos: '🧵',
  alquileres: '🏠',
  comida: '🍽️',
  transporte: '🚗',
  decoracion: '🎨',
  peluqueria: '💇',
  otros: '📦',
};

export const PAYMENT_STATUS_LABELS: Record<string, string> = {
  pendiente: 'Pendiente',
  parcial: 'Pago Parcial',
  pagado: 'Pagado',
};

export const PAYMENT_STATUS_COLORS: Record<string, string> = {
  pendiente: '#e65100',
  parcial: '#f9a825',
  pagado: '#2e7d32',
};

export const SUPPLIER_CATEGORY_LABELS: Record<string, string> = {
  costura: 'Costura',
  peluqueria: 'Peluquería',
  joyeria: 'Joyería',
  floristeria: 'Floristería',
  catering: 'Catering',
  transporte: 'Transporte',
  foto_video: 'Foto/Vídeo',
  decoracion: 'Decoración',
  otros: 'Otros',
};

export const DOCUMENT_CATEGORY_LABELS: Record<string, string> = {
  protocolo: 'Protocolo',
  calendario: 'Calendario',
  indumentaria: 'Indumentaria',
  presupuesto: 'Presupuesto',
  historico: 'Histórico',
  comision: 'Comisión',
  mapa_social: 'Mapa Social',
  otro: 'Otro',
};

export const INCIDENT_SEVERITY_LABELS: Record<string, string> = {
  leve: 'Leve',
  moderada: 'Moderada',
  grave: 'Grave',
};

export const INCIDENT_SEVERITY_COLORS: Record<string, string> = {
  leve: '#f9a825',
  moderada: '#e65100',
  grave: '#c62828',
};

export const RISK_LEVEL_LABELS: Record<string, string> = {
  bajo: 'Bajo',
  medio: 'Medio',
  alto: 'Alto',
};

export const MONTHS_ES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

export const DAYS_ES = [
  'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo',
];

export const DAYS_SHORT_ES = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

// Navigation items for sidebar
export const NAV_ITEMS = [
  { label: 'Dashboard', href: '/', icon: '📊' },
  { label: 'Calendario', href: '/calendario', icon: '📅' },
  { label: 'Eventos', href: '/eventos', icon: '🎪' },
  { label: 'Personas', href: '/personas', icon: '👥' },
  { label: 'Indumentaria', href: '/indumentaria', icon: '👗' },
  { label: 'Tareas', href: '/tareas', icon: '✅' },
  { label: 'Presupuesto', href: '/presupuesto', icon: '💰' },
  { label: 'Proveedores', href: '/proveedores', icon: '🏪' },
  { label: 'Documentos', href: '/documentos', icon: '📁' },
  { label: 'Protocolo', href: '/protocolo', icon: '📜' },
  { label: 'Excelencia', href: '/excelencia', icon: '🏆' },
  { label: 'Incidencias', href: '/incidencias', icon: '⚠️' },
];
