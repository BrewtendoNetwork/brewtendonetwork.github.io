function load_3() {
	return `
        <div class="navi-bar">
            <div id="center-navi">
                <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
                <h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
                <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
            </div>
        </div>
			<h1 id="header-guide-red">Setting up Badge Arcade:</h1>
		            <div class="style-center-container" class="guide-txt">
                        <div class="style-center-div-top">
                            <h4>Setting up Badge Arcade.</h4>
                        </div>
                        <div class="style-center-div-nocolor" id="float">
							<h3 class="guide-txt">To start, install Badge Arcade from the eShop or hShop and update the game.</h3>
							<h3 class="guide-txt">Once you finish, load up Badge Arcade and play away!</h3>
							<h3 class="guide-txt">To gain play coins follow the <a href="https://discord.gg/brewtendo">Badge arcade cheats guide</a>.</h3>
							<h3 class="guide-txt">Badge Arcade and the eShop are completely disconnected from each other. (Other than using the same proxy.) You can find more updates about Badge Arcade in the official <a href="https://discord.gg/brewtendo">Brewtendo discord</a></h3>
                        </div>
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
