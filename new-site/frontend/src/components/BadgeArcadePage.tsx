'use client';

import { useContent } from '../contexts/ContentContext';

export default function BadgeArcadePage() {
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
      <h1 id="header-guide-red">Setting up Badge Arcade:</h1>
      <div className="style-center-container" style={{color: 'black'}}>
        <div className="style-center-div-top">
          <h4>Setting up Badge Arcade.</h4>
        </div>
        <div className="style-center-div-nocolor" id="float">
          <h3>To start, install Badge Arcade from the eShop or hShop and update the game.</h3>
          <h3>Once you finish, load up Badge Arcade and play away!</h3>
          <h3>To gain play coins follow the <a href="https://discord.gg/brewtendo" rel="noopener noreferrer">Badge arcade cheats guide</a>.</h3>
          <h3>Badge Arcade and the eShop are completely disconnected from each other. (Other than using the same proxy.) You can find more updates about Badge Arcade in the official <a href="https://discord.gg/brewtendo" rel="noopener noreferrer">Brewtendo discord</a></h3>
        </div>
      </div>
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