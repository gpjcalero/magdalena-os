// ============================================================
// PRIVACY: no introducir nombres, teléfonos, relaciones ni notas reales.
// Datos sintéticos
// ============================================================

import {
  MagdalenaEvent, Person, Garment, Task, BudgetItem,
  Supplier, Document, ProtocolRule, Incident, ExcellenceScore
} from './types';

// --- PERSONS ---
export const PERSONS: Person[] = [
  {
    id: 'demo-001',
    name: 'Dato sintético',
    role: 'madrina_infantil',
    power_types: ['simbolico', 'emocional'],
    influence_level: 'verde',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
  {
    id: 'demo-002',
    name: 'Dato sintético',
    role: 'madrina_mayor',
    power_types: ['simbolico', 'relacional', 'emocional'],
    influence_level: 'verde',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
  {
    id: 'demo-003',
    name: 'Dato sintético',
    role: 'presidente',
    power_types: ['formal', 'relacional', 'emocional'],
    influence_level: 'verde',
    phone: 'DEMO-NO-CONTACTAR',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
  {
    id: 'demo-004',
    name: 'Dato sintético',
    role: 'coordinadora',
    power_types: ['operativo', 'simbolico'],
    influence_level: 'verde',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
  {
    id: 'demo-005',
    name: 'Dato sintético',
    role: 'familia',
    power_types: ['emocional', 'relacional'],
    influence_level: 'verde',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
  {
    id: 'demo-006',
    name: 'Dato sintético',
    role: 'dama',
    power_types: ['emocional', 'relacional', 'simbolico'],
    influence_level: 'verde',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
  {
    id: 'demo-007',
    name: 'Dato sintético',
    role: 'familia',
    power_types: ['operativo', 'emocional'],
    influence_level: 'verde',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
  {
    id: 'demo-008',
    name: 'Dato sintético',
    role: 'familia',
    power_types: ['economico', 'relacional'],
    influence_level: 'amarillo',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
  {
    id: 'demo-009',
    name: 'Dato sintético',
    role: 'familia',
    power_types: ['relacional', 'economico'],
    influence_level: 'amarillo',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
  {
    id: 'demo-010',
    name: 'Dato sintético',
    role: 'familia',
    power_types: ['emocional', 'operativo'],
    influence_level: 'amarillo',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
  {
    id: 'demo-011',
    name: 'Dato sintético',
    role: 'familia',
    power_types: ['emocional', 'operativo'],
    influence_level: 'amarillo',
    notes: 'Contenido sintético para demostración.',
    is_active: true,
    short_description: 'Perfil completamente sintético.',
  },
];

// --- EVENTS ---
export const EVENTS: MagdalenaEvent[] = [
  // Pre-temporada
  {
    id: 'demo-012',
    name: 'Dato sintético',
    date: '2025-10-18',
    time_start: '19:00',
    location: 'Ubicación de demostración',
    event_type: 'oficial',
    formality_level: 'muy_formal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    noise_level: 'bajo',
    fatigue_risk: 'medio',
    status: 'planificado',
    budget_estimated: 300,
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-004', 'demo-005', 'demo-006', 'demo-007'],
    garment_requirement: 'Vestido formal, peinado, banda oficial, complementos.',
  },
  // Presentaciones
  {
    id: 'demo-013',
    name: 'Dato sintético',
    date: '2025-12-13',
    time_start: '20:00',
    location: 'Ubicación de demostración',
    event_type: 'presentacion',
    formality_level: 'muy_formal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    risks: 'Riesgos sintéticos de demostración.',
    plan_b: 'Plan alternativo sintético.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 2000,
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-004', 'demo-005', 'demo-006', 'demo-007', 'demo-008', 'demo-009'],
    garment_requirement: 'Traje formal de representación. Castellonera completa para madrinas.',
  },
  // Homenaje
  {
    id: 'demo-014',
    name: 'Dato sintético',
    date: '2026-02-21',
    time_start: '18:00',
    location: 'Ubicación de demostración',
    event_type: 'social',
    formality_level: 'semiformal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    noise_level: 'medio',
    fatigue_risk: 'medio',
    status: 'planificado',
    budget_estimated: 200,
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-004', 'demo-007'],
    garment_requirement: 'Ropa de particular / gala. NO castellonera. Infantil: cómoda.',
  },
  // Galanía
  {
    id: 'demo-015',
    name: 'Dato sintético',
    date: '2026-03-01',
    time_start: '20:00',
    location: 'Ubicación de demostración',
    event_type: 'galanía',
    formality_level: 'muy_formal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    noise_level: 'medio',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 400,
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-007'],
    garment_requirement: 'Vestimenta formal de representación.',
  },
  // SEMANA GRANDE
  {
    id: 'demo-016',
    name: 'Dato sintético',
    date: '2026-03-07',
    time_start: '19:00',
    location: 'Ubicación de demostración',
    event_type: 'oficial',
    formality_level: 'formal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 100,
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-007'],
    garment_requirement: 'Formal. Sin gafas de sol, sin vaqueros, sin deportivas.',
  },
  {
    id: 'demo-017',
    name: 'Dato sintético',
    date: '2026-03-07',
    time_start: '23:00',
    location: 'Ubicación de demostración',
    event_type: 'oficial',
    formality_level: 'formal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    noise_level: 'medio',
    fatigue_risk: 'alto',
    status: 'planificado',
    participant_ids: ['demo-003', 'demo-004'],
    garment_requirement: 'No especificado en fuentes oficiales.',
  },
  {
    id: 'demo-018',
    name: 'Dato sintético',
    date: '2026-03-08',
    time_start: '20:30',
    location: 'Ubicación de demostración',
    event_type: 'desfile',
    formality_level: 'muy_formal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 500,
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-004', 'demo-005', 'demo-006', 'demo-007', 'demo-008', 'demo-009'],
    garment_requirement: 'Castellonera/castelloner completa para comitiva. Labrador para portadores.',
  },
  {
    id: 'demo-019',
    name: 'Dato sintético',
    date: '2026-03-09',
    time_start: '20:15',
    location: 'Ubicación de demostración',
    event_type: 'oficial',
    formality_level: 'muy_formal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 200,
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-004', 'demo-007'],
    garment_requirement: 'No especificado oficialmente. Recomendada ropa de representación.',
  },
  {
    id: 'demo-020',
    name: 'Dato sintético',
    date: '2026-03-10',
    time_start: '21:00',
    location: 'Ubicación de demostración',
    event_type: 'oficial',
    formality_level: 'formal',
    description: 'Contenido sintético para demostración.',
    noise_level: 'medio',
    fatigue_risk: 'medio',
    status: 'planificado',
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-004'],
    garment_requirement: 'Representación formal.',
  },
  {
    id: 'demo-021',
    name: 'Dato sintético',
    date: '2026-03-11',
    time_start: '09:30',
    location: 'Ubicación de demostración',
    event_type: 'caravana',
    formality_level: 'semiformal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-004', 'demo-005', 'demo-006', 'demo-007'],
    garment_requirement: 'No especificado oficialmente.',
  },
  {
    id: 'demo-022',
    name: 'Dato sintético',
    date: '2026-03-13',
    time_start: '17:45',
    location: 'Ubicación de demostración',
    event_type: 'oficial',
    formality_level: 'muy_formal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    noise_level: 'medio',
    fatigue_risk: 'medio',
    status: 'planificado',
    budget_estimated: 500,
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-004', 'demo-005', 'demo-006', 'demo-007', 'demo-008', 'demo-009'],
    garment_requirement: 'Representación formal. Castellonera recomendada.',
  },
  {
    id: 'demo-023',
    name: 'Dato sintético',
    date: '2026-03-14',
    time_start: '16:00',
    location: 'Ubicación de demostración',
    event_type: 'ofrenda',
    formality_level: 'muy_formal',
    description: 'Contenido sintético para demostración.',
    protocol_notes: 'Protocolo sintético de demostración.',
    noise_level: 'medio',
    fatigue_risk: 'alto',
    status: 'planificado',
    budget_estimated: 200,
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-004', 'demo-007'],
    garment_requirement: 'No especificado oficialmente. Traje de castellonera habitual.',
  },
  {
    id: 'demo-024',
    name: 'Dato sintético',
    date: '2026-03-15',
    time_start: '20:30',
    location: 'Ubicación de demostración',
    event_type: 'desfile',
    formality_level: 'muy_formal',
    description: 'Contenido sintético para demostración.',
    noise_level: 'alto',
    fatigue_risk: 'alto',
    status: 'planificado',
    participant_ids: ['demo-001', 'demo-002', 'demo-003', 'demo-004', 'demo-005', 'demo-006', 'demo-007', 'demo-008', 'demo-009'],
    garment_requirement: 'Castellonera/castelloner completa.',
  },
];

// --- GARMENTS ---
export const GARMENTS: Garment[] = [
  // Datos sintéticos
  { id: 'demo-025', category: 'vestido', name: 'Dato sintético', person_id: 'demo-001', status: 'disponible', notes: 'Contenido sintético para demostración.', event_types: ['desfile', 'oficial', 'presentacion'] },
  { id: 'demo-026', category: 'banda', name: 'Dato sintético', person_id: 'demo-001', status: 'disponible', notes: 'Contenido sintético para demostración.' },
  { id: 'demo-027', category: 'peineta', name: 'Dato sintético', person_id: 'demo-001', status: 'disponible' },
  { id: 'demo-028', category: 'aderezo', name: 'Dato sintético', person_id: 'demo-001', status: 'pendiente_compra', cost: 150 },
  { id: 'demo-029', category: 'zapatos', name: 'Dato sintético', person_id: 'demo-001', status: 'disponible' },
  { id: 'demo-030', category: 'medias', name: 'Dato sintético', person_id: 'demo-001', status: 'disponible' },
  { id: 'demo-031', category: 'peinado', name: 'Dato sintético', person_id: 'demo-001', status: 'pendiente_compra', notes: 'Contenido sintético para demostración.' },
  { id: 'demo-032', category: 'complemento', name: 'Dato sintético', person_id: 'demo-001', status: 'pendiente_compra', notes: 'Contenido sintético para demostración.' },
  { id: 'demo-033', category: 'vestido', name: 'Dato sintético', person_id: 'demo-001', status: 'pendiente_compra', notes: 'Contenido sintético para demostración.', event_types: ['social'] },

  // Datos sintéticos
  { id: 'demo-034', category: 'vestido', name: 'Dato sintético', person_id: 'demo-002', status: 'disponible', notes: 'Contenido sintético para demostración.' },
  { id: 'demo-035', category: 'banda', name: 'Dato sintético', person_id: 'demo-002', status: 'disponible' },
  { id: 'demo-036', category: 'manteleta', name: 'Dato sintético', person_id: 'demo-002', status: 'disponible' },
  { id: 'demo-037', category: 'peineta', name: 'Dato sintético', person_id: 'demo-002', status: 'disponible' },
  { id: 'demo-038', category: 'aderezo', name: 'Dato sintético', person_id: 'demo-002', status: 'disponible' },
  { id: 'demo-039', category: 'zapatos', name: 'Dato sintético', person_id: 'demo-002', status: 'disponible' },
  { id: 'demo-040', category: 'delantal', name: 'Dato sintético', person_id: 'demo-002', status: 'disponible' },
];

// --- TASKS ---
export const TASKS: Task[] = [
  // Preparación general
  { id: 'demo-041', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', assigned_to: 'demo-007', due_date: '2025-05-15', priority: 'alta', status: 'completada', checklist_type: 'documentacion' },
  { id: 'demo-042', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', assigned_to: 'demo-007', due_date: '2025-05-31', priority: 'alta', status: 'en_progreso', checklist_type: 'indumentaria' },
  { id: 'demo-043', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', assigned_to: 'demo-007', due_date: '2025-06-15', priority: 'media', status: 'pendiente', checklist_type: 'indumentaria' },
  { id: 'demo-044', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', assigned_to: 'demo-007', due_date: '2025-06-30', priority: 'alta', status: 'pendiente' },
  { id: 'demo-045', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', assigned_to: 'demo-007', due_date: '2025-07-15', priority: 'alta', status: 'pendiente' },

  // Presentación
  { id: 'demo-046', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', event_id: 'demo-013', assigned_to: 'demo-003', due_date: '2025-11-15', priority: 'urgente', status: 'pendiente' },
  { id: 'demo-047', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', event_id: 'demo-013', assigned_to: 'demo-007', due_date: '2025-12-01', priority: 'urgente', status: 'pendiente', checklist_type: 'indumentaria' },
  { id: 'demo-048', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', event_id: 'demo-013', assigned_to: 'demo-007', due_date: '2025-12-10', priority: 'alta', status: 'pendiente' },
  { id: 'demo-049', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', event_id: 'demo-013', assigned_to: 'demo-003', due_date: '2025-12-12', priority: 'urgente', status: 'pendiente', depends_on: 'demo-046' },

  // Semana grande
  { id: 'demo-050', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', event_id: 'demo-022', assigned_to: 'demo-003', due_date: '2026-03-12', priority: 'urgente', status: 'pendiente', checklist_type: 'logistica' },
  { id: 'demo-051', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', event_id: 'demo-021', assigned_to: 'demo-003', due_date: '2026-03-10', priority: 'urgente', status: 'pendiente', checklist_type: 'logistica' },
  { id: 'demo-052', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', assigned_to: 'demo-007', due_date: '2026-03-05', priority: 'alta', status: 'pendiente', checklist_type: 'salida' },
  { id: 'demo-053', title: 'Elemento sintético', description: 'Contenido sintético para demostración.', assigned_to: 'demo-007', due_date: '2026-03-01', priority: 'alta', status: 'pendiente' },
];

// --- BUDGET ---
export const BUDGET_ITEMS: BudgetItem[] = [
  { id: 'demo-054', category: 'indumentaria', description: 'Contenido sintético para demostración.', estimated_amount: 800, real_amount: 750, payment_status: 'pagado' },
  { id: 'demo-055', category: 'indumentaria', description: 'Contenido sintético para demostración.', estimated_amount: 200, payment_status: 'pendiente' },
  { id: 'demo-056', category: 'peluqueria', description: 'Contenido sintético para demostración.', estimated_amount: 600, payment_status: 'pendiente' },
  { id: 'demo-057', category: 'indumentaria', description: 'Contenido sintético para demostración.', estimated_amount: 120, real_amount: 95, payment_status: 'pagado' },
  { id: 'demo-058', category: 'regalos', description: 'Contenido sintético para demostración.', estimated_amount: 300, payment_status: 'pendiente' },
  { id: 'demo-059', category: 'decoracion', description: 'Contenido sintético para demostración.', estimated_amount: 1500, event_id: 'demo-013', payment_status: 'pendiente' },
  { id: 'demo-060', category: 'comida', description: 'Contenido sintético para demostración.', estimated_amount: 800, event_id: 'demo-013', payment_status: 'pendiente' },
  { id: 'demo-061', category: 'transporte', description: 'Contenido sintético para demostración.', estimated_amount: 200, payment_status: 'pendiente' },
  { id: 'demo-062', category: 'arreglos', description: 'Contenido sintético para demostración.', estimated_amount: 400, payment_status: 'pendiente' },
  { id: 'demo-063', category: 'logistica', description: 'Contenido sintético para demostración.', estimated_amount: 600, event_id: 'demo-022', payment_status: 'pendiente' },
  { id: 'demo-064', category: 'indumentaria', description: 'Contenido sintético para demostración.', estimated_amount: 150, payment_status: 'pendiente' },
  { id: 'demo-065', category: 'otros', description: 'Contenido sintético para demostración.', estimated_amount: 80, payment_status: 'pendiente' },
];

// --- SUPPLIERS ---
export const SUPPLIERS: Supplier[] = [
  { id: 'demo-066', name: 'Dato sintético', category: 'costura', service_description: 'Servicio sintético de demostración.', status: 'activo', notes: 'Contenido sintético para demostración.' },
  { id: 'demo-067', name: 'Dato sintético', category: 'peluqueria', service_description: 'Servicio sintético de demostración.', status: 'activo', notes: 'Contenido sintético para demostración.' },
  { id: 'demo-068', name: 'Dato sintético', category: 'joyeria', service_description: 'Servicio sintético de demostración.', status: 'activo' },
  { id: 'demo-069', name: 'Dato sintético', category: 'foto_video', service_description: 'Servicio sintético de demostración.', status: 'activo' },
  { id: 'demo-070', name: 'Dato sintético', category: 'catering', service_description: 'Servicio sintético de demostración.', status: 'activo' },
];

// --- DOCUMENTS ---
export const DOCUMENTS: Document[] = [
  {
    id: 'demo-071',
    title: 'Elemento sintético',
    file_path: '/demo/documento-sintetico',
    file_type: 'markdown',
    category: 'historico',
    description: 'Contenido sintético para demostración.',
    imported_at: '2026-03-10',
    reviewed: true,
  },
  {
    id: 'demo-072',
    title: 'Elemento sintético',
    file_path: '/demo/documento-sintetico',
    file_type: 'text',
    category: 'calendario',
    description: 'Contenido sintético para demostración.',
    imported_at: '2026-03-10',
    reviewed: true,
  },
  {
    id: 'demo-073',
    title: 'Elemento sintético',
    file_path: '/demo/documento-sintetico',
    file_type: 'text',
    category: 'mapa_social',
    description: 'Contenido sintético para demostración.',
    imported_at: '2026-03-10',
    reviewed: true,
  },
  {
    id: 'demo-074',
    title: 'Elemento sintético',
    file_path: '/demo/documento-sintetico',
    file_type: 'pdf',
    category: 'calendario',
    description: 'Contenido sintético para demostración.',
    imported_at: '2026-03-10',
    reviewed: false,
  },
];

// --- PROTOCOL RULES ---
export const PROTOCOL_RULES: ProtocolRule[] = [
  {
    id: 'demo-075',
    event_type: 'desfile',
    rule_category: 'vestuario',
    title: 'Elemento sintético',
    description: 'Contenido sintético para demostración.',
    source: 'Fuente sintética',
    verified: true,
  },
  {
    id: 'demo-076',
    event_type: 'oficial',
    rule_category: 'vestuario',
    title: 'Elemento sintético',
    description: 'Contenido sintético para demostración.',
    source: 'Fuente sintética',
    verified: true,
  },
  {
    id: 'demo-077',
    event_type: 'social',
    rule_category: 'vestuario',
    title: 'Elemento sintético',
    description: 'Contenido sintético para demostración.',
    source: 'Fuente sintética',
    verified: true,
  },
  {
    id: 'demo-078',
    event_type: 'oficial',
    rule_category: 'precedencia',
    title: 'Elemento sintético',
    description: 'Contenido sintético para demostración.',
    source: 'Fuente sintética',
    verified: true,
  },
  {
    id: 'demo-079',
    event_type: 'presentacion',
    rule_category: 'entrada_salida',
    title: 'Elemento sintético',
    description: 'Contenido sintético para demostración.',
    source: 'Fuente sintética',
    verified: true,
  },
  {
    id: 'demo-080',
    event_type: 'oficial',
    rule_category: 'error_evitar',
    title: 'Elemento sintético',
    description: 'Contenido sintético para demostración.',
    source: 'Fuente sintética',
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


