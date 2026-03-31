'use client';

import { useContent } from '../contexts/ContentContext';

export default function BadgeArcadePage() {
  const { changeContent } = useContent();

  return (
    <>
      <h1 id="header-guide-red">Setting Up Badge Arcade</h1>
      <div className="style-center-container" style={{ color: 'black' }}>
        <div className="style-center-div-top">
          <h4>Badge Arcade Setup</h4>
        </div>
        <div className="style-center-div-nocolor" style={{ textAlign: 'left' }}>
          <p>
            <strong>To start,</strong> install Badge Arcade from the eShop or hShop and update
            the game.
          </p>
          <p>Once you&apos;re done, load up Badge Arcade and play away!</p>
          <p>
            To gain play coins, follow the{' '}
            <a href="https://discord.gg/brewtendo" rel="noopener noreferrer" target="_blank">
              Badge Arcade cheats guide
            </a>
            .
          </p>
          <p>
            Badge Arcade and the eShop are completely disconnected from each other (other than
            using the same proxy). You can find more updates about Badge Arcade in the official{' '}
            <a href="https://discord.gg/brewtendo" rel="noopener noreferrer" target="_blank">
              Brewtendo Discord
            </a>
            .
          </p>
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
