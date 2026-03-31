'use client';

import { useContent } from '../contexts/ContentContext';

export default function Footer() {
  const { changeContent } = useContent();

  return (
    <footer>
      <div id="footer">
        <h1 id="footer-logo">Brewtendo</h1>
        <p className="footer-tagline">A Nintendo Network Revival for the 3DS</p>

        <div className="footer-divider" />

        <div className="footer-credits">
          <a
            href="https://discord.com/users/1106930666333028422"
            className="footer-credit-item"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="footer-avatar"
              src="https://cdn.discordapp.com/avatars/1106930666333028422/7a479319ddd01f829207571fd2636016.png"
              alt=""
            />
            <div>
              <span className="footer-credit-name">@cannedfart</span>
              <span className="footer-credit-role">Website</span>
            </div>
          </a>
          <a
            href="https://discord.com/users/1268772602227327083"
            className="footer-credit-item"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="footer-avatar"
              src="https://cdn.discordapp.com/avatars/1268772602227327083/d0c4541f94f8562f6babfa151fa98afc.png"
              alt=""
            />
            <div>
              <span className="footer-credit-name">@vugbdok8307</span>
              <span className="footer-credit-role">Guide</span>
            </div>
          </a>
          <div className="footer-credit-item">
            <img
              className="footer-avatar"
              src="https://cdn.discordapp.com/avatars/1055874798535848118/289a02d4f188a935bc58f5e6dcaf346e.webp?size=80"
              alt=""
            />
            <div>
              <span className="footer-credit-name">itsglowny</span>
              <span className="footer-credit-role">Migration</span>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-socials">
          <a
            className="footer-social-btn"
            href="https://discord.gg/brewtendo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img width="20" height="20" src="/images/discord.webp" alt="" />
            Discord
          </a>
          <a
            className="footer-social-btn"
            href="https://www.youtube.com/@Trippy76534"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img width="20" height="20" src="/images/yticon.png" alt="" />
            YouTube
          </a>
        </div>

        <p className="footer-bottom">
          <a className="link" style={{ cursor: 'pointer', fontSize: '12px' }} onClick={() => changeContent('progress')}>
            Site Progress
          </a>
        </p>
      </div>
    </footer>
  );
}
