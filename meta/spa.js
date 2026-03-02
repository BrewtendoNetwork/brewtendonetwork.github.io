// NOT A SPA FOR LIKE UR FACE, THIS IS A SINGLE PAGE APPLICATION, for music & sound effects maybe
function changeContent(page) {
	var contentDiv = document.getElementById('content');
	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
            	<!--NOT AI BTW-->
            	<img src="meta/images/logo.png" />
            	<p>(actually human) website back soon holy shit</p>
            	<h3>by cannedfart <img class="pfp" src="https://cdn.discordapp.com/avatars/1106930666333028422/f676c7fde54ed42351e094cac5825324.png" /> & nebula <img class="pfp" src="https://cdn.discordapp.com/avatars/1407843801762107535/aa55584f743396e1adcd23d949939096.png"> btw :)</h3>
            	<h4>note that all buttons will have a big redesign to match the eshop so dont edit them too much</h3>
            	<button type="button" class="test-btn" onclick="changeContent('guide'); document.getElementById('touch-sound').play(); document.getElementById('decide-sound').play();">Guide</button>
			`;
			break;
		case 'guide':
			contentDiv.innerHTML = `
				<p>You will need a modded 3DS with luma3ds installed see <a href="https://3ds.hacks.guide/">https://3ds.hacks.guide/</a> for more info.
<br /><br />
Setting up the Brewtendo eShop:
Install the ips patch below labeled 0004013000002F02.ips to SD:\luma\sysmodules\ on your SD Card.
Hold Select on Startup & Make sure there's a X next to at least Enable game patching & Enable loading external FIRMs and modules
Go into Pretendos Nimbus app & select Nintendo Network if your on Pretendo enjoy. If not while "recommended" nnid may have issues while pretendo works.
Go into settings after & go to your WIFI connection & select the one your currently using (multiple without the proxy & ip changes will cause disconnects) go to Proxy settings & enter the Proxy IP: 69.202.205.93 Port 3000 subject to possibly change "do not give out to prevent issues & may result in a ban"
<br /><br />
Once all this is done, you should be able to access the eShop. 
37 bytes<br />
A complete guide to 3DS custom firmware<br />
Other Useful Information<br />
Games Disappearing on First Connection<br />
On the first connection, games installed on your console may disappear from the home menu (this does not effect saves unless update not found, be careful, example streetpass update is disabled/faketik not used)
<br /><br />
This is normal behavior. The games have not actually disappeared.<br />
To make your games reappear, you can use faketik:<br />
<br />
Download faketik.3dsx below<br />
Place the file in SD:/3ds/faketik.3dsx on your SD card<br />
Launch faketik from the Homebrew Launcher<br />
Follow the on-screen instructions to regenerate the tickets & games will reappear.</p>
				<button type="button" class="test-btn" onclick="changeContent('home'); document.getElementById('touch-sound').play(); document.getElementById('decide-sound').play();">
					go back home
				</button>
			`;
			break;
	}
}
