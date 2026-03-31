'use client';

import { useContent } from '../contexts/ContentContext';

export default function GuidePage() {
  const { changeContent } = useContent();

  return (
    <>
      <h1 id="header-guide-orange">Brewtendo Installation Guide</h1>
      <div className="style-center-container" style={{ color: 'black' }}>
        <div className="style-center-div-top">
          <h4>How to Set Up Brewtendo Network</h4>
        </div>
        <div className="style-center-div-nocolor">
          <h2 style={{ margin: '8px 0 4px' }}>What You Will Need</h2>
          <hr />
          <ul style={{ textAlign: 'left', lineHeight: '2', paddingLeft: '20px' }}>
            <li>
              <strong>A modded 3DS</strong> with Luma3DS and Universal Downloader installed.
              <br />
              <a href="https://3ds.hacks.guide/" rel="noopener noreferrer" target="_blank">
                Click here for more info.
              </a>
            </li>
            <li><strong>A stable Wi-Fi connection.</strong></li>
            <li>
              <strong>A way to transfer files</strong> to the SD or microSD card.{' '}
              <span style={{ fontSize: '0.85rem', color: '#888' }}>(may not be needed)</span>
            </li>
            <li>
              <strong>Nimbus/Pretendo installed</strong> (optional).
              <br />
              <a href="https://pretendo.network/docs/install/3ds" rel="noopener noreferrer" target="_blank">
                Click here for more info.
              </a>
            </li>
          </ul>
          <hr />
          <div
            className="pill-button"
            style={{ marginTop: '16px', marginBottom: '16px' }}
            onClick={() => changeContent('guide_1')}
          >
            Setting Up the Proxy
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
