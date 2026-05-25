import { EVENTS, getPersonById } from '@/lib/seed-data';
import { EVENT_TYPE_LABELS, EVENT_TYPE_ICONS, EVENT_TYPE_COLORS, MONTHS_ES, DAYS_SHORT_ES } from '@/lib/constants';

export default function CalendarioPage() {
  // Group events by month
  const eventsByMonth: Record<string, typeof EVENTS> = {};
  EVENTS.forEach(event => {
    const d = new Date(event.date + 'T00:00:00');
    const key = `${d.getFullYear()}-${String(d.getMonth()).padStart(2, '0')}`;
    if (!eventsByMonth[key]) eventsByMonth[key] = [];
    eventsByMonth[key].push(event);
  });

  const sortedMonths = Object.keys(eventsByMonth).sort();

  // Generate March 2026 calendar grid
  const march2026Start = new Date(2026, 2, 1); // March 1, 2026 is a Sunday
  const startDay = (march2026Start.getDay() + 6) % 7; // Monday-based
  const daysInMarch = 31;

  const marchEvents = EVENTS.filter(e => e.date.startsWith('2026-03'));
  const eventsByDay: Record<number, typeof EVENTS> = {};
  marchEvents.forEach(e => {
    const day = parseInt(e.date.split('-')[2]);
    if (!eventsByDay[day]) eventsByDay[day] = [];
    eventsByDay[day].push(e);
  });

  return (
    <>
      <header className="page-header">
        <div className="page-header-left">
          <div className="page-header-breadcrumb">
            <span>Magdalena OS</span><span>›</span><span>Calendario</span>
          </div>
          <h1 className="page-header-title">📅 Calendario Anual</h1>
        </div>
        <div className="page-header-actions">
          <span className="badge badge-gold badge-dot">Temporada 2025–2026</span>
        </div>
      </header>

      <div className="page-container">
        {/* March 2026 Calendar Grid — Semana Grande */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">🔥 Marzo 2026 — Semana Grande</h2>
          </div>
          <div className="card">
            <div className="card-body" style={{ padding: 0 }}>
              <div className="calendar-grid">
                {DAYS_SHORT_ES.map(day => (
                  <div key={day} className="calendar-header-cell">{day}</div>
                ))}
                {/* Empty cells before first day */}
                {Array.from({ length: startDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="calendar-cell other-month" />
                ))}
                {/* Days of March */}
                {Array.from({ length: daysInMarch }).map((_, i) => {
                  const day = i + 1;
                  const dayEvents = eventsByDay[day] || [];
                  const isToday = day === 12; // Current date
                  return (
                    <div key={day} className={`calendar-cell ${isToday ? 'today' : ''}`}>
                      <div className="calendar-day-number">
                        {isToday ? <span>{day}</span> : day}
                      </div>
                      {dayEvents.slice(0, 3).map(e => (
                        <div
                          key={e.id}
                          className="calendar-event-dot"
                          style={{ background: EVENT_TYPE_COLORS[e.event_type] || '#546e7a' }}
                          title={e.name}
                        >
                          {EVENT_TYPE_ICONS[e.event_type]} {e.name.length > 15 ? e.name.substring(0, 15) + '…' : e.name}
                        </div>
                      ))}
                      {dayEvents.length > 3 && (
                        <div style={{ fontSize: '0.625rem', color: 'var(--slate-500)', padding: '0 4px' }}>
                          +{dayEvents.length - 3} más
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline view by month */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">📋 Cronología Completa</h2>
          </div>

          {sortedMonths.map(monthKey => {
            const events = eventsByMonth[monthKey];
            const [year, month] = monthKey.split('-');
            const monthName = MONTHS_ES[parseInt(month)];

            return (
              <div key={monthKey} style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--navy-700)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ background: 'var(--gold-100)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem', color: 'var(--gold-700)' }}>
                    {monthName} {year}
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--slate-400)', fontWeight: 400 }}>
                    {events.length} evento{events.length !== 1 ? 's' : ''}
                  </span>
                </h3>
                <div className="card">
                  <div className="event-list">
                    {events.sort((a, b) => a.date.localeCompare(b.date) || a.time_start.localeCompare(b.time_start)).map(event => {
                      const d = new Date(event.date + 'T00:00:00');
                      const day = d.getDate();
                      const weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
                      const weekday = weekdays[d.getDay()];

                      return (
                        <a href={`/eventos/${event.id}`} key={event.id} className="event-item" style={{ textDecoration: 'none' }}>
                          <div className="event-date-col">
                            <div className="event-date-day">{day}</div>
                            <div className="event-date-weekday">{weekday}</div>
                          </div>
                          <div className="event-info">
                            <div className="event-name">
                              {EVENT_TYPE_ICONS[event.event_type]} {event.name}
                            </div>
                            <div className="event-meta">
                              <span className="event-meta-item">🕐 {event.time_start}</span>
                              <span className="event-meta-item">📍 {event.location}</span>
                              {event.participant_ids.length > 0 && (
                                <span className="event-meta-item">👥 {event.participant_ids.length} participantes</span>
                              )}
                            </div>
                            <div style={{ display: 'flex', gap: '6px', marginTop: '4px', flexWrap: 'wrap' }}>
                              <span className="badge" style={{ background: EVENT_TYPE_COLORS[event.event_type] + '18', color: EVENT_TYPE_COLORS[event.event_type] }}>
                                {EVENT_TYPE_LABELS[event.event_type]}
                              </span>
                              {event.noise_level === 'alto' && <span className="badge badge-warning">🔊 Ruido alto</span>}
                              {event.fatigue_risk === 'alto' && <span className="badge badge-danger">⚡ Cansancio alto</span>}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
