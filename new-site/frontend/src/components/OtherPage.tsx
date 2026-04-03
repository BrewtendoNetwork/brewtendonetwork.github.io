'use client';

import { useContent } from '../contexts/ContentContext';

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
      
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
        <img src="/images/MiiTeamData/FounderTeam.png" width="250" alt="Founder"/>
        <img src="/images/MiiTeamData/OwnerTeam.png" width="200" alt="Owner"/>
        <img src="/images/MiiTeamData/AdminTeam.png" width="800" alt="Administrators"/>
        <img src="/images/MiiTeamData/DevTeam.png" width="800" alt="Devs"/>
        <img src="/images/MiiTeamData/UITeam.png" width="800" alt="UI designers"/>
        <img src="/images/MiiTeamData/ShopmanTeam.png" width="800" alt="eShop Managers"/>
        <img src="/images/MiiTeamData/ModTeam.png" width="800" alt="Discord Moderators"/>
      </div>
    </div>
  );
}
