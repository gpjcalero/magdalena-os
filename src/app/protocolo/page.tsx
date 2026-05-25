import { PROTOCOL_RULES } from '@/lib/seed-data';
import { EVENT_TYPE_LABELS, EVENT_TYPE_ICONS } from '@/lib/constants';

const RULE_CATEGORY_LABELS: Record<string, string> = {
  precedencia: '🏛️ Precedencia',
  vestuario: '👗 Vestuario',
  saludo: '🤝 Saludos',
  ubicacion: '📍 Ubicación',
  entrada_salida: '🚪 Entrada/Salida',
  error_evitar: '❌ Errores a Evitar',
};

export default function ProtocoloPage() {
  // Group by event type
  const eventTypes = [...new Set(PROTOCOL_RULES.map(r => r.event_type))];

  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Protocolo</span>
          </div>
          <h1 className="page-header-title">📜 Protocolo y Etiqueta</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-success">{PROTOCOL_RULES.filter(r => r.verified).length} verificadas</span>
          <span className="badge badge-warning">{PROTOCOL_RULES.filter(r => !r.verified).length} sin verificar</span>
          <button className="btn btn-primary">+ Nueva Regla</button>
        </div>
      </header>

      <div className="page-container">
        {/* Legend */}
        <div className="card section">
          <div className="card-body" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--navy-800)' }}>Leyenda:</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: 20, height: 12, borderLeft: '3px solid var(--success)', background: 'var(--success-light)', borderRadius: '0 3px 3px 0' }} />
              <span style={{ fontSize: '0.8125rem', color: 'var(--slate-600)' }}>Verificada (fuente oficial)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: 20, height: 12, borderLeft: '3px solid var(--warning)', background: 'var(--warning-light)', borderRadius: '0 3px 3px 0' }} />
              <span style={{ fontSize: '0.8125rem', color: 'var(--slate-600)' }}>Sin verificar / suposición razonable</span>
            </div>
          </div>
        </div>

        {eventTypes.map(eventType => {
          const rules = PROTOCOL_RULES.filter(r => r.event_type === eventType);
          return (
            <div key={eventType} className="section">
              <div className="section-header">
                <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>{EVENT_TYPE_ICONS[eventType]}</span>
                  {EVENT_TYPE_LABELS[eventType]}
                  <span className="badge badge-slate">{rules.length} reglas</span>
                </h2>
              </div>

              {rules.map(rule => (
                <div key={rule.id} className={`protocol-rule ${rule.verified ? 'verified' : 'unverified'}`}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span className="badge badge-slate">{RULE_CATEGORY_LABELS[rule.rule_category]}</span>
                    {rule.verified ? (
                      <span className="badge badge-success">✅ Verificada</span>
                    ) : (
                      <span className="badge badge-warning">⚠️ Sin verificar</span>
                    )}
                  </div>
                  <div className="protocol-rule-title">{rule.title}</div>
                  <div className="protocol-rule-text">{rule.description}</div>
                  {rule.source && (
                    <div className="protocol-rule-source">📄 Fuente: {rule.source}</div>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
