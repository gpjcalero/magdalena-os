import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Magdalena OS — Gaiata 1 Brancal de la Ciutat',
  description: 'Sistema de planificación integral para las Fiestas de la Magdalena de Castellón. Gestión operativa, protocolaria, logística y estética de la Gaiata 1.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="app-layout">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">🔥</div>
          <div>
            <div className="sidebar-logo-text">Magdalena OS</div>
            <div className="sidebar-logo-subtitle">Centro de Control Festero</div>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-label">General</div>
        <NavLink href="/" icon="📊" label="Dashboard" />
        <NavLink href="/calendario" icon="📅" label="Calendario" />
        <NavLink href="/eventos" icon="🎪" label="Eventos" badge={13} />

        <div className="sidebar-section-label">Personas</div>
        <NavLink href="/personas" icon="👥" label="Personas" />
        <NavLink href="/indumentaria" icon="👗" label="Indumentaria" />

        <div className="sidebar-section-label">Operaciones</div>
        <NavLink href="/tareas" icon="✅" label="Tareas" badge={8} />
        <NavLink href="/presupuesto" icon="💰" label="Presupuesto" />
        <NavLink href="/proveedores" icon="🏪" label="Proveedores" />

        <div className="sidebar-section-label">Conocimiento</div>
        <NavLink href="/documentos" icon="📁" label="Documentos" />
        <NavLink href="/protocolo" icon="📜" label="Protocolo" />

        <div className="sidebar-section-label">Control</div>
        <NavLink href="/excelencia" icon="🏆" label="Excelencia" />
        <NavLink href="/incidencias" icon="⚠️" label="Incidencias" />
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-gaiata-badge">
          <div className="sidebar-gaiata-number">1</div>
          <div className="sidebar-gaiata-info">
            <div className="sidebar-gaiata-name">Brancal de la Ciutat</div>
            <div style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)' }}>Magdalena 2026</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavLink({ href, icon, label, badge }: { href: string; icon: string; label: string; badge?: number }) {
  return (
    <a href={href} className="nav-item">
      <span className="nav-item-icon">{icon}</span>
      <span>{label}</span>
      {badge && <span className="nav-item-badge">{badge}</span>}
    </a>
  );
}
