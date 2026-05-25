import { EVENTS, PERSONS, TASKS, BUDGET_ITEMS, GARMENTS, DOCUMENTS, PROTOCOL_RULES, getUpcomingEvents, getPendingTasks, getOverdueTasks, getTotalBudget, getPersonById } from '@/lib/seed-data';
import { EVENT_TYPE_LABELS, EVENT_TYPE_ICONS, EVENT_TYPE_COLORS, STATUS_COLORS, TASK_PRIORITY_COLORS, TASK_PRIORITY_LABELS, MONTHS_ES, ROLE_LABELS, PAYMENT_STATUS_COLORS, PAYMENT_STATUS_LABELS } from '@/lib/constants';

export default function DashboardPage() {
  const upcoming = getUpcomingEvents().slice(0, 5);
  const pendingTasks = getPendingTasks();
  const overdueTasks = getOverdueTasks();
  const budget = getTotalBudget();

  const completedTasks = TASKS.filter(t => t.status === 'completada').length;
  const totalTasks = TASKS.length;
  const taskProgress = Math.round((completedTasks / totalTasks) * 100);

  const pendingGarments = GARMENTS.filter(g => g.status === 'pendiente_compra' || g.status === 'en_arreglo').length;
  const availableGarments = GARMENTS.filter(g => g.status === 'disponible').length;

  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span>
            <span>›</span>
            <span>Dashboard</span>
          </div>
          <h1 className="page-header-title">Centro de Control Festero</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-gold badge-dot">Magdalena 2026</span>
          <span className="badge badge-navy">Gaiata 1 — Brancal</span>
        </div>
      </header>

      <div className="page-container">
        {/* KPI Stats */}
        <div className="stats-grid section">
          <div className="stat-card gold">
            <div className="stat-card-icon">🎪</div>
            <div className="stat-card-value">{EVENTS.length}</div>
            <div className="stat-card-label">Eventos totales</div>
            <div className="stat-card-trend up">↑ {upcoming.length} próximos</div>
          </div>

          <div className="stat-card navy">
            <div className="stat-card-icon">✅</div>
            <div className="stat-card-value">{completedTasks}/{totalTasks}</div>
            <div className="stat-card-label">Tareas completadas</div>
            <div style={{ marginTop: '4px' }}>
              <div className="progress-bar">
                <div className="progress-bar-fill gold" style={{ width: `${taskProgress}%` }} />
              </div>
            </div>
          </div>

          <div className="stat-card warning">
            <div className="stat-card-icon">⚡</div>
            <div className="stat-card-value">{overdueTasks.length}</div>
            <div className="stat-card-label">Tareas vencidas</div>
            <div className="stat-card-trend down">{overdueTasks.length > 0 ? '↓ Requiere atención' : '✓ Al día'}</div>
          </div>

          <div className="stat-card info">
            <div className="stat-card-icon">💰</div>
            <div className="stat-card-value">{budget.estimated.toLocaleString('es-ES')}€</div>
            <div className="stat-card-label">Presupuesto estimado</div>
            <div className="stat-card-trend">{budget.pending.toLocaleString('es-ES')}€ pendiente</div>
          </div>

          <div className="stat-card success">
            <div className="stat-card-icon">👗</div>
            <div className="stat-card-value">{availableGarments}/{GARMENTS.length}</div>
            <div className="stat-card-label">Prendas listas</div>
            <div className="stat-card-trend">{pendingGarments > 0 ? `${pendingGarments} pendientes` : '✓ Completo'}</div>
          </div>

          <div className="stat-card danger">
            <div className="stat-card-icon">👥</div>
            <div className="stat-card-value">{PERSONS.filter(p => p.is_active).length}</div>
            <div className="stat-card-label">Personas activas</div>
            <div className="stat-card-trend">{PERSONS.filter(p => p.influence_level === 'verde').length} clave</div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="content-grid section">
          {/* Próximos eventos */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">📅 Próximos Eventos</h3>
              <a href="/eventos" className="btn btn-sm btn-secondary">Ver todos →</a>
            </div>
            <div className="event-list">
              {upcoming.map(event => {
                const d = new Date(event.date + 'T00:00:00');
                const day = d.getDate();
                const month = MONTHS_ES[d.getMonth()].substring(0, 3).toUpperCase();
                return (
                  <a href={`/eventos/${event.id}`} key={event.id} className="event-item" style={{ textDecoration: 'none' }}>
                    <div className="event-date-col">
                      <div className="event-date-day">{day}</div>
                      <div className="event-date-month">{month}</div>
                    </div>
                    <div className="event-info">
                      <div className="event-name">
                        {EVENT_TYPE_ICONS[event.event_type]} {event.name}
                      </div>
                      <div className="event-meta">
                        <span className="event-meta-item">🕐 {event.time_start}</span>
                        <span className="event-meta-item">📍 {event.location}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                        <span className="badge badge-gold">{EVENT_TYPE_LABELS[event.event_type]}</span>
                        <span className="badge" style={{ background: STATUS_COLORS[event.status] + '22', color: STATUS_COLORS[event.status] }}>
                          {event.status === 'planificado' ? 'Planificado' : event.status}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="card-footer" style={{ textAlign: 'center' }}>
              <a href="/calendario" className="btn btn-sm btn-primary">📅 Ver Calendario Completo</a>
            </div>
          </div>

          {/* Tareas pendientes */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">✅ Tareas Prioritarias</h3>
              <a href="/tareas" className="btn btn-sm btn-secondary">Ver todas →</a>
            </div>
            <div className="task-list">
              {pendingTasks.slice(0, 7).map(task => {
                const person = getPersonById(task.assigned_to);
                return (
                  <div key={task.id} className="task-item">
                    <div className={`task-checkbox ${task.status === 'completada' ? 'checked' : task.status === 'en_progreso' ? 'in-progress' : ''}`}>
                      {task.status === 'completada' ? '✓' : task.status === 'en_progreso' ? '◐' : ''}
                    </div>
                    <div className="task-info">
                      <div className={`task-title ${task.status === 'completada' ? 'completed' : ''}`}>
                        {task.title}
                      </div>
                      <div className="task-meta">
                        <span className="badge" style={{ background: TASK_PRIORITY_COLORS[task.priority] + '22', color: TASK_PRIORITY_COLORS[task.priority] }}>
                          {TASK_PRIORITY_LABELS[task.priority]}
                        </span>
                        <span>👤 {person?.name || 'Sin asignar'}</span>
                        <span>📅 {new Date(task.due_date + 'T00:00:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Secondary content grid */}
        <div className="content-grid section">
          {/* Budget summary */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">💰 Resumen Presupuestario</h3>
              <a href="/presupuesto" className="btn btn-sm btn-secondary">Detalle →</a>
            </div>
            <div className="card-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--navy-800)' }}>
                    {budget.estimated.toLocaleString('es-ES')}€
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>Estimado</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--success)' }}>
                    {budget.real.toLocaleString('es-ES')}€
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>Gastado</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#e65100' }}>
                    {budget.pending.toLocaleString('es-ES')}€
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>Pendiente</div>
                </div>
              </div>
              <div className="progress-bar" style={{ height: '12px' }}>
                <div
                  className="progress-bar-fill gold"
                  style={{ width: `${Math.round((budget.real / budget.estimated) * 100)}%` }}
                />
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginTop: '8px', textAlign: 'center' }}>
                {Math.round((budget.real / budget.estimated) * 100)}% ejecutado
              </div>
            </div>
          </div>

          {/* People overview */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">👥 Equipo Clave</h3>
              <a href="/personas" className="btn btn-sm btn-secondary">Ver todos →</a>
            </div>
            <div className="card-body" style={{ padding: '12px 20px' }}>
              {PERSONS.filter(p => p.influence_level === 'verde').slice(0, 6).map(person => (
                <div key={person.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: '1px solid var(--slate-100)' }}>
                  <div className={`person-avatar ${person.role === 'madrina_infantil' ? 'gold' : person.role === 'presidente' ? 'navy' : 'green'}`}
                    style={{ width: 36, height: 36, fontSize: '0.875rem' }}>
                    {person.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--navy-800)' }}>{person.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>{ROLE_LABELS[person.role]}</div>
                  </div>
                  <div className="person-influence-dot" style={{ position: 'static', width: 8, height: 8, borderRadius: '50%', background: 'var(--success)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="section">
          <h3 className="section-title" style={{ marginBottom: '16px' }}>⚡ Acceso Rápido</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <a href="/indumentaria" className="card" style={{ padding: '20px', textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>👗</div>
              <div style={{ fontWeight: 600, color: 'var(--navy-800)', fontSize: '0.9375rem' }}>Indumentaria</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>{GARMENTS.length} prendas registradas</div>
            </a>
            <a href="/protocolo" className="card" style={{ padding: '20px', textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📜</div>
              <div style={{ fontWeight: 600, color: 'var(--navy-800)', fontSize: '0.9375rem' }}>Protocolo</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>{PROTOCOL_RULES.length} reglas documentadas</div>
            </a>
            <a href="/documentos" className="card" style={{ padding: '20px', textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📁</div>
              <div style={{ fontWeight: 600, color: 'var(--navy-800)', fontSize: '0.9375rem' }}>Documentos</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>{DOCUMENTS.length} archivos indexados</div>
            </a>
            <a href="/excelencia" className="card" style={{ padding: '20px', textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🏆</div>
              <div style={{ fontWeight: 600, color: 'var(--navy-800)', fontSize: '0.9375rem' }}>Excelencia</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>Panel de calidad</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
