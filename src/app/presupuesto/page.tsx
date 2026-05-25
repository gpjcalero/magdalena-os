import { BUDGET_ITEMS, getEventById, SUPPLIERS } from '@/lib/seed-data';
import { BUDGET_CATEGORY_LABELS, BUDGET_CATEGORY_ICONS, PAYMENT_STATUS_LABELS, PAYMENT_STATUS_COLORS } from '@/lib/constants';

export default function PresupuestoPage() {
  const total = BUDGET_ITEMS.reduce((s, b) => s + b.estimated_amount, 0);
  const spent = BUDGET_ITEMS.reduce((s, b) => s + (b.real_amount || 0), 0);
  const pending = BUDGET_ITEMS.filter(b => b.payment_status === 'pendiente').reduce((s, b) => s + b.estimated_amount, 0);
  const paid = BUDGET_ITEMS.filter(b => b.payment_status === 'pagado').reduce((s, b) => s + (b.real_amount || b.estimated_amount), 0);

  // Group by category
  const categories = [...new Set(BUDGET_ITEMS.map(b => b.category))];
  const byCategory = categories.map(cat => ({
    category: cat,
    items: BUDGET_ITEMS.filter(b => b.category === cat),
    total: BUDGET_ITEMS.filter(b => b.category === cat).reduce((s, b) => s + b.estimated_amount, 0),
  })).sort((a, b) => b.total - a.total);

  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Presupuesto</span>
          </div>
          <h1 className="page-header-title">💰 Control Presupuestario</h1>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-primary">+ Añadir Gasto</button>
        </div>
      </header>

      <div className="page-container">
        {/* Summary cards */}
        <div className="stats-grid section">
          <div className="stat-card gold">
            <div className="stat-card-icon">💰</div>
            <div className="stat-card-value">{total.toLocaleString('es-ES')}€</div>
            <div className="stat-card-label">Presupuesto Total Estimado</div>
          </div>
          <div className="stat-card success">
            <div className="stat-card-icon">✅</div>
            <div className="stat-card-value">{paid.toLocaleString('es-ES')}€</div>
            <div className="stat-card-label">Pagado</div>
          </div>
          <div className="stat-card warning">
            <div className="stat-card-icon">⏳</div>
            <div className="stat-card-value">{pending.toLocaleString('es-ES')}€</div>
            <div className="stat-card-label">Pendiente de Pago</div>
          </div>
          <div className="stat-card navy">
            <div className="stat-card-icon">📊</div>
            <div className="stat-card-value">{Math.round((spent / total) * 100)}%</div>
            <div className="stat-card-label">Ejecutado</div>
          </div>
        </div>

        {/* Overall progress */}
        <div className="card section">
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.875rem' }}>
              <span style={{ fontWeight: 600, color: 'var(--navy-800)' }}>Ejecución presupuestaria</span>
              <span style={{ fontWeight: 600, color: 'var(--gold-600)' }}>{spent.toLocaleString('es-ES')}€ / {total.toLocaleString('es-ES')}€</span>
            </div>
            <div className="progress-bar" style={{ height: '16px' }}>
              <div className="progress-bar-fill gold" style={{ width: `${Math.round((spent / total) * 100)}%` }} />
            </div>
          </div>
        </div>

        {/* By category bars */}
        <div className="card section">
          <div className="card-header">
            <h3 className="card-title">📊 Desglose por Categoría</h3>
          </div>
          <div className="card-body">
            {byCategory.map(({ category, total: catTotal }) => {
              const pct = Math.round((catTotal / total) * 100);
              return (
                <div key={category} className="budget-bar">
                  <div className="budget-bar-label">
                    {BUDGET_CATEGORY_ICONS[category]} {BUDGET_CATEGORY_LABELS[category]}
                  </div>
                  <div className="budget-bar-track">
                    <div className="budget-bar-fill" style={{
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, var(--gold-400), var(--gold-600))`
                    }}>
                      {pct > 10 ? `${pct}%` : ''}
                    </div>
                  </div>
                  <div className="budget-bar-amount">{catTotal.toLocaleString('es-ES')}€</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All items table */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">📋 Todas las Partidas</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  <th>Estimado</th>
                  <th>Real</th>
                  <th>Estado</th>
                  <th>Evento</th>
                </tr>
              </thead>
              <tbody>
                {BUDGET_ITEMS.map(item => {
                  const event = item.event_id ? getEventById(item.event_id) : null;
                  return (
                    <tr key={item.id}>
                      <td style={{ fontWeight: 500 }}>{item.description}</td>
                      <td>
                        <span className="badge badge-slate">
                          {BUDGET_CATEGORY_ICONS[item.category]} {BUDGET_CATEGORY_LABELS[item.category]}
                        </span>
                      </td>
                      <td style={{ fontWeight: 600 }}>{item.estimated_amount.toLocaleString('es-ES')}€</td>
                      <td>{item.real_amount ? `${item.real_amount.toLocaleString('es-ES')}€` : '—'}</td>
                      <td>
                        <span className="badge" style={{
                          background: PAYMENT_STATUS_COLORS[item.payment_status] + '22',
                          color: PAYMENT_STATUS_COLORS[item.payment_status]
                        }}>
                          {PAYMENT_STATUS_LABELS[item.payment_status]}
                        </span>
                      </td>
                      <td style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>
                        {event ? event.name.substring(0, 30) : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
