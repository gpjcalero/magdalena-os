// ============================================================
// Magdalena OS — Type Definitions
// ============================================================

// --- Enums ---

export type EventType =
  | 'oficial'
  | 'presentacion'
  | 'desfile'
  | 'religioso'
  | 'social'
  | 'infantil'
  | 'reunion'
  | 'ensayo'
  | 'prueba_indumentaria'
  | 'galanía'
  | 'caravana'
  | 'ofrenda'
  | 'personalizado';

export type FormalityLevel = 'muy_formal' | 'formal' | 'semiformal' | 'informal';

export type EventStatus = 'planificado' | 'confirmado' | 'en_curso' | 'completado' | 'cancelado';

export type PersonRole =
  | 'madrina_infantil'
  | 'madrina_mayor'
  | 'presidente'
  | 'coordinadora'
  | 'dama'
  | 'familia'
  | 'invitado'
  | 'proveedor_contacto';

export type PowerType = 'formal' | 'operativo' | 'relacional' | 'simbolico' | 'economico' | 'emocional';

export type InfluenceLevel = 'verde' | 'amarillo' | 'rojo';

export type GarmentCategory =
  | 'vestido'
  | 'jubon'
  | 'manteleta'
  | 'delantal'
  | 'aderezo'
  | 'peineta'
  | 'joyeria'
  | 'medias'
  | 'zapatos'
  | 'ropa_interior'
  | 'manton'
  | 'capa'
  | 'complemento'
  | 'peinado'
  | 'banda';

export type GarmentStatus =
  | 'disponible'
  | 'en_arreglo'
  | 'pendiente_compra'
  | 'prestada'
  | 'alquilada'
  | 'perdida';

export type TaskPriority = 'urgente' | 'alta' | 'media' | 'baja';

export type TaskStatus = 'pendiente' | 'en_progreso' | 'completada' | 'bloqueada';

export type ChecklistType = 'salida' | 'indumentaria' | 'documentacion' | 'logistica' | 'postevento';

export type BudgetCategory =
  | 'indumentaria'
  | 'logistica'
  | 'regalos'
  | 'arreglos'
  | 'alquileres'
  | 'comida'
  | 'transporte'
  | 'decoracion'
  | 'peluqueria'
  | 'otros';

export type PaymentStatus = 'pendiente' | 'parcial' | 'pagado';

export type SupplierCategory =
  | 'costura'
  | 'peluqueria'
  | 'joyeria'
  | 'floristeria'
  | 'catering'
  | 'transporte'
  | 'foto_video'
  | 'decoracion'
  | 'otros';

export type SupplierStatus = 'activo' | 'completado' | 'descartado';

export type DocumentFileType = 'pdf' | 'word' | 'excel' | 'image' | 'text' | 'markdown' | 'other';

export type DocumentCategory =
  | 'protocolo'
  | 'calendario'
  | 'indumentaria'
  | 'presupuesto'
  | 'historico'
  | 'comision'
  | 'mapa_social'
  | 'otro';

export type ProtocolRuleCategory =
  | 'precedencia'
  | 'vestuario'
  | 'saludo'
  | 'ubicacion'
  | 'entrada_salida'
  | 'error_evitar';

export type IncidentSeverity = 'leve' | 'moderada' | 'grave';

export type RiskLevel = 'bajo' | 'medio' | 'alto';

// --- Interfaces ---

export interface MagdalenaEvent {
  id: string;
  name: string;
  date: string;
  time_start: string;
  time_end?: string;
  location: string;
  event_type: EventType;
  formality_level: FormalityLevel;
  description: string;
  protocol_notes?: string;
  risks?: string;
  plan_b?: string;
  post_notes?: string;
  noise_level: RiskLevel;
  fatigue_risk: RiskLevel;
  status: EventStatus;
  budget_estimated?: number;
  budget_real?: number;
  participant_ids: string[];
  garment_requirement?: string;
  checklist_items?: ChecklistItem[];
}

export interface Person {
  id: string;
  name: string;
  role: PersonRole;
  power_types: PowerType[];
  influence_level: InfluenceLevel;
  phone?: string;
  email?: string;
  notes?: string;
  photo_url?: string;
  is_active: boolean;
  short_description?: string;
}

export interface EventParticipant {
  id: string;
  event_id: string;
  person_id: string;
  role_in_event: string;
  confirmed: boolean;
}

export interface Garment {
  id: string;
  category: GarmentCategory;
  name: string;
  person_id: string;
  status: GarmentStatus;
  physical_location?: string;
  supplier_id?: string;
  cost?: number;
  pending_alterations?: string;
  photo_url?: string;
  notes?: string;
  event_types?: EventType[];
}

export interface EventLook {
  id: string;
  event_id: string;
  person_id: string;
  garment_ids: string[];
  is_validated: boolean;
  notes?: string;
  missing_items?: string[];
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  event_id?: string;
  assigned_to: string;
  due_date: string;
  priority: TaskPriority;
  status: TaskStatus;
  depends_on?: string;
  checklist_type?: ChecklistType;
  comments?: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
  category?: ChecklistType;
}

export interface BudgetItem {
  id: string;
  category: BudgetCategory;
  description: string;
  estimated_amount: number;
  real_amount?: number;
  event_id?: string;
  supplier_id?: string;
  payment_status: PaymentStatus;
  due_date?: string;
  receipt_url?: string;
}

export interface Supplier {
  id: string;
  name: string;
  category: SupplierCategory;
  contact_name?: string;
  phone?: string;
  email?: string;
  service_description?: string;
  rating?: number;
  status: SupplierStatus;
  notes?: string;
}

export interface Document {
  id: string;
  title: string;
  file_path: string;
  file_type: DocumentFileType;
  category: DocumentCategory;
  description?: string;
  extracted_text?: string;
  linked_event_id?: string;
  linked_person_id?: string;
  linked_supplier_id?: string;
  imported_at: string;
  reviewed: boolean;
}

export interface ProtocolRule {
  id: string;
  event_type: EventType;
  rule_category: ProtocolRuleCategory;
  title: string;
  description: string;
  source?: string;
  verified: boolean;
}

export interface Incident {
  id: string;
  event_id?: string;
  title: string;
  description: string;
  severity: IncidentSeverity;
  resolution?: string;
  lesson_learned?: string;
  reported_at: string;
  resolved: boolean;
}

export interface ExcellenceScore {
  id: string;
  event_id: string;
  puntualidad: number;
  preparacion: number;
  coherencia_estetica: number;
  disciplina_operativa: number;
  calidad_ejecucion: number;
  atencion_invitados: number;
  protocolo: number;
  notes?: string;
  overall_score?: number;
}

// --- Dashboard types ---

export interface DashboardStats {
  totalEvents: number;
  upcomingEvents: number;
  completedEvents: number;
  pendingTasks: number;
  overdueTasks: number;
  totalBudget: number;
  spentBudget: number;
  pendingPayments: number;
  excellenceAverage: number;
  openIncidents: number;
}

// --- Navigation ---

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: number;
  active?: boolean;
}
