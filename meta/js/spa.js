// NOT A SPA FOR LIKE UR FACE, THIS IS A SINGLE PAGE APPLICATION, for music & sound effects maybe
function changeContent(page) {
	var contentDiv = document.getElementById('content');
	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				<div class="navi-bar">
					<a href="#" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); select;">Home</a>
					<a href="#" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); select;">Install Guide</a>
					<a href="#" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/main.css'); select;">Badge Arcade</a>
					<a href="#" onclick="changeContent('nintendovideo'); swapStyleSheet('meta/css/main.css'); select;">Nintendo Video</a>
				</div>
            	<!--NOT AI BTW-->
            	<h1 id="logo">Brewtendo</h1>
            	<p>(actually human) website back soon holy shit</p>
            	<h3>by cannedfart <img class="pfp" src="https://cdn.discordapp.com/avatars/1106930666333028422/f676c7fde54ed42351e094cac5825324.png" /> & nebula <img class="pfp" src="https://cdn.discordapp.com/avatars/1407843801762107535/aa55584f743396e1adcd23d949939096.png"> btw :)</h3>
            	<h4>note that all buttons will have a big redesign to match the eshop so dont edit them too much</h3>
				<!--changeContent('to which case you wanna change it to'), swapStyleSheet('where your css file is')-->
			`;
			break;
		case 'guide':
			contentDiv.innerHTML = `
				<div class="navi-bar">
					<a href="#" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); select;">Home</a>
					<a href="#" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); select;">Install Guide</a>
					<a href="#" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/main.css'); select;">Badge Arcade</a>
					<a href="#" onclick="changeContent('nintendovideo'); swapStyleSheet('meta/css/main.css'); select;">Nintendo Video</a>
				</div>
				<h1 id="header-guide">Brewtendo installation guide:</h1>
				<div id="info-box">
					<h1 class="guide-txt">You will need a modded 3DS with luma3ds installed see <a href="https://3ds.hacks.guide/">https://3ds.hacks.guide/</a> for more info.</h1>
					<h1 class="guide-txt" class="header-column">Setting up the Brewtendo eShop:</h1>
					<h1 class="guide-txt">Install this <a href="https://drive.google.com/uc?export=download&id=1HsXZfe2kGBCBVG9noPdbEOt4k-iCstWT">ips patch</a> to <code>SD/luma/sysmodules/</code> on your SD Card.</h1>
					<h1 class="guide-txt">Hold Select on Startup & Make sure there's a X next to at least Enable game patching & Enable loading external FIRMs and modules</h1>
					<h1 class="guide-txt">Go into Pretendos Nimbus app & select Nintendo Network if your on Pretendo enjoy. If not while "recommended" nnid may have issues while pretendo works.</h1>
					<h1 class="guide-txt">Go into settings after & go to your WIFI connection & select the one your currently using (multiple without the proxy & ip changes will cause disconnects) go to Proxy settings & enter the Proxy IP: <code>69.202.205.93 Port 3000</code> subject to possibly change "do not give out to prevent issues & may result in a ban"</h1>
					<h1 class="guide-txt">Once all this is done, you should be able to access the eShop.</h1>
				</div>
				<hr>
				<hr>
				<hr>
				<div id="other-info-box">
					<h3 class="guide-txt">Other Useful Information</h3>
					<details><summary class="guide-txt" class="header-column">Games Disappearing on First Connection</summary><h5 class="guide-txt">On the first connection, games installed on your console may disappear from the home menu <br />(this does not effect saves unless update not found, be careful, example streetpass update is disabled/faketik not used)<br />This is normal behavior. The games have not actually disappeared.<br />To make your games reappear, you can use faketik:<br />Download faketik.3dsx below<br />Place the file in <code>SD:/3ds/faketik.3dsx</code> on your SD card<br />Launch faketik from the Homebrew Launcher<br />Follow the on-screen instructions to regenerate the tickets & games will reappear.<br />faketik is also on universal updater if you dont want to install it manually</details>
				</div>
				<hr>
				<hr>
				<hr>
			`;
			break;
		case 'badgearcade':
			contentDiv.innerHTML = `
				<div class="navi-bar">
					<a href="#" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); select;">Home</a>
					<a href="#" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); select;">Install Guide</a>
					<a href="#" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/main.css'); select;">Badge Arcade</a>
					<a href="#" onclick="changeContent('nintendovideo'); swapStyleSheet('meta/css/main.css'); select;">Nintendo Video</a>
				</div>
				<h1>nothing yet :)</h1>
			`;
	}
}
