import { SUPPLIERS } from '@/lib/seed-data';
import { SUPPLIER_CATEGORY_LABELS } from '@/lib/constants';

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  activo: { label: 'Activo', color: 'var(--success)', bg: 'var(--success-light)' },
  completado: { label: 'Completado', color: 'var(--info)', bg: 'var(--info-light)' },
  descartado: { label: 'Descartado', color: 'var(--slate-500)', bg: 'var(--slate-100)' },
};

export default function ProveedoresPage() {
  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Proveedores</span>
          </div>
          <h1 className="page-header-title">🏪 Proveedores</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-navy">{SUPPLIERS.length} proveedores</span>
          <button className="btn btn-primary">+ Añadir Proveedor</button>
        </div>
      </header>

      <div className="page-container">
        <div className="person-grid">
          {SUPPLIERS.map(supplier => {
            const sc = STATUS_CONFIG[supplier.status];
            return (
              <div key={supplier.id} className="person-card">
                <div className="person-card-header">
                  <div className="person-avatar navy" style={{ fontSize: '1rem' }}>
                    {supplier.name.charAt(0)}
                  </div>
                  <div>
                    <div className="person-name">{supplier.name}</div>
                    <div className="person-role">{SUPPLIER_CATEGORY_LABELS[supplier.category]}</div>
                  </div>
                </div>

                {supplier.service_description && (
                  <div className="person-description">{supplier.service_description}</div>
                )}

                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  <span className="badge" style={{ background: sc.bg, color: sc.color }}>{sc.label}</span>
                </div>

                {supplier.rating && (
                  <div style={{ fontSize: '0.875rem', marginBottom: '8px' }}>
                    {'⭐'.repeat(supplier.rating)}{'☆'.repeat(5 - supplier.rating)}
                  </div>
                )}

                {supplier.phone && (
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '4px' }}>
                    📞 {supplier.phone}
                  </div>
                )}
                {supplier.email && (
                  <div style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '4px' }}>
                    ✉️ {supplier.email}
                  </div>
                )}
                {supplier.notes && (
                  <div style={{ marginTop: '8px', padding: '8px 12px', background: 'var(--cream-100)', borderRadius: '8px', fontSize: '0.75rem', color: 'var(--slate-600)', lineHeight: 1.4 }}>
                    💡 {supplier.notes}
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
