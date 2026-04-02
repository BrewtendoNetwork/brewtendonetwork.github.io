'use client';

import { useContent } from '../contexts/ContentContext';

export default function Footer() {
  const { changeContent, swapStyleSheet } = useContent();

  return (
    <footer>
      <div id="footer">
        <h1 style={{fontFamily: 'MarvelouzTubeFont3'}}>Brewtendo</h1>
        <p>Website by <a href="https://discord.com/users/1106930666333028422" className="link" rel="noopener noreferrer"><img className="pfp" src="https://cdn.discordapp.com/avatars/1106930666333028422/7a479319ddd01f829207571fd2636016.png" alt="" /> @cannedfart</a> on Discord</p>
        <p>Guide by <a href="https://discord.com/users/1268772602227327083" className="link" rel="noopener noreferrer"><img className="pfp" src="https://cdn.discordapp.com/avatars/1268772602227327083/d0c4541f94f8562f6babfa151fa98afc.png" alt="" /> Adrian Bautista (@vugbdok8307)</a> on Discord</p>
        <p style={{ margin: '10px 0', fontSize: '14px' }}><img src="https://cdn.discordapp.com/avatars/1055874798535848118/289a02d4f188a935bc58f5e6dcaf346e.webp?size=80" alt="itsglowny" className="pfp" /> Migration by itsglowny - toadysh</p>
        <p><a className="link" href="https://www.youtube.com/@Trippy76534" rel="noopener noreferrer"><img width="30" src="https://raw.githubusercontent.com/BrewtendoNetwork/brewtendonetwork.github.io/main/meta/images/yticon.png" alt="ytimg" /> <span style={{position: 'relative', bottom: '7px'}}>YouTube Channel</span></a></p>
        <p><a className="link" href="https://discord.gg/brewtendo" rel="noopener noreferrer"><img width="30" src="https://raw.githubusercontent.com/BrewtendoNetwork/brewtendonetwork.github.io/main/meta/images/discord.webp" alt="discord icon" /> <span style={{position: 'relative', bottom: '7px'}}>Discord Server</span></a></p>
        <p><a className="link" style={{cursor: 'pointer'}} onClick={() => { changeContent('progress'); swapStyleSheet('/globals.css'); }}>Progress</a></p>
      </div>
    </footer>
  );
}