function load_2() {
    return `
        <div class="navi-bar">
            <div id="center-navi">
                <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
                <h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');"><u>Install Guide</u></h4>
                <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
            </div>
        </div>
			<h1 id="header-guide-orange">Brewtendo installation guide:</h1>
		<div id="info-box">
			<h1 class="guide-txt">You will need a modded 3DS with luma3ds installed see <a href="https://3ds.hacks.guide/">https://3ds.hacks.guide/</a> for more info.</h1>
			<h1 class="guide-txt" class="header-column"><u>Setting up the Brewtendo eShop:</u></h1>
			<h1 class="guide-txt">Install this <a href="https://drive.google.com/uc?export=download&id=1HsXZfe2kGBCBVG9noPdbEOt4k-iCstWT">ips patch</a> to <code>SD/luma/sysmodules/</code> on your SD Card.<br />Patchless version coming tuesday.</h1>
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
}