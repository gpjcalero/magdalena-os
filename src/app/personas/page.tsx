import { PERSONS, getTasksByPerson, getGarmentsByPerson, EVENTS } from '@/lib/seed-data';
import { ROLE_LABELS, ROLE_ICONS, INFLUENCE_LABELS, INFLUENCE_COLORS } from '@/lib/constants';

export default function PersonasPage() {
  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Personas</span>
          </div>
          <h1 className="page-header-title">👥 Personas y Roles</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-navy">{PERSONS.length} personas</span>
          <button className="btn btn-primary">+ Añadir Persona</button>
        </div>
      </header>

      <div className="page-container">
        {/* Semáforo legend */}
        <div className="section" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--success)' }} />
            <span style={{ color: 'var(--slate-600)' }}>Reforzar</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--warning)' }} />
            <span style={{ color: 'var(--slate-600)' }}>Encuadrar</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--danger)' }} />
            <span style={{ color: 'var(--slate-600)' }}>Evitar dinámica</span>
          </div>
        </div>

        <div className="person-grid">
          {PERSONS.map(person => {
            const tasks = getTasksByPerson(person.id);
            const garments = getGarmentsByPerson(person.id);
            const eventCount = EVENTS.filter(e => e.participant_ids.includes(person.id)).length;
            const avatarColor = person.role === 'madrina_infantil' ? 'gold' :
              person.role === 'presidente' || person.role === 'coordinadora' ? 'navy' : 'green';

            return (
              <div key={person.id} className="person-card">
                <div className={`person-influence-dot ${person.influence_level}`} />
                <div className="person-card-header">
                  <div className={`person-avatar ${avatarColor}`}>
                    {ROLE_ICONS[person.role] || person.name.charAt(0)}
                  </div>
                  <div>
                    <div className="person-name">{person.name}</div>
                    <div className="person-role">{ROLE_LABELS[person.role]}</div>
                  </div>
                </div>

                {person.short_description && (
                  <div className="person-description">{person.short_description}</div>
                )}

                <div className="person-tags" style={{ marginBottom: '12px' }}>
                  {person.power_types.map(pt => (
                    <span key={pt} className="badge badge-slate" style={{ fontSize: '0.6875rem' }}>
                      {pt === 'formal' ? '🏛️' : pt === 'operativo' ? '⚙️' : pt === 'relacional' ? '🤝' :
                        pt === 'simbolico' ? '✨' : pt === 'economico' ? '💰' : '❤️'} {pt}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: 'var(--slate-500)' }}>
                  <span>🎪 {eventCount} eventos</span>
                  <span>✅ {tasks.length} tareas</span>
                  {garments.length > 0 && <span>👗 {garments.length} prendas</span>}
                </div>

                {person.notes && (
                  <div style={{ marginTop: '12px', padding: '10px 12px', background: 'var(--cream-100)', borderRadius: '8px', fontSize: '0.75rem', color: 'var(--slate-600)', lineHeight: 1.5 }}>
                    💡 {person.notes}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
