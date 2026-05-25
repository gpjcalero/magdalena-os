import { EVENTS, getPersonById, getTasksByEvent, GARMENTS } from '@/lib/seed-data';
import { EVENT_TYPE_LABELS, EVENT_TYPE_ICONS, EVENT_TYPE_COLORS, STATUS_LABELS, STATUS_COLORS, FORMALITY_LABELS, RISK_LEVEL_LABELS, MONTHS_ES, ROLE_LABELS, TASK_PRIORITY_LABELS, TASK_PRIORITY_COLORS, TASK_STATUS_LABELS } from '@/lib/constants';

export default function EventosPage() {
  const sortedEvents = [...EVENTS].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Eventos</span>
          </div>
          <h1 className="page-header-title">🎪 Gestión de Eventos</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-navy">{EVENTS.length} eventos</span>
          <button className="btn btn-primary">+ Nuevo Evento</button>
        </div>
      </header>

      <div className="page-container">
        {/* Filter bar */}
        <div className="filter-bar">
          <span style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', fontWeight: 500 }}>Filtrar:</span>
          <button className="filter-chip active">Todos</button>
          <button className="filter-chip">Oficiales</button>
          <button className="filter-chip">Desfiles</button>
          <button className="filter-chip">Presentaciones</button>
          <button className="filter-chip">Sociales</button>
          <button className="filter-chip">Religiosos</button>
        </div>

        {/* Event cards */}
        {sortedEvents.map(event => {
          const d = new Date(event.date + 'T00:00:00');
          const day = d.getDate();
          const month = MONTHS_ES[d.getMonth()];
          const year = d.getFullYear();
          const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
          const weekday = weekdays[d.getDay()];
          const tasks = getTasksByEvent(event.id);
          const participants = event.participant_ids.map(id => getPersonById(id)).filter(Boolean);

          return (
            <div key={event.id} className="card" style={{ marginBottom: '16px' }}>
              <div className="card-header" style={{ borderLeft: `4px solid ${EVENT_TYPE_COLORS[event.event_type]}` }}>
                <div>
                  <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>{EVENT_TYPE_ICONS[event.event_type]}</span>
                    {event.name}
                  </h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginTop: '4px' }}>
                    {weekday}, {day} de {month} {year} · {event.time_start}
                    {event.time_end ? ` – ${event.time_end}` : ''}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className="badge" style={{ background: STATUS_COLORS[event.status] + '22', color: STATUS_COLORS[event.status] }}>
                    {STATUS_LABELS[event.status]}
                  </span>
                  <span className="badge badge-gold">{EVENT_TYPE_LABELS[event.event_type]}</span>
                </div>
              </div>
              <div className="card-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {event.description}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.8125rem' }}>
                      <div>
                        <span style={{ color: 'var(--slate-400)', fontWeight: 500 }}>📍 Ubicación</span>
                        <div style={{ color: 'var(--slate-700)', fontWeight: 500, marginTop: '2px' }}>{event.location}</div>
                      </div>
                      <div>
                        <span style={{ color: 'var(--slate-400)', fontWeight: 500 }}>👔 Formalidad</span>
                        <div style={{ color: 'var(--slate-700)', fontWeight: 500, marginTop: '2px' }}>{FORMALITY_LABELS[event.formality_level]}</div>
                      </div>
                      <div>
                        <span style={{ color: 'var(--slate-400)', fontWeight: 500 }}>🔊 Ruido</span>
                        <div style={{ marginTop: '2px' }}>
                          <span className={`badge ${event.noise_level === 'alto' ? 'badge-danger' : event.noise_level === 'medio' ? 'badge-warning' : 'badge-success'}`}>
                            {RISK_LEVEL_LABELS[event.noise_level]}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span style={{ color: 'var(--slate-400)', fontWeight: 500 }}>⚡ Cansancio</span>
                        <div style={{ marginTop: '2px' }}>
                          <span className={`badge ${event.fatigue_risk === 'alto' ? 'badge-danger' : event.fatigue_risk === 'medio' ? 'badge-warning' : 'badge-success'}`}>
                            {RISK_LEVEL_LABELS[event.fatigue_risk]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Protocol */}
                    {event.protocol_notes && (
                      <div className="protocol-rule" style={{ marginBottom: '12px' }}>
                        <div className="protocol-rule-title" style={{ fontSize: '0.8125rem' }}>📜 Notas de Protocolo</div>
                        <div className="protocol-rule-text" style={{ fontSize: '0.8125rem' }}>{event.protocol_notes}</div>
                      </div>
                    )}

                    {/* Garment requirement */}
                    {event.garment_requirement && (
                      <div style={{ fontSize: '0.8125rem', marginBottom: '12px' }}>
                        <span style={{ color: 'var(--slate-400)', fontWeight: 500 }}>👗 Indumentaria requerida</span>
                        <div style={{ color: 'var(--slate-700)', marginTop: '4px', lineHeight: 1.5 }}>{event.garment_requirement}</div>
                      </div>
                    )}

                    {/* Budget */}
                    {event.budget_estimated && (
                      <div style={{ fontSize: '0.8125rem' }}>
                        <span style={{ color: 'var(--slate-400)', fontWeight: 500 }}>💰 Presupuesto</span>
                        <div style={{ color: 'var(--navy-800)', fontWeight: 600, marginTop: '2px' }}>
                          {event.budget_estimated.toLocaleString('es-ES')}€ estimado
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Participants */}
                {participants.length > 0 && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--slate-100)' }}>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--slate-400)', fontWeight: 500, marginBottom: '8px' }}>👥 Participantes</div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {participants.map(p => p && (
                        <span key={p.id} className="badge badge-slate" style={{ padding: '4px 10px' }}>
                          {p.name} · {ROLE_LABELS[p.role]}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Risks */}
                {event.risks && (
                  <div style={{ marginTop: '12px', padding: '12px 16px', background: 'var(--danger-light)', borderRadius: '8px', fontSize: '0.8125rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--danger)' }}>⚠️ Riesgos: </span>
                    <span style={{ color: 'var(--slate-700)' }}>{event.risks}</span>
                  </div>
                )}

                {event.plan_b && (
                  <div style={{ marginTop: '8px', padding: '12px 16px', background: 'var(--info-light)', borderRadius: '8px', fontSize: '0.8125rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--info)' }}>🛡️ Plan B: </span>
                    <span style={{ color: 'var(--slate-700)' }}>{event.plan_b}</span>
                  </div>
                )}

                {/* Tasks for this event */}
                {tasks.length > 0 && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--slate-100)' }}>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--slate-400)', fontWeight: 500, marginBottom: '8px' }}>✅ Tareas asociadas ({tasks.length})</div>
                    {tasks.map(task => {
                      const assignee = getPersonById(task.assigned_to);
                      return (
                        <div key={task.id} className="task-item" style={{ padding: '6px 0' }}>
                          <div className={`task-checkbox ${task.status === 'completada' ? 'checked' : ''}`}>
                            {task.status === 'completada' ? '✓' : ''}
                          </div>
                          <div className="task-info">
                            <div className="task-title">{task.title}</div>
                            <div className="task-meta">
                              <span className="badge" style={{ background: TASK_PRIORITY_COLORS[task.priority] + '22', color: TASK_PRIORITY_COLORS[task.priority] }}>
                                {TASK_PRIORITY_LABELS[task.priority]}
                              </span>
                              <span>👤 {assignee?.name}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
