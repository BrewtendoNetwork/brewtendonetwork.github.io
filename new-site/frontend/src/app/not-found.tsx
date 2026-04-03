'use client';

export default function NotFound() {
  return (
    <div>
      <div className="navi-bar">
        <div id="center-navi">
          <h4 onClick={() => window.location.reload()} style={{ border: 'none', cursor: 'pointer' }}>Brewtendo</h4>
        </div>
      </div>
      
      <div id="content">
        <h1 id="logo">Brewtendo</h1>
        <p>404</p>
        <h3>this page doesnt exist</h3>
      </div>
    </div>
  );
}
