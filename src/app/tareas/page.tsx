import { TASKS, getPersonById, getEventById } from '@/lib/seed-data';
import { TASK_PRIORITY_LABELS, TASK_PRIORITY_COLORS, TASK_STATUS_LABELS, TASK_STATUS_COLORS } from '@/lib/constants';

export default function TareasPage() {
  const statusGroups = ['pendiente', 'en_progreso', 'completada', 'bloqueada'] as const;

  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Tareas</span>
          </div>
          <h1 className="page-header-title">✅ Tareas y Checklists</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-navy">{TASKS.length} tareas</span>
          <span className="badge badge-warning">{TASKS.filter(t => t.status === 'pendiente').length} pendientes</span>
          <button className="btn btn-primary">+ Nueva Tarea</button>
        </div>
      </header>

      <div className="page-container">
        {/* Summary stats */}
        <div className="stats-grid section">
          {statusGroups.map(status => {
            const count = TASKS.filter(t => t.status === status).length;
            const colors: Record<string, string> = { pendiente: 'warning', en_progreso: 'info', completada: 'success', bloqueada: 'danger' };
            return (
              <div key={status} className={`stat-card ${colors[status]}`}>
                <div className="stat-card-value">{count}</div>
                <div className="stat-card-label">{TASK_STATUS_LABELS[status]}</div>
              </div>
            );
          })}
        </div>

        {/* Kanban-style columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {statusGroups.map(status => {
            const tasks = TASKS.filter(t => t.status === status);
            if (tasks.length === 0 && status === 'bloqueada') return null;

            return (
              <div key={status}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  marginBottom: '12px', paddingBottom: '8px',
                  borderBottom: `3px solid ${TASK_STATUS_COLORS[status]}`
                }}>
                  <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--navy-800)' }}>
                    {TASK_STATUS_LABELS[status]}
                  </span>
                  <span className="badge" style={{ background: TASK_STATUS_COLORS[status] + '22', color: TASK_STATUS_COLORS[status] }}>
                    {tasks.length}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {tasks.map(task => {
                    const person = getPersonById(task.assigned_to);
                    const event = task.event_id ? getEventById(task.event_id) : null;

                    return (
                      <div key={task.id} className="card" style={{ marginBottom: 0 }}>
                        <div className="card-body" style={{ padding: '14px 16px' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                            <span className="badge" style={{
                              background: TASK_PRIORITY_COLORS[task.priority] + '22',
                              color: TASK_PRIORITY_COLORS[task.priority],
                              flexShrink: 0
                            }}>
                              {TASK_PRIORITY_LABELS[task.priority]}
                            </span>
                          </div>
                          <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--navy-800)', marginBottom: '6px' }}>
                            {task.title}
                          </div>
                          {task.description && (
                            <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', lineHeight: 1.5, marginBottom: '8px' }}>
                              {task.description}
                            </div>
                          )}
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '0.75rem', color: 'var(--slate-500)' }}>
                            {person && <span>👤 {person.name}</span>}
                            <span>📅 {new Date(task.due_date + 'T00:00:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                            {event && <span>🎪 {event.name.substring(0, 25)}</span>}
                            {task.checklist_type && <span className="badge badge-slate">{task.checklist_type}</span>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
