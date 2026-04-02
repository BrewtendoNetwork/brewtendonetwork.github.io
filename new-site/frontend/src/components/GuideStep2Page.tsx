'use client';

import { useContent } from '../contexts/ContentContext';

export default function GuideStep2Page() {
  const { changeContent, swapStyleSheet } = useContent();

  return (
    <div>
      <div className="navi-bar">
        <div id="center-navi">
          <h4 onClick={() => { changeContent('home'); swapStyleSheet('/css/main.css'); }}>Brewtendo</h4>
          <h4 onClick={() => { changeContent('guide'); swapStyleSheet('/css/guide.css'); }}>Install Guide</h4>
          <h4 onClick={() => { changeContent('badgearcade'); swapStyleSheet('/css/guide.css'); }}>Badge Arcade</h4>
          <h4 onClick={() => { changeContent('other'); swapStyleSheet('/css/main.css'); }} style={{border: 'none'}}>Other Info</h4>
        </div>
      </div>
      <h1 id="header-guide-orange">Brewtendo installation guide:</h1>
      <div className="style-center-container guide-txt">
        <div className="style-center-div-top">
          <h4>Disabling Brewtendo Network.</h4>
        </div>
        <div className="style-center-div-nocolor" id="float">
          <h3 className="guide-txt">Open System Settings, when it loads, go into Internet Settings, Connection Settings, your WIFI connection, Change Settings, tap on the arrow, Proxy Settings, then select No to disable it, it will remember your settings though, so when you re-enable it by hitting Yes The IP address and a Port should stay the same.</h3>
          <hr style={{width:'90%'}} />
          <div className="pill-button" style={{marginBottom:'15px',marginTop:'15px'}} onClick={() => { changeContent('badgearcade'); swapStyleSheet('/css/guide.css'); }}>
            Setting up Badge Arcade.
          </div>
        </div>
      </div>
      <h3></h3>
      <hr className="hide" />
      <hr className="hide" />
      <hr className="hide" />
      <div id="center-div">
        <div className="pill-button" onClick={() => { changeContent('home'); swapStyleSheet('/css/main.css'); }}>
          Home Page
        </div>
      </div>
      <hr className="hide" />
      <hr className="hide" />
      <hr className="hide" />
    </div>
  );
}
