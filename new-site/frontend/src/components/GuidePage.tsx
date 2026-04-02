'use client';

import { useContent } from '../contexts/ContentContext';

export default function GuidePage() {
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
      <div className="style-center-container" style={{color: 'black'}}>
        <div className="style-center-div-top">
          <h4>How to setup Brewtendo Network.</h4>
        </div>
        <div className="style-center-div-nocolor" id="float">
          <h2>What you WILL need</h2>
          <hr style={{width: '90%'}} />
          <ul>
            <li><h2>A modded 3DS with Luma3DS and Universal downloader installed.</h2></li>
            <li><h3>Click or tap <a href="https://3ds.hacks.guide/" rel="noopener noreferrer">Here</a> for more info.</h3></li>
            <li><h2>A stable Wi-Fi connection.</h2></li>
            <li><h2>A way to transfer files to the SD or microSD card.</h2></li>
            <li><h3>May not be needed.</h3></li>
            <li><h2>Nimbus/Pretendo installed. (Optional)</h2></li>
            <li><h3>Click or tap <a href="https://pretendo.network/docs/install/3ds" rel="noopener noreferrer">Here</a> for more info.</h3></li>
          </ul>
          <hr style={{width: '90%'}} />
          <div className="pill-button" style={{marginBottom: '15px', marginTop: '15px'}} onClick={() => { changeContent('guide_1'); swapStyleSheet('/css/guide.css'); }}>
            Setting up the proxy.
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