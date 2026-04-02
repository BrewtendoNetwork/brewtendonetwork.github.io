'use client';

import { useContent } from '../contexts/ContentContext';
import { staffMembers } from '../data/staff';

export default function OtherPage() {
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
      <div className="style-center-div" style={{padding: '10px 10px 30px 10px'}} id="float">
        Brewtendo Staff:
        <hr style={{width: '100%'}} />
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
          {staffMembers.map((member) => (
            <div key={member.name} style={{textAlign: 'center', width: '100px'}}>
              <img 
                src={member.image} 
                width="80" 
                height="80" 
                alt={member.name}
                style={{borderRadius: '8px', objectFit: 'cover'}}
              />
              <div style={{fontSize: '12px', marginTop: '5px', wordBreak: 'break-word'}}>
                {member.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
