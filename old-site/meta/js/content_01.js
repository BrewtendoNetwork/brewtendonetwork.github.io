function load_1() {
	return `
            <div class="navi-bar">
                <div id="center-navi">
                    <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('old-site/meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
                    <h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('old-site/meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
                    <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('old-site/meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                    <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('old-site/meta/css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
                </div>
            </div>
            <!--NOT AI BTW-->
            <div id="center-all">
        		<div className="style-banner">
          			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
           				<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            				 <img src="assets/3DS_Icon_Brew-1.png" width="200" alt="Brewtendo" />
           						  <h1 id="logo">Brewtendo</h1>
            				</div>
           						 <p style={{ margin: '10px 0 0 0', fontSize: '14px', color: '#5e5c50' }}>The only official website for Brewtendo Network.</p>
         					 </div>
        				</div>
                    <div class="column">
                       <div class="style-center-container">
                          <div class="style-center-div-top">
                              <h4>Learn how to install Brewtendo on your 3DS!</h4>
                           </div>
                           <div class="style-center-div-nocolor" id="float">
                              <div id="bottom-pill-button" class="pill-button" onclick="changeContent('guide'); swapStyleSheet('old-site/meta/css/guide.css'); playAudio('decide');">
                                  Installation guide
                               </div>
                           </div>
                        </div>
                       <div class="style-center-container">
                          <div class="style-center-div-top">
                              <h4>Other Information:</h4>
                          </div>
                         <div class="style-center-div-nocolor" id="float">
                             <h4>Learn how to install Badge Arcade on your 3DS</h4>
                             <div id="bottom-pill-button" class="pill-button" onclick="changeContent('badgearcade'); swapStyleSheet('old-site/meta/css/guide.css'); playAudio('decide');">
                                 Badge Arcade guide
                             </div>
                             <hr style="width:100%;margin-top:25px;" />
                            <h4>Wanna check out the progress on the site?<br />this should change as the site progresses until the eventual release later in (april)?</h4>
                            <div id="bottom-pill-button" style="margin-bottom:15px;" class="pill-button" onclick="changeContent('progress'); swapStyleSheet('old-site/meta/css/guide.css'); playAudio('decide');">
                                Progress
                            </div>
                        </div>
                    </div>
                </div>
                <div class="style-center-div" id="float">Brewtendo Description:<hr style="width:100%;" />Brewtendo is a Nintendo Network revival for the 3DS, it's not really trying to be a potential Pretendo rival, however. Instead it revives the things that they wouldn't add such as the eShop, Badge Arcade, Theme Shop, Spotpass, and Nintendo Video.<br />(devs lmk if i missed anything or you want me to add / change to this.)<img width="70" src="old-site/assets/eShop.png" />If you live under a rock and want insight to why the eShop <br />shut down in 2023 then look <span style="cursor:pointer;" onclick="location.href='https://en-americas-support.nintendo.com/app/answers/detail/a_id/57847/~/wii-u-%26-nintendo-3ds-eshop-discontinuation-q%26a'"><u>here</u></span></div>
            </div>
            </div>
    `;
}
