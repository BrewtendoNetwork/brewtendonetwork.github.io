function load_1() {
	return `
        <div class="navi-bar">
            <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
            <h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
            <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
            <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Other</h4>
        </div>
        <!--NOT AI BTW-->
        <h1 id="logo">Brewtendo</h1>
        <p>(beta website)</p>
        <h3>by cannedfart <img class="pfp" src="https://cdn.discordapp.com/avatars/1106930666333028422/f676c7fde54ed42351e094cac5825324.png" /> & barely nebula <img class="pfp" src="https://cdn.discordapp.com/avatars/1407843801762107535/aa55584f743396e1adcd23d949939096.png"> btw :)</h3>
        <div id="center-div">
            <div class="style-center-div" id="float">
                <h4><i>View the guide to learn how to install Brewtendo on your 3DS!</i></h4>
                <div id="bottom-pill-button" class="pill-button" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">
                   <u>Installation guide</u>
                </div>
            </div>
            <div class="style-center-div" id="float">add whatever you want in the div</div>
        </div>
    `;
}