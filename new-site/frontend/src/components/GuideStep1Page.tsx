'use client';

import { useContent } from '../contexts/ContentContext';

export default function GuideStep1Page() {
  const { changeContent } = useContent();

  return (
    <>
      <h1 id="header-guide-orange">Brewtendo Installation Guide</h1>
      <div className="style-center-container">
        <div className="style-center-div-top">
          <h4>Setting Up the Proxy</h4>
        </div>
        <div className="style-center-div-nocolor" style={{ textAlign: 'left' }}>
          <details>
            <summary>
              <strong>If You DON&apos;T Have Nimbus/Pretendo Installed</strong>
            </summary>
            <p>
              Copy the IPS file labeled <code>0004013000002F02.ips</code> to{' '}
              <code>SD:/luma/sysmodules/</code> on your SD or microSD card.
            </p>
            <p>
              Shut down your console and hold <strong>Select</strong> on startup. When Luma3DS
              pops up, make sure you have these options enabled:
            </p>
            <div style={{ textAlign: 'center', margin: '12px 0' }}>
              <img
                src="/images/selectmenuimg.png"
                style={{ width: '65%', maxWidth: '400px', borderRadius: '12px' }}
                alt="Luma3DS Select Menu configuration"
              />
            </div>
            <p>When successful, you can proceed to the next steps!</p>
          </details>

          <details>
            <summary>
              <strong>If You Have Pretendo Installed</strong>
            </summary>
            <p>
              Go to the Nimbus app and select <strong>Nintendo Network</strong>.
              <br />
              <span style={{ fontSize: '0.85rem', color: '#888' }}>
                It&apos;s more stable this way, but you can use Pretendo.
              </span>
            </p>
            <p>
              Now go into <strong>System Settings</strong> → <strong>Internet Settings</strong> →{' '}
              <strong>Connection Settings</strong> → your Wi-Fi connection →{' '}
              <strong>Change Settings</strong> → tap the arrow → <strong>Proxy Settings</strong> →{' '}
              select <strong>Yes</strong> → <strong>Detailed Setup</strong>.
            </p>
            <p>
              Set the <strong>Proxy Server</strong> to: <code>69.202.205.93</code>
              <br />
              Set the <strong>Port</strong> to: <code>3000</code>
            </p>
            <p>
              Go back to your Wi-Fi connection settings, tap <strong>Test Connection</strong>,
              and wait until you get the error <code>003-####</code>.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>
              Proxy address is subject to change.
            </p>
          </details>

          <hr style={{ width: '90%', marginTop: '20px' }} />

          <div style={{ textAlign: 'center', width: '100%' }}>
            <h3><strong>About Error Code 003</strong></h3>
            <p>
              This code means you <strong>have not been accepted yet</strong> into Brewtendo
              Network. You need to wait for Bunny (the proxy owner) to manually accept you.
              Complaining about the error code in the{' '}
              <a href="https://discord.gg/brewtendo" rel="noopener noreferrer" target="_blank">
                Discord
              </a>{' '}
              will get you nowhere.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#888' }}>
              <strong>Note:</strong> Bunny is in the EST timezone (UTC -5:00). He is a person —
              please be patient.
            </p>
            <p>
              For more updates, check the official{' '}
              <a href="https://discord.gg/brewtendo" rel="noopener noreferrer" target="_blank">
                Brewtendo Discord
              </a>
              .
            </p>
            <p><strong>And you are now connected to Brewtendo Network!</strong></p>
          </div>

          <hr style={{ width: '90%' }} />
          <div style={{ textAlign: 'center', width: '100%' }}>
            <div
              className="pill-button"
              style={{ marginBottom: '16px', marginTop: '16px', display: 'inline-block' }}
              onClick={() => changeContent('guide_2')}
            >
              Setting Up the eShop
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
