import { DOCUMENTS } from '@/lib/seed-data';
import { DOCUMENT_CATEGORY_LABELS } from '@/lib/constants';

const FILE_TYPE_ICONS: Record<string, string> = {
  pdf: '📕', word: '📘', excel: '📗', image: '🖼️', text: '📄', markdown: '📝', other: '📎',
};

export default function DocumentosPage() {
  const reviewed = DOCUMENTS.filter(d => d.reviewed).length;
  const pending = DOCUMENTS.filter(d => !d.reviewed).length;

  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Documentos</span>
          </div>
          <h1 className="page-header-title">📁 Biblioteca Documental</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-success">{reviewed} revisados</span>
          <span className="badge badge-warning">{pending} por revisar</span>
          <button className="btn btn-primary">📥 Importar desde carpeta</button>
        </div>
      </header>

      <div className="page-container">
        {/* Import section */}
        <div className="card section" style={{ border: '2px dashed var(--gold-400)', background: 'var(--gold-50)' }}>
          <div className="card-body" style={{ textAlign: 'center', padding: '32px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>📂</div>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--navy-800)', marginBottom: '8px' }}>Importar Documentos</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--slate-500)', maxWidth: '500px', margin: '0 auto 16px' }}>
              Escanea la carpeta <code style={{ background: 'var(--slate-100)', padding: '2px 8px', borderRadius: '4px' }}>info/</code> para detectar nuevos documentos, extraer texto y vincularlos a eventos, personas o proveedores.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button className="btn btn-primary btn-lg">🔍 Escanear Carpeta</button>
              <button className="btn btn-secondary btn-lg">📋 Ver Log de Importación</button>
            </div>
          </div>
        </div>

        {/* Document list */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">📋 Documentos Indexados</h3>
            <span style={{ fontSize: '0.8125rem', color: 'var(--slate-500)' }}>{DOCUMENTS.length} documentos</span>
          </div>
          <div>
            {DOCUMENTS.map(doc => (
              <div key={doc.id} className="document-item">
                <div className={`document-icon ${doc.file_type}`}>
                  {FILE_TYPE_ICONS[doc.file_type] || '📎'}
                </div>
                <div className="document-info" style={{ flex: 1 }}>
                  <div className="document-title">{doc.title}</div>
                  <div className="document-description">{doc.description}</div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                    <span className="badge badge-slate">
                      {DOCUMENT_CATEGORY_LABELS[doc.category]}
                    </span>
                    <span className="badge badge-slate" style={{ fontFamily: 'monospace', fontSize: '0.6875rem' }}>
                      {doc.file_path}
                    </span>
                    <span className={`badge ${doc.reviewed ? 'badge-success' : 'badge-warning'}`}>
                      {doc.reviewed ? '✅ Revisado' : '⏳ Pendiente revisión'}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn btn-sm btn-secondary">👁️ Ver</button>
                  <button className="btn btn-sm btn-secondary">🔗 Vincular</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
