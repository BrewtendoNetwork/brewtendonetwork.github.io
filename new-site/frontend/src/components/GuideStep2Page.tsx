'use client';

import { useContent } from '../contexts/ContentContext';

export default function GuideStep2Page() {
  const { changeContent } = useContent();

  return (
    <>
      <h1 id="header-guide-orange">Brewtendo Installation Guide</h1>
      <div className="style-center-container">
        <div className="style-center-div-top">
          <h4>Disabling Brewtendo Network</h4>
        </div>
        <div className="style-center-div-nocolor" style={{ textAlign: 'left' }}>
          <p>
            Open <strong>System Settings</strong> → <strong>Internet Settings</strong> →{' '}
            <strong>Connection Settings</strong> → your Wi-Fi connection →{' '}
            <strong>Change Settings</strong> → tap the arrow → <strong>Proxy Settings</strong> →{' '}
            select <strong>No</strong> to disable it.
          </p>
          <p>
            Your settings will be remembered — when you re-enable the proxy by selecting{' '}
            <strong>Yes</strong>, the IP address and port should stay the same.
          </p>
          <hr style={{ width: '90%' }} />
          <div style={{ textAlign: 'center', width: '100%' }}>
            <div
              className="pill-button"
              style={{ marginBottom: '16px', marginTop: '16px', display: 'inline-block' }}
              onClick={() => changeContent('badgearcade')}
            >
              Setting Up Badge Arcade
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '24px', marginBottom: '40px' }}>
        <div className="pill-button" onClick={() => changeContent('home')}>
          Home Page
        </div>
      </div>
    </>
  );
}
