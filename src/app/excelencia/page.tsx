import { EVENTS } from '@/lib/seed-data';

// Example excellence data (would come from real evaluations post-event)
const EXCELLENCE_CRITERIA = [
  { key: 'puntualidad', label: 'Puntualidad', icon: '⏰', description: 'Cumplimiento de horarios en todos los actos' },
  { key: 'preparacion', label: 'Preparación', icon: '📋', description: 'Nivel de preparación previa al evento' },
  { key: 'coherencia_estetica', label: 'Coherencia Estética', icon: '🎨', description: 'Armonía visual en indumentaria y presentación' },
  { key: 'disciplina_operativa', label: 'Disciplina Operativa', icon: '⚙️', description: 'Ejecución precisa de tareas y protocolos' },
  { key: 'calidad_ejecucion', label: 'Calidad de Ejecución', icon: '✨', description: 'Nivel de excelencia en la puesta en escena' },
  { key: 'atencion_invitados', label: 'Atención a Invitados', icon: '🤝', description: 'Trato, hospitalidad y cortesía' },
  { key: 'protocolo', label: 'Protocolo', icon: '📜', description: 'Cumplimiento de normas protocolarias' },
];

// Simulated scores (these would come from real post-event evaluations)
const TARGET_SCORES: Record<string, number> = {
  puntualidad: 9,
  preparacion: 8,
  coherencia_estetica: 9,
  disciplina_operativa: 8,
  calidad_ejecucion: 9,
  atencion_invitados: 8,
  protocolo: 9,
};

export default function ExcelenciaPage() {
  const avgScore = Object.values(TARGET_SCORES).reduce((s, v) => s + v, 0) / Object.values(TARGET_SCORES).length;
  const completedEvents = EVENTS.filter(e => e.status === 'completado').length;

  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Excelencia</span>
          </div>
          <h1 className="page-header-title">🏆 Panel de Excelencia</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-gold badge-dot">Objetivo: Gaiata Ganadora</span>
        </div>
      </header>

      <div className="page-container">
        {/* Overall score */}
        <div className="card section" style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--slate-500)', fontWeight: 500, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Puntuación Objetivo Global
          </div>
          <div style={{
            fontSize: '4rem', fontWeight: 700, color: 'var(--gold-600)',
            fontFamily: 'var(--font-display)', lineHeight: 1
          }}>
            {avgScore.toFixed(1)}
          </div>
          <div style={{ fontSize: '1rem', color: 'var(--slate-400)', marginTop: '4px' }}>/ 10</div>
          <div style={{ maxWidth: '300px', margin: '16px auto 0' }}>
            <div className="progress-bar" style={{ height: '12px' }}>
              <div className="progress-bar-fill gold" style={{ width: `${avgScore * 10}%` }} />
            </div>
          </div>
          <div style={{ marginTop: '16px', fontSize: '0.875rem', color: 'var(--slate-500)' }}>
            {completedEvents} eventos evaluados de {EVENTS.length} totales
          </div>
        </div>

        {/* Criteria breakdown */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">📊 Criterios de Excelencia</h2>
          </div>

          <div className="excellence-radar">
            {EXCELLENCE_CRITERIA.map(criterion => {
              const score = TARGET_SCORES[criterion.key];
              const barWidth = score * 10;
              const color = score >= 9 ? 'var(--success)' : score >= 7 ? 'var(--gold-500)' : 'var(--warning)';

              return (
                <div key={criterion.key} className="card" style={{ padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{criterion.icon}</div>
                  <div className="excellence-score" style={{ color }}>{score}</div>
                  <div className="excellence-label">{criterion.label}</div>
                  <div className="excellence-bar" style={{ marginTop: '12px' }}>
                    <div className="excellence-bar-fill" style={{ width: `${barWidth}%`, background: color }} />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-400)', marginTop: '8px', lineHeight: 1.3 }}>
                    {criterion.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key improvement areas */}
        <div className="content-grid section">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">🎯 Objetivos de Mejora</h3>
            </div>
            <div className="card-body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ padding: '12px 16px', background: 'var(--gold-50)', borderRadius: '8px', borderLeft: '3px solid var(--gold-500)' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--navy-800)' }}>Preparación previa a cada acto</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-600)', marginTop: '4px' }}>
                    Completar checklist de salida 72h antes. Probar vestuario completo 24h antes.
                  </div>
                </div>
                <div style={{ padding: '12px 16px', background: 'var(--gold-50)', borderRadius: '8px', borderLeft: '3px solid var(--gold-500)' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--navy-800)' }}>Coherencia estética entre madrinas</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-600)', marginTop: '4px' }}>
                    Coordinar colores, complementos y peinados entre Zoe y Clara para cada acto.
                  </div>
                </div>
                <div style={{ padding: '12px 16px', background: 'var(--gold-50)', borderRadius: '8px', borderLeft: '3px solid var(--gold-500)' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--navy-800)' }}>Gestión del cansancio de Zoe</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-600)', marginTop: '4px' }}>
                    Plan de descanso específico para semana grande. Limitar mascletás. Espacios tranquilos.
                  </div>
                </div>
                <div style={{ padding: '12px 16px', background: 'var(--gold-50)', borderRadius: '8px', borderLeft: '3px solid var(--gold-500)' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--navy-800)' }}>Impecabilidad en la Visita Oficial</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-600)', marginTop: '4px' }}>
                    Espacio impecable, representación completa, obsequios preparados, timing controlado.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">📋 Sistema de Aprendizaje por Evento</h3>
            </div>
            <div className="card-body">
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '16px' }}>
                Después de cada evento, registrar:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  '1️⃣ Qué funcionó bien',
                  '2️⃣ Qué faltó',
                  '3️⃣ Qué debemos preparar mejor',
                  '4️⃣ Nivel de cansancio de Zoe',
                ].map(item => (
                  <div key={item} className="task-item" style={{ padding: '8px 12px', background: 'var(--cream-50)', borderRadius: '8px', border: 'none' }}>
                    <div className="task-checkbox" />
                    <div className="task-title" style={{ fontSize: '0.875rem' }}>{item}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '16px', padding: '12px 16px', background: 'var(--info-light)', borderRadius: '8px', fontSize: '0.8125rem', color: 'var(--info)' }}>
                💡 <strong>Regla clave:</strong> El objetivo no es que Zoe cumpla todos los actos. Es que disfrute, llegue descansada, se sienta segura y viva la experiencia con ilusión.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
