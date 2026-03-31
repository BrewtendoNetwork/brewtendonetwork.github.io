'use client';

export default function ProgressPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h1 id="header-guide-blue">Progress on Website</h1>
      <section style={{ width: '100%', maxWidth: '600px', padding: '0 16px' }}>
        <div className="progressbar" style={{ '--maxvalue': 7, '--value': 4 } as React.CSSProperties}>
          <div id="value"></div>
        </div>
      </section>
      <ul style={{
        listStyleType: 'none',
        fontSize: '22px',
        color: '#696969',
        fontFamily: "'MarvelouzTubeFont3', sans-serif",
        lineHeight: '48px',
        padding: 0,
      }}>
        <li>Proper Home Page</li>
        <li>Make &quot;Other Info&quot; Page</li>
        <li>Give Out Deserved Credits</li>
        <li>Support Page</li>
      </ul>
      <p style={{ color: '#888', fontSize: '14px' }}>
        Items will be removed as they are completed.
      </p>
    </div>
  );
}
