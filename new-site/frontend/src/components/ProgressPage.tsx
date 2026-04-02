'use client';

import { useContent } from '../contexts/ContentContext';

export default function ProgressPage() {
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
      <div id="center-div">
        <h1 id="header-guide-blue">Progress on website:</h1>
        <section>
          <div id="progressid" className="progressbar" style={{'--maxvalue': 7, '--value': 4} as any}>
            <div id="value"></div>
          </div>
        </section>
        <ul style={{listStyleType: 'none', fontSize: '25px', color: '#696969', fontFamily: 'MarvelouzTubeFont3', lineHeight: '50px'}}>
          <li>Proper home page</li>
          <li>Make "other info" page</li>
          <li>Give out deserved credits</li>
          <li>Support Page</li>
        </ul>
        <p>(yes thats really it I have nothing else to add other than this..)<br />I will remove what's finished every time I finish something</p>
      </div>
    </div>
  );
}