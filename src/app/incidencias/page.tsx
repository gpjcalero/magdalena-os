import { INCIDENT_SEVERITY_LABELS, INCIDENT_SEVERITY_COLORS } from '@/lib/constants';

// Example incidents (would accumulate over the season)
const SAMPLE_INCIDENTS = [
  {
    id: 'i1',
    title: 'Peineta suelta durante ensayo',
    description: 'Durante un ensayo previo, la peineta de Zoe no quedó bien fijada. Se identificó que necesita más horquillas y un tipo de fijación más fuerte.',
    severity: 'leve' as const,
    resolution: 'Se adquirieron horquillas reforzadas y se incluyó fijador extra en el kit de emergencia.',
    lesson_learned: 'Siempre probar peinado completo el día anterior. Incluir horquillas de repuesto en kit.',
    reported_at: '2025-11-20',
    resolved: true,
  },
  {
    id: 'i2',
    title: 'Retraso en arreglo de vestido',
    description: 'Un arreglo de costura se entregó con 2 días de retraso respecto a lo previsto.',
    severity: 'moderada' as const,
    resolution: 'Se negoció un calendario de entregas con margen adicional.',
    lesson_learned: 'Pedir entregas con una semana de margen antes de la fecha real de uso.',
    reported_at: '2025-12-01',
    resolved: true,
  },
  {
    id: 'i3',
    title: 'Confusión sobre dress code del Homenaje',
    description: 'Inicialmente se preparó traje de castellonera para el Homenaje a Comisiones, pero el protocolo cambió a "ropa de particular".',
    severity: 'moderada' as const,
    resolution: 'Se consultó directamente con Junta de Festes y se confirmó el cambio de protocolo.',
    lesson_learned: 'Confirmar siempre dress code con fuente oficial antes de preparar indumentaria. El protocolo puede cambiar.',
    reported_at: '2026-02-15',
    resolved: true,
  },
];

export default function IncidenciasPage() {
  const resolved = SAMPLE_INCIDENTS.filter(i => i.resolved).length;
  const open = SAMPLE_INCIDENTS.filter(i => !i.resolved).length;

  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Incidencias</span>
          </div>
          <h1 className="page-header-title">⚠️ Control de Incidencias</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-success">{resolved} resueltas</span>
          {open > 0 && <span className="badge badge-danger">{open} abiertas</span>}
          <button className="btn btn-primary">+ Reportar Incidencia</button>
        </div>
      </header>

      <div className="page-container">
        {/* Stats */}
        <div className="stats-grid section">
          <div className="stat-card success">
            <div className="stat-card-icon">✅</div>
            <div className="stat-card-value">{resolved}</div>
            <div className="stat-card-label">Resueltas</div>
          </div>
          <div className="stat-card danger">
            <div className="stat-card-icon">🔴</div>
            <div className="stat-card-value">{open}</div>
            <div className="stat-card-label">Abiertas</div>
          </div>
          <div className="stat-card gold">
            <div className="stat-card-icon">📚</div>
            <div className="stat-card-value">{SAMPLE_INCIDENTS.filter(i => i.lesson_learned).length}</div>
            <div className="stat-card-label">Lecciones Aprendidas</div>
          </div>
        </div>

        {/* Incident list */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">📋 Registro de Incidencias</h3>
          </div>
          <div>
            {SAMPLE_INCIDENTS.map(incident => (
              <div key={incident.id} className="incident-item" style={{ display: 'block', padding: '20px 24px', borderBottom: '1px solid var(--slate-100)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div className={`incident-severity ${incident.severity}`} style={{ marginTop: 0 }} />
                  <span className="badge" style={{
                    background: INCIDENT_SEVERITY_COLORS[incident.severity] + '22',
                    color: INCIDENT_SEVERITY_COLORS[incident.severity]
                  }}>
                    {INCIDENT_SEVERITY_LABELS[incident.severity]}
                  </span>
                  <span className={`badge ${incident.resolved ? 'badge-success' : 'badge-danger'}`}>
                    {incident.resolved ? '✅ Resuelta' : '🔴 Abierta'}
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--slate-400)', marginLeft: 'auto' }}>
                    {new Date(incident.reported_at + 'T00:00:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>

                <h4 style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--navy-800)', marginBottom: '6px', fontFamily: 'var(--font-sans)' }}>
                  {incident.title}
                </h4>

                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '12px' }}>
                  {incident.description}
                </p>

                {incident.resolution && (
                  <div style={{ padding: '10px 14px', background: 'var(--success-light)', borderRadius: '8px', marginBottom: '8px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--success)', marginBottom: '4px' }}>✅ Resolución</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--slate-700)' }}>{incident.resolution}</div>
                  </div>
                )}

                {incident.lesson_learned && (
                  <div style={{ padding: '10px 14px', background: 'var(--info-light)', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--info)', marginBottom: '4px' }}>💡 Lección Aprendida</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--slate-700)' }}>{incident.lesson_learned}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
