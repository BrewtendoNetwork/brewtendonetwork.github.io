function load_1() {
	return `
            <div class="navi-bar">
                <div id="center-navi">
                    <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('meta/css/main.css'); playAudio('decide');">Brewtendo</h4>
                    <h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Install Guide</h4>
                    <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                    <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('meta/css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
                </div>
            </div>
            <!--NOT AI BTW-->
            <h1 id="logo">Brewtendo</h1>
            <p>Site soon to be finished, look at <a href="#top" onclick="changeContent('progress'); swapStyleSheet('meta/css/guide.css');">progress page</a> to find out what's to be done</p>
            <div id="center-div">
                <div class="style-center-div-nocolor" id="float">
                    <h4><i>View the guide to learn how to install Brewtendo on your 3DS!</i></h4>
                    <div id="bottom-pill-button" class="pill-button" onclick="changeContent('guide'); swapStyleSheet('meta/css/guide.css'); playAudio('decide');">
                        <u>Installation guide</u>
                    </div>
                </div>
                <div class="style-center-div-black" id="float">Brewtendo is cool for your 3DS and it gives you eShop perms <img width="70" src="https://brewtendonetwork.github.io/meta/images/eShop.png" /><wbr />If you live under a rock and want insight to why the eShop shut down in 2023 then look <a style="color:#f2f2f2;" href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/57847/~/wii-u-%26-nintendo-3ds-eshop-discontinuation-q%26a">here</a></div>
            </div>
    `;
}