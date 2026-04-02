'use client';

import { useContent } from '../contexts/ContentContext';

export default function HomePage() {
  const { changeContent, swapStyleSheet } = useContent();

  return (
    <div>
      <div className="navi-bar">
        <div id="center-navi">
          <h4 onClick={() => { changeContent('home'); swapStyleSheet('/css/main.css'); }}>Brewtendo</h4>
          <h4 onClick={() => { changeContent('guide'); swapStyleSheet('/css/guide.css'); }}>Install Guide</h4>
          <h4 onClick={() => { changeContent('badgearcade'); swapStyleSheet('/css/guide.css'); }}>Badge Arcade</h4>
          <h4 onClick={() => { changeContent('other'); swapStyleSheet('/css/main.css'); }} style={{ border: 'none' }}>Other Info</h4>
        </div>
      </div>

      <div id="center-all">
        <div className="style-banner">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="https://raw.githubusercontent.com/BrewtendoNetwork/brewtendonetwork.github.io/main/assets/3DS_Icon_Brew-1.png" width="100" alt="Brewtendo" />
              <h1 id="logo">Brewtendo</h1>
            </div>
            <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: '#5e5c50' }}>The only official website for Brewtendo Network.</p>
          </div>
        </div>

        <div id="center-div">
          <div className="column">
            <div className="style-center-container">
              <div className="style-center-div-top">
                <h4>Learn how to install Brewtendo on your 3DS!</h4>
              </div>
              <div className="style-center-div-nocolor" id="float">
                <div className="pill-button" onClick={() => { changeContent('guide'); swapStyleSheet('/css/guide.css'); }}>
                  Installation guide
                </div>
              </div>
            </div>
            <div className="style-center-container">
              <div className="style-center-div-top">
                <h4 style={{ fontWeight: 'normal' }}>Other Information:</h4>
                <h4 style={{ fontSize: '14px', marginTop: '0px', bottom: '0px' }}>Learn how to install Badge Arcade on your 3DS</h4>
              </div>
              <div className="style-center-div-nocolor" id="float">
                <div className="pill-button" onClick={() => { changeContent('badgearcade'); swapStyleSheet('/css/guide.css'); }}>
                  Badge Arcade guide
                </div>
                <hr style={{ width: '100%', marginTop: '25px' }} />
                <h3>To start, install Badge Arcade from the eShop or hShop and update the game.</h3>
                <h4 style={{ fontSize: '14px', marginTop: '25px' }}>Wanna check out the progress on the site?<br />this should change as the site progresses until the eventual release later in (april)?</h4>
                <div className="pill-button" style={{ marginBottom: '15px' }} onClick={() => { changeContent('progress'); swapStyleSheet('/css/guide.css'); }}>
                  Progress
                </div>
              </div>
            </div>
          </div>

          <div className="style-center-div" id="float" style={{ marginTop: '-30px' }}>
            Brewtendo Description:
            <hr style={{ width: '100%' }} />
            Brewtendo is a Nintendo Network revival for the 3DS, it's not really trying to be a potential Pretendo rival, however. Instead it revives the things that they wouldn't add such as the eShop, Badge Arcade, Theme Shop, Spotpass, and Nintendo Video.
            <br />(devs lmk if i missed anything or you want me to add / change to this.)
            <img width="70" src="https://raw.githubusercontent.com/BrewtendoNetwork/brewtendonetwork.github.io/main/assets/eShop.png" alt="" />
            If you live under a rock and want insight to why the eShop <br />shut down in 2023 then look{' '}
            <span style={{ cursor: 'pointer' }} onClick={() => window.open('https://en-americas-support.nintendo.com/app/answers/detail/a_id/57847/~/wii-u-%26-nintendo-3ds-eshop-discontinuation-q%26a', '_blank', 'noopener,noreferrer')}>
              <u>here</u>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
