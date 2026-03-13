// NOT A SPA FOR LIKE UR FACE, THIS IS A SINGLE PAGE APPLICATION, for music & sound effects maybe
function changeContent(page) {
	var contentDiv = document.getElementById('content');
	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				<div class="navi-bar">
					<h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
					<h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
					<h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
					<h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Other</h4>
				</div>
            	<!--NOT AI BTW-->
				<div id="center-div">
					<h1 id="logo">Brewtendo</h1>
					<p>(beta website)</p>
					<h3>by cannedfart <img class="pfp" src="https://cdn.discordapp.com/avatars/1106930666333028422/f676c7fde54ed42351e094cac5825324.png" /> & barely nebula <img class="pfp" src="https://cdn.discordapp.com/avatars/1407843801762107535/aa55584f743396e1adcd23d949939096.png"> btw :)</h3>
					<div class="style-center-div">
						<h4><i>View the guide to learn how to install Brewtendo on your 3DS!</i></h4>
						<div id="bottom-pill-button" class="pill-button" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">
							<u>Installation guide</u>
						</div>
					</div>
				</div>
			`;
			break;
		case 'guide':
			contentDiv.innerHTML = `
				<div class="navi-bar">
					<h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
					<h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
					<h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
					<h4 href="#top"onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Other</h4>
				</div>
				<h1 id="header-guide-orange">Brewtendo installation guide:</h1>
				<div id="info-box">
					<h1 class="guide-txt">You will need a modded 3DS with luma3ds installed see <a href="https://3ds.hacks.guide/">https://3ds.hacks.guide/</a> for more info.</h1>
					<h1 class="guide-txt" class="header-column"><u>Setting up the Brewtendo eShop:</u></h1>
					<h1 class="guide-txt">Install this <a href="https://drive.google.com/uc?export=download&id=1HsXZfe2kGBCBVG9noPdbEOt4k-iCstWT">ips patch</a> to <code>SD/luma/sysmodules/</code> on your SD Card.</h1>
					<h1 class="guide-txt">Hold Select on Startup & Make sure there's a X next to at least Enable game patching & Enable loading external FIRMs and modules</h1>
					<h1 class="guide-txt">Go into Pretendos Nimbus app & select Nintendo Network if your on Pretendo enjoy. If not while "recommended" nnid may have issues while pretendo works.</h1>
					<h1 class="guide-txt">Go into settings after & go to your WIFI connection & select the one your currently using (multiple without the proxy & ip changes will cause disconnects) go to Proxy settings & enter the Proxy IP: <code>69.202.205.93 Port 3000</code> subject to possibly change "do not give out to prevent issues & may result in a ban"</h1>
					<h1 class="guide-txt">Once all this is done, you should be able to access the eShop.</h1>
				</div>
				<hr class="hide">
				<hr class="hide">
				<hr class="hide">
				<div id="other-info-box">
					<h3 class="guide-txt">Other Useful Information</h3>
					<details><summary class="guide-txt" class="header-column">Games Disappearing on First Connection</summary><h5 class="guide-txt">On the first connection, games installed on your console may disappear from the home menu <br />(this does not effect saves unless update not found, be careful, example streetpass update is disabled/faketik not used)<br />This is normal behavior. The games have not actually disappeared.<br />To make your games reappear, you can use faketik:<br />Download <a href="https://drive.google.com/uc?export=download&id=1utsgz3Ou22HU50CLgFcwHnnrVSz_cmO3">faketik.3dsx</a><br />Place the file in <code>SD:/3ds/faketik.3dsx</code> on your SD card<br />Launch faketik from the Homebrew Launcher<br />Follow the on-screen instructions to regenerate the tickets & games will reappear.<br />faketik is also on universal updater if you dont want to install it manually</details>
					<details><summary class="guide-txt" class="header-column">Theme Shop data deletion</summary><h5 class="guide-txt">Go to FBI, ext save data, for USA you delete ext save data ending in 000002cd for EUR you delete ext dave data ending in 000002ce.</details>
				</div>
				<hr class="hide">
				<hr class="hide">
				<hr class="hide">
				<div id="center-div">
					<div class="pill-button" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">
						<u>Home Page</u>
					</div>
				</div>
				<hr class="hide">
				<hr class="hide">
				<hr class="hide">
			`;
			break;
		case 'badgearcade':
			contentDiv.innerHTML = `
				<div class="navi-bar">
					<h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
					<h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
					<h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
					<h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Other</h4>
				</div>
				<h1 id="header-guide-red">Badge Arcade Cheats:</h1>
				<div id="info-box">
					<h1 class="guide-txt" class="header-column"><u>Setup Instructions</u></h1>
					<h1 class="guide-txt" class="header-column"><u>Install the Plugin:</u></h1>
					<h1 class="guide-txt">Place the <a href="https://drive.google.com/uc?export=download&id=1wBAnV2fCdtEDNQJFrU6TwN_23XbRc6GU">cheat plugin</a> file into your SD card under <code>luma/plugins.</code></h1>
					<h1 class="guide-txt">If the folder does not exist, create it manually.</h1>
					<h1 class="guide-txt"><u>Enable Plugin Loader:</u></h1>
					<h1 class="guide-txt">Launch Rosalina Menu: Hold L + D-Pad Down + Select & Navigate to Plugin Loader and enable it. then enter badge arcade.</h1>
					<h1 class="guide-txt" class="header-column"><u>Cheat Procedure</u></h1>
					<h1 class="guide-txt">Press Select (or L + D-Pad Down + Select) to enter the search interface.</h1>
					<h1 class="guide-txt">Search for the value corresponding to your available plays (starting at 5 or the amount of plays you have).</h1>
					<h1 class="guide-txt">Play until the remaining plays decrease to 4.</h1>
					<h1 class="guide-txt">then search again but with 4 but search 3 once following previous step again if the search results appear with more than 4 in the list, continue playing until only 3 values remain.</h1>
					<h1 class="guide-txt">Ensure at least 2–4 values are present in the search list.</h1>
					<h1 class="guide-txt">Edit all selected values to 9 to maximize the number of plays.</h1>
					<h1 class="guide-txt">When returning to the game, if no arm11, the cheat should automatically adjust remaining plays.</h1>
					<h1 class="guide-txt">Instead of showing 3 plays left, it will display 8 plays (or the appropriate maximum).</h1>
					<h1 class="guide-txt">The exact maximum value is unknown, but setting all target values to 9 ensures the cheat works reliably.</h1>
				</div>
				<hr class="hide">
				<hr class="hide">
				<hr class="hide">
				<div id="center-div">
					<div class="pill-button" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">
						<u>Home Page</u>
					</div>
				</div>
				<hr class="hide">
				<hr class="hide">
				<hr class="hide">
			`;
			break;
		case 'other':
			contentDiv.innerHTML = `
				<div class="navi-bar">
					<h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
					<h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
					<h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
					<h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Other</h4>
				</div>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
			`;
			break;
	}
}
