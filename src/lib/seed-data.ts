// ============================================================
// Magdalena OS — Seed Data (from info/ folder)
// ============================================================

import {
  MagdalenaEvent, Person, Garment, Task, BudgetItem,
  Supplier, Document, ProtocolRule, Incident, ExcellenceScore
} from './types';

// --- PERSONS ---
export const PERSONS: Person[] = [
  {
    id: 'p1',
    name: 'Zoe',
    role: 'madrina_infantil',
    power_types: ['simbolico', 'emocional'],
    influence_level: 'verde',
    notes: 'Centro del sistema. El objetivo es que disfrute, llegue descansada, se sienta segura y viva la experiencia con ilusión.',
    is_active: true,
    short_description: 'Madrina infantil de la Gaiata 1 – Brancal de la Ciutat. Cumpleaños: 11 de mayo.',
  },
  {
    id: 'p2',
    name: 'Clara Carceller',
    role: 'madrina_mayor',
    power_types: ['simbolico', 'relacional', 'emocional'],
    influence_level: 'verde',
    notes: 'Persona querida con trayectoria y legitimidad emocional. Equilibrio simbólico y compañerismo principal con Zoe. Evitar competir, eclipsar o "resolver demasiado".',
    is_active: true,
    short_description: 'Madrina mayor. Figura clave del equilibrio simbólico del año.',
  },
  {
    id: 'p3',
    name: 'Arturo España',
    role: 'presidente',
    power_types: ['formal', 'relacional', 'emocional'],
    influence_level: 'verde',
    phone: '',
    notes: 'Cara institucional de la Gaiata. Tiene cariño real por Zoe. Legitimidad y apoyo humano. No sobrecargar — usar para validar y desbloquear, no como gestor único.',
    is_active: true,
    short_description: 'Presidente Gaiata 1. Aliado institucional y humano.',
  },
  {
    id: 'p4',
    name: 'Mayo',
    role: 'coordinadora',
    power_types: ['operativo', 'simbolico'],
    influence_level: 'verde',
    notes: 'Memoria organizativa. Conoce trámites, protocolos, papeles, tiempos y funcionamiento. Fuente de verdad administrativa y protocolaria.',
    is_active: true,
    short_description: 'Coordinación y documentación. Poder operativo muy alto.',
  },
  {
    id: 'p5',
    name: 'Andrea',
    role: 'familia',
    power_types: ['emocional', 'relacional'],
    influence_level: 'verde',
    notes: 'Autoridad afectiva sobre la experiencia de Zoe. La guía, protege y reduce incertidumbre. Ancla emocional dentro de la Gaiata.',
    is_active: true,
    short_description: 'Referente protector de Zoe. Poder emocional muy alto.',
  },
  {
    id: 'p6',
    name: 'Marta',
    role: 'dama',
    power_types: ['emocional', 'relacional', 'simbolico'],
    influence_level: 'verde',
    notes: 'Familia y a la vez parte visible de la Gaiata. Puente entre familia y Gaiata. Radar y traductora social.',
    is_active: true,
    short_description: 'Dama. Puente de integración familia-Gaiata.',
  },
  {
    id: 'p7',
    name: 'Sandra',
    role: 'familia',
    power_types: ['operativo', 'emocional'],
    influence_level: 'verde',
    notes: 'Madre de Zoe. Centro organizativo y protector del sistema.',
    is_active: true,
    short_description: 'Madre de Zoe. Centro organizativo familiar.',
  },
  {
    id: 'p8',
    name: 'Mari Carmen',
    role: 'familia',
    power_types: ['economico', 'relacional'],
    influence_level: 'amarillo',
    notes: 'Influencia social intensa. Capacidad de aportar, energía y presencia. Riesgo: hablar demasiado, marcar nivel. Mejor con tareas concretas y objetivos definidos. Motor de apoyo, no centro narrativo.',
    is_active: true,
    short_description: 'Apoyo potente pero requiere encuadre.',
  },
  {
    id: 'p9',
    name: 'Valentín',
    role: 'familia',
    power_types: ['relacional', 'economico'],
    influence_level: 'amarillo',
    notes: 'Figura estabilizadora. No genera ruido. Contrapeso inteligente. Aliado sereno.',
    is_active: true,
    short_description: 'Amortiguador social y apoyo razonable.',
  },
  {
    id: 'p10',
    name: 'Pedro',
    role: 'familia',
    power_types: ['emocional', 'operativo'],
    influence_level: 'amarillo',
    notes: 'Poder útil infrautilizado. Apoyo técnico, práctico, artesanal. Darle papel real, concreto y digno.',
    is_active: true,
    short_description: 'Apoyo técnico y práctico.',
  },
  {
    id: 'p11',
    name: 'Marga',
    role: 'familia',
    power_types: ['emocional', 'operativo'],
    influence_level: 'amarillo',
    notes: 'Apoyo de ejecución concreta. No deben competir por visibilidad. Entrar por utilidad clara y digna.',
    is_active: true,
    short_description: 'Apoyo de ejecución concreta.',
  },
];

// --- EVENTS ---
export const EVENTS: MagdalenaEvent[] = [
  // Pre-temporada
  {
    id: 'e1',
    name: 'Imposición de Bandas',
    date: '2025-10-18',
    time_start: '19:00',
    location: 'Gaiata 1 – Sector Brancal',
    event_type: 'oficial',
    formality_level: 'muy_formal',
    description: 'Acto formal de imposición de bandas a las madrinas y presidente infantil. Inicio oficial del ciclo festero.',
    protocol_notes: 'Implica protocolo, vestuario y presencia institucional. Coordinación de madrinas.',
    noise_level: 'bajo',
    fatigue_risk: 'medio',
    status: 'planificado',
    budget_estimated: 300,
    participant_ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'],
    garment_requirement: 'Vestido formal, peinado, banda oficial, complementos.',
  },
  // Presentaciones
  {
    id: 'e2',
    name: 'Presentació Gaiata 1 – Brancal de la Ciutat',
    date: '2025-12-13',
    time_start: '20:00',
    location: 'Palau de la Festa',
    event_type: 'presentacion',
    formality_level: 'muy_formal',
    description: 'Presentación oficial de la Gaiata 1 en el Palau de la Festa. Ocasión para dar a conocer a los máximos representantes del sector.',
    protocol_notes: 'Acto escénico con guion propio. Pre-montaje + recepción + acto escénico + cierre social. Cada comisión construye su propio escenario.',
    risks: 'Duración larga, cansancio de Zoe, ruido, espera prolongada.',
    plan_b: 'Tener espacio de retiro tranquilo para Zoe si se cansa.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 2000,
    participant_ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'],
    garment_requirement: 'Traje formal de representación. Castellonera completa para madrinas.',
  },
  // Homenaje
  {
    id: 'e3',
    name: 'Homenaje a Comisiones de Sector',
    date: '2026-02-21',
    time_start: '18:00',
    location: 'Castellón',
    event_type: 'social',
    formality_level: 'semiformal',
    description: 'Formato renovado con énfasis en el trabajo anual de las comisiones. Protocolo cambia: se abandona el traje de castellonera por "ropa de particular".',
    protocol_notes: 'ATENCIÓN: Cambio oficial de protocolo. Ropa "de particular" (calle/gala), NO traje de castellonera. Infantil: ropa particular y cómoda.',
    noise_level: 'medio',
    fatigue_risk: 'medio',
    status: 'planificado',
    budget_estimated: 200,
    participant_ids: ['p1', 'p2', 'p3', 'p4', 'p7'],
    garment_requirement: 'Ropa de particular / gala. NO castellonera. Infantil: cómoda.',
  },
  // Galanía
  {
    id: 'e4',
    name: 'Galanía',
    date: '2026-03-01',
    time_start: '20:00',
    location: 'Castellón',
    event_type: 'galanía',
    formality_level: 'muy_formal',
    description: 'Acto de homenaje a la Reina de las Fiestas. Incluye presencia de madrinas y presidentes de gaiatas. Recepción oficial / alfombra roja.',
    protocol_notes: 'Presencia institucional con símbolos de Gaiata. Coordinación con resto de Gaiatas.',
    noise_level: 'medio',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 400,
    participant_ids: ['p1', 'p2', 'p3', 'p7'],
    garment_requirement: 'Vestimenta formal de representación.',
  },
  // SEMANA GRANDE
  {
    id: 'e5',
    name: 'Pregó',
    date: '2026-03-07',
    time_start: '19:00',
    location: 'Castellón – Centro',
    event_type: 'oficial',
    formality_level: 'formal',
    description: 'Pregón de las Fiestas de la Magdalena 2026. Inicio oficial de la semana grande.',
    protocol_notes: 'PROHIBIDO: gafas de sol, vaqueros, zapatillas deportivas. Directrices de decoro. Reunión previa Junta-gaiatas.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 100,
    participant_ids: ['p1', 'p2', 'p3', 'p7'],
    garment_requirement: 'Formal. Sin gafas de sol, sin vaqueros, sin deportivas.',
  },
  {
    id: 'e6',
    name: 'Salida de las Gaiatas del Almacén',
    date: '2026-03-07',
    time_start: '23:00',
    location: 'Almacén Municipal → Ciudad',
    event_type: 'oficial',
    formality_level: 'formal',
    description: 'Traslado de las gaiatas desde el almacén municipal a sus ubicaciones en la ciudad. Hito logístico de arranque.',
    protocol_notes: 'Cada comisión debe asegurar el traslado de su monumento. Hora exact del hito: 23:00.',
    noise_level: 'medio',
    fatigue_risk: 'alto',
    status: 'planificado',
    participant_ids: ['p3', 'p4'],
    garment_requirement: 'No especificado en fuentes oficiales.',
  },
  {
    id: 'e7',
    name: 'Desfile de Gaiatas',
    date: '2026-03-08',
    time_start: '20:30',
    location: 'Recorrido oficial, calles céntricas',
    event_type: 'desfile',
    formality_level: 'muy_formal',
    description: 'Acto central de la Magdalena. Todas las gaiatas desfilan con sus comitivas por el recorrido oficial.',
    protocol_notes: 'VESTUARIO VERIFICADO (BOE): Portadores → labrador/saragüells o labradora. Comitiva → castellonera/castelloner. Diferenciación obligatoria.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 500,
    participant_ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'],
    garment_requirement: 'Castellonera/castelloner completa para comitiva. Labrador para portadores.',
  },
  {
    id: 'e8',
    name: 'Encesa de les Gaiates',
    date: '2026-03-09',
    time_start: '20:15',
    location: 'Av. Rey Don Jaime',
    event_type: 'oficial',
    formality_level: 'muy_formal',
    description: 'Exaltación del monumento gaiatero. Encendido de las 19 gaiatas. Visita oficial previa a las 19:30.',
    protocol_notes: 'Visita oficial previa 19:30. Tener monumento en condiciones técnicas para encendido.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 200,
    participant_ids: ['p1', 'p2', 'p3', 'p4', 'p7'],
    garment_requirement: 'No especificado oficialmente. Recomendada ropa de representación.',
  },
  {
    id: 'e9',
    name: 'Premios de Gaiatas y Llibrets',
    date: '2026-03-10',
    time_start: '21:00',
    location: 'Plaza Mayor',
    event_type: 'oficial',
    formality_level: 'formal',
    description: 'Entrega de premios de gaiatas y llibrets. Acto institucional competitivo y cultural.',
    noise_level: 'medio',
    fatigue_risk: 'medio',
    status: 'planificado',
    participant_ids: ['p1', 'p2', 'p3', 'p4'],
    garment_requirement: 'Representación formal.',
  },
  {
    id: 'e10',
    name: 'Caravana Festera J2 – Sale Gaiata 1',
    date: '2026-03-11',
    time_start: '09:30',
    location: 'Sale de G1 → G15, G7, G18, G14, G11',
    event_type: 'caravana',
    formality_level: 'semiformal',
    description: 'La Caravana Festera J2 parte de la Gaiata 1 (Brancal de la Ciutat). Recorre sectores 15, 7, 18, 14 y 11.',
    protocol_notes: 'Gaiata 1 SALE: concentrar y coordinar formación de carros engalanados. Arranque puntual.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    participant_ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'],
    garment_requirement: 'No especificado oficialmente.',
  },
  {
    id: 'e11',
    name: 'Visita Oficial a Gaiata 1',
    date: '2026-03-13',
    time_start: '17:45',
    location: 'Sector Gaiata 1 – Plaza del Botánico Calduch',
    event_type: 'oficial',
    formality_level: 'muy_formal',
    description: 'Visita oficial de las Reinas y Cortes de Honor a la Gaiata 1 Brancal de la Ciutat.',
    protocol_notes: 'Recepción preparada: espacio, representación del sector, disponibilidad de responsables. Guion institucional, obsequios y duración no especificados oficialmente.',
    noise_level: 'medio',
    fatigue_risk: 'medio',
    status: 'planificado',
    budget_estimated: 500,
    participant_ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'],
    garment_requirement: 'Representación formal. Castellonera recomendada.',
  },
  {
    id: 'e12',
    name: 'Ofrenda General – Mare de Déu del Lledó',
    date: '2026-03-14',
    time_start: '16:00',
    location: 'Basílica del Lledó',
    event_type: 'ofrenda',
    formality_level: 'muy_formal',
    description: 'Ofrenda general a la Mare de Déu del Lledó. Recorrido oficial con composición floral.',
    protocol_notes: 'Orden de desfile y decoro del acto religioso. Posibilidad de mantilla u otras piezas no especificada oficialmente.',
    noise_level: 'medio',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 200,
    participant_ids: ['p1', 'p2', 'p3', 'p4', 'p7'],
    garment_requirement: 'No especificado oficialmente. Traje de castellonera habitual.',
  },
  {
    id: 'e13',
    name: 'Desfile Final + Traca + Magdalena Vítol',
    date: '2026-03-15',
    time_start: '20:30',
    location: 'Recorrido oficial',
    event_type: 'desfile',
    formality_level: 'muy_formal',
    description: 'Cierre de las Fiestas de la Magdalena 2026. Desfile final, traca final y Vítol.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    participant_ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'],
    garment_requirement: 'Castellonera/castelloner completa.',
  },
];

// --- GARMENTS ---
export const GARMENTS: Garment[] = [
  // Zoe (madrina infantil)
  { id: 'g1', category: 'vestido', name: 'Traje de castellonera infantil', person_id: 'p1', status: 'disponible', notes: 'Traje principal para desfiles y actos formales', event_types: ['desfile', 'oficial', 'presentacion'] },
  { id: 'g2', category: 'banda', name: 'Banda oficial de Madrina Infantil', person_id: 'p1', status: 'disponible', notes: 'Banda con escudo de la Gaiata 1' },
  { id: 'g3', category: 'peineta', name: 'Peineta infantil', person_id: 'p1', status: 'disponible' },
  { id: 'g4', category: 'aderezo', name: 'Aderezo infantil (pendientes + collar)', person_id: 'p1', status: 'pendiente_compra', cost: 150 },
  { id: 'g5', category: 'zapatos', name: 'Zapatos blancos castellonera', person_id: 'p1', status: 'disponible' },
  { id: 'g6', category: 'medias', name: 'Medias blancas', person_id: 'p1', status: 'disponible' },
  { id: 'g7', category: 'peinado', name: 'Peinado recogido con moño', person_id: 'p1', status: 'pendiente_compra', notes: 'Cita con peluquería pendiente' },
  { id: 'g8', category: 'complemento', name: 'Kit de emergencia Zoe', person_id: 'p1', status: 'pendiente_compra', notes: 'Horquillas, imperdibles, agua, snack, pañuelos, protección auditiva' },
  { id: 'g9', category: 'vestido', name: 'Vestido de particular / gala', person_id: 'p1', status: 'pendiente_compra', notes: 'Para Homenaje a Comisiones (ropa de particular, cómoda)', event_types: ['social'] },

  // Clara (madrina mayor)
  { id: 'g10', category: 'vestido', name: 'Traje de castellonera completo', person_id: 'p2', status: 'disponible', notes: 'Traje principal para actos formales' },
  { id: 'g11', category: 'banda', name: 'Banda oficial de Madrina Mayor', person_id: 'p2', status: 'disponible' },
  { id: 'g12', category: 'manteleta', name: 'Manteleta bordada', person_id: 'p2', status: 'disponible' },
  { id: 'g13', category: 'peineta', name: 'Peineta de concha', person_id: 'p2', status: 'disponible' },
  { id: 'g14', category: 'aderezo', name: 'Aderezo completo (juego)', person_id: 'p2', status: 'disponible' },
  { id: 'g15', category: 'zapatos', name: 'Zapatos castellonera', person_id: 'p2', status: 'disponible' },
  { id: 'g16', category: 'delantal', name: 'Delantal bordado', person_id: 'p2', status: 'disponible' },
];

// --- TASKS ---
export const TASKS: Task[] = [
  // Preparación general
  { id: 't1', title: 'Crear carpeta del año festero', description: 'Organizar documentación digital del ciclo 2025-2026', assigned_to: 'p7', due_date: '2025-05-15', priority: 'alta', status: 'completada', checklist_type: 'documentacion' },
  { id: 't2', title: 'Crear checklist de vestuario base', description: 'Inventariar todas las prendas necesarias para el año', assigned_to: 'p7', due_date: '2025-05-31', priority: 'alta', status: 'en_progreso', checklist_type: 'indumentaria' },
  { id: 't3', title: 'Revisar estado de trajes existentes', description: 'Comprobar que todos los trajes estén en buen estado', assigned_to: 'p7', due_date: '2025-06-15', priority: 'media', status: 'pendiente', checklist_type: 'indumentaria' },
  { id: 't4', title: 'Hablar con Arturo y Mayo sobre dinámicas internas', description: 'Conocer mejor el funcionamiento de la Gaiata', assigned_to: 'p7', due_date: '2025-06-30', priority: 'alta', status: 'pendiente' },
  { id: 't5', title: 'Fortalecer relación Zoe–Clara', description: 'Organizar actividad conjunta natural', assigned_to: 'p7', due_date: '2025-07-15', priority: 'alta', status: 'pendiente' },

  // Presentación
  { id: 't6', title: 'Confirmar concepto y guion de la presentación', description: 'Definir tema, duración y estructura del acto en el Palau', event_id: 'e2', assigned_to: 'p3', due_date: '2025-11-15', priority: 'urgente', status: 'pendiente' },
  { id: 't7', title: 'Vestido para presentación de Zoe', description: 'Confirmar traje completo, pruebas y arreglos', event_id: 'e2', assigned_to: 'p7', due_date: '2025-12-01', priority: 'urgente', status: 'pendiente', checklist_type: 'indumentaria' },
  { id: 't8', title: 'Cita peluquería para presentación', description: 'Reservar cita y definir peinado para Zoe y Clara', event_id: 'e2', assigned_to: 'p7', due_date: '2025-12-10', priority: 'alta', status: 'pendiente' },
  { id: 't9', title: 'Ensayo general presentación', description: 'Validar timing, entradas y guion completo', event_id: 'e2', assigned_to: 'p3', due_date: '2025-12-12', priority: 'urgente', status: 'pendiente', depends_on: 't6' },

  // Semana grande
  { id: 't10', title: 'Preparar recepción Visita Oficial G1', description: 'Espacio preparado, representación del sector, responsables disponibles', event_id: 'e11', assigned_to: 'p3', due_date: '2026-03-12', priority: 'urgente', status: 'pendiente', checklist_type: 'logistica' },
  { id: 't11', title: 'Coordinar logística Caravana J2 (sale G1)', description: 'Gaiata 1 debe concentrar y coordinar formación. Arranque puntual 09:30.', event_id: 'e10', assigned_to: 'p3', due_date: '2026-03-10', priority: 'urgente', status: 'pendiente', checklist_type: 'logistica' },
  { id: 't12', title: 'Kit de emergencia completo para semana grande', description: 'Horquillas, imperdibles, agua, snack, pañuelos, protección auditiva, costurero', assigned_to: 'p7', due_date: '2026-03-05', priority: 'alta', status: 'pendiente', checklist_type: 'salida' },
  { id: 't13', title: 'Plan de descanso de Zoe durante semana grande', description: 'Gestionar descanso, limitar mascletás, prever espacios tranquilos', assigned_to: 'p7', due_date: '2026-03-01', priority: 'alta', status: 'pendiente' },
];

// --- BUDGET ---
export const BUDGET_ITEMS: BudgetItem[] = [
  { id: 'b1', category: 'indumentaria', description: 'Traje castellonera infantil (Zoe) – ajustes', estimated_amount: 800, real_amount: 750, payment_status: 'pagado' },
  { id: 'b2', category: 'indumentaria', description: 'Aderezo infantil (pendientes + collar)', estimated_amount: 200, payment_status: 'pendiente' },
  { id: 'b3', category: 'peluqueria', description: 'Peinados – temporada completa (aprox. 8 citas)', estimated_amount: 600, payment_status: 'pendiente' },
  { id: 'b4', category: 'indumentaria', description: 'Zapatos castellonera Zoe', estimated_amount: 120, real_amount: 95, payment_status: 'pagado' },
  { id: 'b5', category: 'regalos', description: 'Detalles para comisión e invitados', estimated_amount: 300, payment_status: 'pendiente' },
  { id: 'b6', category: 'decoracion', description: 'Escenografía presentación Palau', estimated_amount: 1500, event_id: 'e2', payment_status: 'pendiente' },
  { id: 'b7', category: 'comida', description: 'Catering post-presentación', estimated_amount: 800, event_id: 'e2', payment_status: 'pendiente' },
  { id: 'b8', category: 'transporte', description: 'Transporte semana grande', estimated_amount: 200, payment_status: 'pendiente' },
  { id: 'b9', category: 'arreglos', description: 'Arreglos costura temporada', estimated_amount: 400, payment_status: 'pendiente' },
  { id: 'b10', category: 'logistica', description: 'Preparación visita oficial G1', estimated_amount: 600, event_id: 'e11', payment_status: 'pendiente' },
  { id: 'b11', category: 'indumentaria', description: 'Vestido de particular/gala Zoe', estimated_amount: 150, payment_status: 'pendiente' },
  { id: 'b12', category: 'otros', description: 'Kit de emergencia y complementos', estimated_amount: 80, payment_status: 'pendiente' },
];

// --- SUPPLIERS ---
export const SUPPLIERS: Supplier[] = [
  { id: 's1', name: 'Madre de Clara', category: 'costura', service_description: 'Costurera. Arreglos y confección de trajes.', status: 'activo', notes: 'Contacto cercano. Relación personal.' },
  { id: 's2', name: 'Peluquería (por confirmar)', category: 'peluqueria', service_description: 'Peinados castellonera para actos formales', status: 'activo', notes: 'Reservar citas con antelación' },
  { id: 's3', name: 'Joyería (por confirmar)', category: 'joyeria', service_description: 'Aderezos y joyería tradicional', status: 'activo' },
  { id: 's4', name: 'Fotógrafo/Vídeo (por confirmar)', category: 'foto_video', service_description: 'Cobertura de presentación y actos principales', status: 'activo' },
  { id: 's5', name: 'Catering (por confirmar)', category: 'catering', service_description: 'Servicio post-presentación', status: 'activo' },
];

// --- DOCUMENTS ---
export const DOCUMENTS: Document[] = [
  {
    id: 'd1',
    title: 'Deep Research Report – Fiestas de la Magdalena',
    file_path: 'info/deep-research-report.md',
    file_type: 'markdown',
    category: 'historico',
    description: 'Investigación completa: calendario, protocolo, indumentaria, Gaiata 1, marco legal (BOE).',
    imported_at: '2026-03-10',
    reviewed: true,
  },
  {
    id: 'd2',
    title: 'Calendario Estratégico Anual – Visión Familiar',
    file_path: 'info/Calendario estratégico anual – Gaia.txt',
    file_type: 'text',
    category: 'calendario',
    description: 'Planificación mes a mes centrada en Zoe y la familia. Checklists por evento, sistema de registro de aprendizaje.',
    imported_at: '2026-03-10',
    reviewed: true,
  },
  {
    id: 'd3',
    title: 'Mapa Político-Social de la Gaiata 1',
    file_path: 'info/Mapa político-social de la Gaiata 1.txt',
    file_type: 'text',
    category: 'mapa_social',
    description: 'Mapa de actores clave, tipos de poder, estrategia de relación, riesgos sociales y posicionamiento familiar.',
    imported_at: '2026-03-10',
    reviewed: true,
  },
  {
    id: 'd4',
    title: 'Agenda Gaiata 2026',
    file_path: 'info/AGENDA GAIATA 2026.docx.pdf',
    file_type: 'pdf',
    category: 'calendario',
    description: 'Agenda oficial de la Gaiata para 2026.',
    imported_at: '2026-03-10',
    reviewed: false,
  },
];

// --- PROTOCOL RULES ---
export const PROTOCOL_RULES: ProtocolRule[] = [
  {
    id: 'pr1',
    event_type: 'desfile',
    rule_category: 'vestuario',
    title: 'Diferenciación portadores vs comitiva',
    description: 'Portadores: labrador/saragüells o labradora. Comitiva: castellonera/castelloner. Diferenciación obligatoria según BOE.',
    source: 'BOE – Decreto 30/2024 (Procesión de las Gaiatas, BIC)',
    verified: true,
  },
  {
    id: 'pr2',
    event_type: 'oficial',
    rule_category: 'vestuario',
    title: 'Prohibiciones en el Pregó',
    description: 'Prohibido gafas de sol, vaqueros y zapatillas deportivas para participantes. Limitación de duración de bailes.',
    source: 'Prensa local – Directrices Junta de Festes',
    verified: true,
  },
  {
    id: 'pr3',
    event_type: 'social',
    rule_category: 'vestuario',
    title: 'Homenaje a Comisiones – Cambio de protocolo',
    description: 'Se abandona el traje de castellonera por vestimenta "de particular" (calle/gala). Infantil: ropa cómoda.',
    source: 'Responsable de protocolo Junta de Festes (prensa)',
    verified: true,
  },
  {
    id: 'pr4',
    event_type: 'oficial',
    rule_category: 'precedencia',
    title: 'Estructura de comisiones por sector',
    description: 'Las 19 gaiatas se organizan por sectores. Cada comisión tiene madrina, comisión adulta e infantil, presidencia y equipos.',
    source: 'BOE – Decreto 30/2024',
    verified: true,
  },
  {
    id: 'pr5',
    event_type: 'presentacion',
    rule_category: 'entrada_salida',
    title: 'Formato de presentaciones en el Palau',
    description: 'Cada comisión construye su propio escenario y representación. Ocasión para dar a conocer a máximos representantes.',
    source: 'Federación Gestora de Gaiatas',
    verified: true,
  },
  {
    id: 'pr6',
    event_type: 'oficial',
    rule_category: 'error_evitar',
    title: 'Errores de posicionamiento social',
    description: 'Evitar: competir con dinero, comparar colaboraciones entre familias, forzar visibilidad, improvisar en temas de protocolo.',
    source: 'Análisis estratégico familiar',
    verified: false,
  },
];

// --- HELPERS ---

export function getPersonById(id: string): Person | undefined {
  return PERSONS.find(p => p.id === id);
}

export function getEventById(id: string): MagdalenaEvent | undefined {
  return EVENTS.find(e => e.id === id);
}

export function getTasksByEvent(eventId: string): Task[] {
  return TASKS.filter(t => t.event_id === eventId);
}

export function getTasksByPerson(personId: string): Task[] {
  return TASKS.filter(t => t.assigned_to === personId);
}

export function getGarmentsByPerson(personId: string): Garment[] {
  return GARMENTS.filter(g => g.person_id === personId);
}

export function getUpcomingEvents(): MagdalenaEvent[] {
  const today = new Date().toISOString().split('T')[0];
  return EVENTS
    .filter(e => e.date >= today && e.status !== 'cancelado')
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPendingTasks(): Task[] {
  return TASKS.filter(t => t.status === 'pendiente' || t.status === 'en_progreso');
}

export function getOverdueTasks(): Task[] {
  const today = new Date().toISOString().split('T')[0];
  return TASKS.filter(t => (t.status === 'pendiente' || t.status === 'en_progreso') && t.due_date < today);
}

export function getTotalBudget(): { estimated: number; real: number; pending: number } {
  const estimated = BUDGET_ITEMS.reduce((s, b) => s + b.estimated_amount, 0);
  const real = BUDGET_ITEMS.reduce((s, b) => s + (b.real_amount || 0), 0);
  const pending = BUDGET_ITEMS.filter(b => b.payment_status === 'pendiente').reduce((s, b) => s + b.estimated_amount, 0);
  return { estimated, real, pending };
}
