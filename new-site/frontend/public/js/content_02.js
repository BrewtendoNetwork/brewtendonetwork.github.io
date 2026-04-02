function load_2() {
    return `
        <div class="navi-bar">
            <div id="center-navi">
                <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
                <h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
                <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
            </div>
        </div>
			<h1 id="header-guide-orange">Brewtendo installation guide:</h1>
		            <div class="style-center-container" class="guide-txt">
                        <div class="style-center-div-top">
                            <h4>How to setup Brewtendo Network.</h4>
                        </div>
                        <div class="style-center-div-nocolor" id="float">
							<h2>What you WILL need</h2>
							<hr style="width:90%;" />
							<ul>
								<li><h2>A modded 3DS with Luma3DS and Universal downloader installed.</h2></li>
								<li><h3>Click or tap <a href="https://3ds.hacks.guide/">Here</a> for more info.</h2></li>
								<li><h2>A stable Wi-Fi connection.</li>
								<li><h2>A way to transfer files to the SD or microSD card.</h2></li>
								<li><h3>May not be needed.</h2></li>
								<li><h2>Nimbus/Pretendo installed. (Optional)</h2></li>
								<li><h3>Click or tap <a href="https://pretendo.network/docs/install/3ds">Here</a> for more info.</h2></li>
							</ul>
							<hr style="width:90%;" />
							<div class="pill-button" style="margin-bottom:15px;margin-top:15px;" onclick="changeContent('guide_1'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">
								Setting up the proxy.
							</div>
                        </div>
                    </div>
		<h3></h3>
		</div>
		<hr class="hide">
		<hr class="hide">
		<hr class="hide">
							<div id="center-div">
								<div class="pill-button" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">
									Home Page
								</div>
							</div>
		<hr class="hide">
		<hr class="hide">
		<hr class="hide">
    `;
}

function load_2_1() {
	return `
		<div class="navi-bar">
            <div id="center-navi">
                <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
                <h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
                <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
            </div>
        </div>
			<h1 id="header-guide-orange">Brewtendo installation guide:</h1>
		        <div class="style-center-container" class="guide-txt">
                    <div class="style-center-div-top">
                        <h4>Setting up the proxy.</h4>
                    </div>
                    <div class="style-center-div-nocolor" id="float">
						<details class="guide-txt">
							<summary class="guide-txt"><h2>If you DON'T have Nimbus/Pretendo installed.</h2></summary>
							<p>To start copy the ips file below labeled <code>0004013000002F02.ips</code> to <code>SD:/luma/sysmodules/</code> on your SD or microSD Card. Shut down your console and hold Select on startup. <br />When Luma3DS pops up make sure you have these options enabled.<br /><img src="https://brewtendonetwork.github.io/meta/images/selectmenuimg.png" style="width:65%;" /><br />When successful you can proceed to the next steps!</p>
						</details>
						<details class="guide-txt">
							<summary class="guide-txt"><h2>If you do have Pretendo</h2></summary>
							<p>Go to the Nimbus app and select Nintendo Network<br /><span style="font-size:0.8rem;">It's more stable this way but you can use Pretendo.</span><br />Now go into System Settings, when it loads, go into Internet Settings, Connection Settings, your WIFI connection, Change Settings, tap on the arrow, Proxy Settings, then select Yes to enable the proxy, Detailed Setup, Proxy Server and enter in these values exactly 69.202.205.93, select Port and enter these values exactly 3000. Go back to Your Wi-Fi connection settings, tap on Test Connection Wait until you get the error 003-####<hr style="width:90%;" />Proxy is subject to change<hr style="width:90%;" /></p>
						</details>
						<hr style="width:90%;margin-top:20px;" />
						<h3 class="guide-txt">INFORMATION ABOUT THE ERROR CODE 003</h3>
						<h3 class="guide-txt">This code means that you are not accepted yet into Brewtendo Network and you NEED TO WAIT to be accepted. Bunny the proxy owner, needs to manually accept you. Complaining about the error code in the <a href="https://discord.gg/brewtendo">discord</a> will get you nowhere.</h3>
						<h3 class="guide-txt">NOTE: Bunny is in the EST time zone or UTC -5:00. HE IS A PERSON so be patient.</h3>
						<h3 class="guide-txt">For more updates related to Brewtendo Network look in the official <a href="https://discord.gg/brewtendo">discord</a>.</h3>
						<h3 class="guide-txt">And you are now connected to Brewtendo Network!</h3>
						<hr style="width:90%;" />
						<div class="pill-button" style="margin-bottom:15px;margin-top:15px;" onclick="changeContent('guide_2'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">
							Setting up the eShop.
						</div>
					</div>
				</div>
				<h3></h3>
		<hr class="hide">
		<hr class="hide">
		<hr class="hide">
		<div id="center-div">
			<div class="pill-button" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">
				Home Page
			</div>
		</div>
		<hr class="hide">
		<hr class="hide">
		<hr class="hide">

	`;
}

function load_2_2() {
	return `
		<div class="navi-bar">
            <div id="center-navi">
                <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
                <h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
                <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
            </div>
        </div>
			<h1 id="header-guide-orange">Brewtendo installation guide:</h1>
		        <div class="style-center-container" class="guide-txt">
                    <div class="style-center-div-top">
                        <h4>Disabling Brewtendo Network.</h4>
                    </div>
                    <div class="style-center-div-nocolor" id="float">
						<h3 class="guide-txt">Open System Settings, when it loads, go into Internet Settings, Connection Settings, your WIFI connection, Change Settings, tap on the arrow, Proxy Settings, then select No to disable it, it will remember your settings though, so when you re-enable it by hitting Yes The IP address and a Port should stay the same.</h3>
						<hr style="width:90%;" />
						<div class="pill-button" style="margin-bottom:15px;margin-top:15px;" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">
							Setting up Badge Arcade.
						</div>
					</div>
				</div>
				<h3></h3>
		<hr class="hide">
		<hr class="hide">
		<hr class="hide">
		<div id="center-div">
			<div class="pill-button" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">
				Home Page
			</div>
		</div>
		<hr class="hide">
		<hr class="hide">
		<hr class="hide">

	`;
}