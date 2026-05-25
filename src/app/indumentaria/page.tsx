import { GARMENTS, PERSONS, getPersonById } from '@/lib/seed-data';
import { GARMENT_CATEGORY_LABELS, GARMENT_STATUS_LABELS, GARMENT_STATUS_COLORS, ROLE_LABELS } from '@/lib/constants';

const GARMENT_ICONS: Record<string, string> = {
  vestido: '👗', jubon: '🎽', manteleta: '🧣', delantal: '🧶', aderezo: '💎',
  peineta: '👑', joyeria: '💍', medias: '🧦', zapatos: '👠', ropa_interior: '🩲',
  manton: '🧣', capa: '🧥', complemento: '🎀', peinado: '💇', banda: '🎗️',
};

export default function IndumentariaPage() {
  // Group by person
  const personIds = [...new Set(GARMENTS.map(g => g.person_id))];
  const totalReady = GARMENTS.filter(g => g.status === 'disponible').length;
  const totalPending = GARMENTS.filter(g => g.status !== 'disponible').length;

  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Indumentaria</span>
          </div>
          <h1 className="page-header-title">👗 Gestión de Indumentaria</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-success">{totalReady} listas</span>
          <span className="badge badge-warning">{totalPending} pendientes</span>
          <button className="btn btn-primary">+ Añadir Prenda</button>
        </div>
      </header>

      <div className="page-container">
        {/* Summary */}
        <div className="stats-grid section">
          <div className="stat-card success">
            <div className="stat-card-icon">✅</div>
            <div className="stat-card-value">{totalReady}</div>
            <div className="stat-card-label">Prendas disponibles</div>
          </div>
          <div className="stat-card warning">
            <div className="stat-card-icon">🛒</div>
            <div className="stat-card-value">{GARMENTS.filter(g => g.status === 'pendiente_compra').length}</div>
            <div className="stat-card-label">Pendientes de compra</div>
          </div>
          <div className="stat-card info">
            <div className="stat-card-icon">🧵</div>
            <div className="stat-card-value">{GARMENTS.filter(g => g.status === 'en_arreglo').length}</div>
            <div className="stat-card-label">En arreglo</div>
          </div>
          <div className="stat-card gold">
            <div className="stat-card-icon">👗</div>
            <div className="stat-card-value">{GARMENTS.length}</div>
            <div className="stat-card-label">Total prendas</div>
          </div>
        </div>

        {/* By person */}
        {personIds.map(personId => {
          const person = getPersonById(personId);
          if (!person) return null;
          const personGarments = GARMENTS.filter(g => g.person_id === personId);

          return (
            <div key={personId} className="section">
              <div className="section-header">
                <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: person.role === 'madrina_infantil' ? 'linear-gradient(135deg, var(--gold-400), var(--gold-600))' : 'linear-gradient(135deg, var(--navy-400), var(--navy-600))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '0.875rem', fontWeight: 600
                  }}>
                    {person.name.charAt(0)}
                  </span>
                  {person.name}
                  <span className="badge badge-slate">{ROLE_LABELS[person.role]}</span>
                </h2>
                <span style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>
                  {personGarments.filter(g => g.status === 'disponible').length}/{personGarments.length} listas
                </span>
              </div>

              {/* Look validation */}
              {(() => {
                const ready = personGarments.filter(g => g.status === 'disponible').length;
                const total = personGarments.length;
                const pct = Math.round((ready / total) * 100);
                const isComplete = pct === 100;
                return (
                  <div style={{
                    padding: '12px 16px', marginBottom: '16px',
                    background: isComplete ? 'var(--success-light)' : 'var(--warning-light)',
                    borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{isComplete ? '✅' : '⚠️'}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', color: isComplete ? 'var(--success)' : '#e65100' }}>
                        {isComplete ? 'Look completo' : `Faltan ${total - ready} prenda${total - ready !== 1 ? 's' : ''}`}
                      </div>
                      <div className="progress-bar" style={{ marginTop: '6px', height: '6px' }}>
                        <div className={`progress-bar-fill ${isComplete ? 'success' : 'gold'}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '0.875rem', color: isComplete ? 'var(--success)' : '#e65100' }}>{pct}%</span>
                  </div>
                );
              })()}

              <div className="garment-grid">
                {personGarments.map(garment => (
                  <div key={garment.id} className="garment-card">
                    <div className="garment-icon">{GARMENT_ICONS[garment.category] || '👔'}</div>
                    <div className="garment-name">{garment.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', marginBottom: '8px' }}>
                      {GARMENT_CATEGORY_LABELS[garment.category]}
                    </div>
                    <span className="badge" style={{
                      background: GARMENT_STATUS_COLORS[garment.status] + '22',
                      color: GARMENT_STATUS_COLORS[garment.status]
                    }}>
                      {GARMENT_STATUS_LABELS[garment.status]}
                    </span>
                    {garment.cost && (
                      <div style={{ marginTop: '8px', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--navy-800)' }}>
                        {garment.cost.toLocaleString('es-ES')}€
                      </div>
                    )}
                    {garment.notes && (
                      <div style={{ marginTop: '6px', fontSize: '0.75rem', color: 'var(--slate-500)', lineHeight: 1.4 }}>
                        {garment.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
