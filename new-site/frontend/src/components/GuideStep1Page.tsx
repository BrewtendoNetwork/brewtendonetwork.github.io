'use client';

import { useContent } from '../contexts/ContentContext';

export default function GuideStep1Page() {
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
          <h4>Setting up the proxy.</h4>
        </div>
        <div className="style-center-div-nocolor" id="float">
          <details className="guide-txt">
            <summary className="guide-txt"><h2>If you DON'T have Nimbus/Pretendo installed.</h2></summary>
            <p>To start copy the ips file below labeled <code>0004013000002F02.ips</code> to <code>SD:/luma/sysmodules/</code> on your SD or microSD Card. Shut down your console and hold Select on startup. <br />When Luma3DS pops up make sure you have these options enabled.<br /><img src="https://raw.githubusercontent.com/BrewtendoNetwork/brewtendonetwork.github.io/main/meta/images/selectmenuimg.png" style={{width:'65%'}} alt="Select Menu" /><br />When successful you can proceed to the next steps!</p>
          </details>
          <details className="guide-txt">
            <summary className="guide-txt"><h2>If you do have Pretendo</h2></summary>
            <p>Go to the Nimbus app and select Nintendo Network<br /><span style={{fontSize:'0.8rem'}}>It's more stable this way but you can use Pretendo.</span><br />Now go into System Settings, when it loads, go into Internet Settings, Connection Settings, your WIFI connection, Change Settings, tap on the arrow, Proxy Settings, then select Yes to enable the proxy, Detailed Setup, Proxy Server and enter in these values exactly 69.202.205.93, select Port and enter these values exactly 3000. Go back to Your Wi-Fi connection settings, tap on Test Connection Wait until you get the error 003-####<hr style={{width:'90%'}} />Proxy is subject to change<hr style={{width:'90%'}} /></p>
          </details>
          <hr style={{width:'90%',marginTop:'20px'}} />
          <h3 className="guide-txt">INFORMATION ABOUT THE ERROR CODE 003</h3>
          <h3 className="guide-txt">This code means that you are not accepted yet into Brewtendo Network and you NEED TO WAIT to be accepted. Bunny the proxy owner, needs to manually accept you. Complaining about the error code in the <a href="https://discord.gg/brewtendo" rel="noopener noreferrer">discord</a> will get you nowhere.</h3>
          <h3 className="guide-txt">NOTE: Bunny is in the EST time zone or UTC -5:00. HE IS A PERSON so be patient.</h3>
          <h3 className="guide-txt">For more updates related to Brewtendo Network look in the official <a href="https://discord.gg/brewtendo" rel="noopener noreferrer">discord</a>.</h3>
          <h3 className="guide-txt">And you are now connected to Brewtendo Network!</h3>
          <hr style={{width:'90%'}} />
          <div className="pill-button" style={{marginBottom:'15px',marginTop:'15px'}} onClick={() => { changeContent('guide_2'); swapStyleSheet('/css/guide.css'); }}>
            Setting up the eShop.
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
