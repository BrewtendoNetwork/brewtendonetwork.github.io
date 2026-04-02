function load_5() {
	return `
	    <div class="navi-bar">
            <div id="center-navi">
                <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
                <h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
                <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
            </div>
        </div>
        <div id="center-div">
        <h1 id="header-guide-blue">Progress on website:</h1>
        <section>
            <div id="progressid" class="progressbar" style="--maxvalue: 7; --value: 4;">
                <div id="value"></div>
            </div>
        </section>
        <ul style="list-style-type:none;font-size:25px;color:#696969;font-family:MarvelouzTubeFont3;line-height:50px;">
            <li>Proper home page</li>
            <li>Make "other info" page</li>
            <li>Give out deserved credits</li>
			<li>Support Page</li>
        </ul>
        <p>(yes thats really it I have nothing else to add other than this..)<br />I will remove what's finished every time I finish something</p>
        </div>
    `;
}
