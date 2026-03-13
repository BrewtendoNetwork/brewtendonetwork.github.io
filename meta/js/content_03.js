function load_3() {
	return `
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
}