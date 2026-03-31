'use client';

import { useContent } from '../contexts/ContentContext';

export default function HomePage() {
  const { changeContent } = useContent();

  return (
    <div id="center-all">
      <div className="style-banner">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="/images/3DS_Icon_Brew-1.png" width="100" height="100" alt="Brewtendo logo" />
            <h1 id="logo">Brewtendo</h1>
          </div>
          <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: '#5e5c50' }}>
            The only official website for Brewtendo Network.
          </p>
        </div>
      </div>

      <div id="center-div">
        <div className="column">
          <div className="style-center-container">
            <div className="style-center-div-top">
              <h4>Learn How to Install Brewtendo on Your 3DS!</h4>
            </div>
            <div className="style-center-div-nocolor">
              <div className="pill-button" onClick={() => changeContent('guide')}>
                Installation Guide
              </div>
            </div>
          </div>

          <div className="style-center-container">
            <div className="style-center-div-top">
              <h4>Other Information</h4>
              <h4 style={{ fontSize: '13px', marginTop: '4px', fontWeight: 'normal' }}>
                Learn how to install Badge Arcade on your 3DS
              </h4>
            </div>
            <div className="style-center-div-nocolor">
              <div className="pill-button" onClick={() => changeContent('badgearcade')}>
                Badge Arcade Guide
              </div>
              <hr />
              <p><strong>To start, install Badge Arcade from the eShop or hShop and update the game.</strong></p>
              <p style={{ fontSize: '14px', marginTop: '8px', color: '#888' }}>
                Want to check out the progress on the site?
              </p>
              <div className="pill-button" style={{ marginBottom: '8px' }} onClick={() => changeContent('progress')}>
                Progress
              </div>
            </div>
          </div>
        </div>

        <div className="style-center-div">
          <strong style={{ fontSize: '1.1em' }}>Brewtendo Description</strong>
          <hr />
          <p>
            Brewtendo is a Nintendo Network revival for the 3DS. It&apos;s not trying to be a Pretendo
            rival — instead, it revives the things they wouldn&apos;t add, such as the{' '}
            <strong>eShop</strong>, <strong>Badge Arcade</strong>, <strong>Theme Shop</strong>,{' '}
            <strong>SpotPass</strong>, and <strong>Nintendo Video</strong>.
          </p>
          <img width="70" height="70" src="/images/eShop.png" alt="eShop icon" style={{ margin: '12px 0', objectFit: 'contain' }} />
          <p>
            Want to know why the eShop shut down in 2023?{' '}
            <a
              href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/57847/~/wii-u-%26-nintendo-3ds-eshop-discontinuation-q%26a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Learn more here.</strong>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
