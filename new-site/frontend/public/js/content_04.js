function load_04() {
	return `
		<div class="navi-bar">
            <div id="center-navi">
                <h4 href="#top" onclick="changeContent('home'); swapStyleSheet('css/main.css'); playAudio('decide');">Brewtendo</h4>
            	<h4 href="#top" onclick="changeContent('guide'); swapStyleSheet('css/guide.css'); playAudio('decide');">Install Guide</h4>
                <h4 href="#top" onclick="changeContent('badgearcade'); swapStyleSheet('css/guide.css'); playAudio('decide');">Badge Arcade</h4>
                <h4 href="#top" onclick="changeContent('other'); swapStyleSheet('css/main.css'); playAudio('decide');" style="border: none;">Other Info</h4>
            </div>
    	</div>
			<img src="images/MiiTeamData/FounderTeam.png" width="250" alt="Founder"/>
			<img src="images/MiiTeamData/OwnerTeam.png" width="200" alt="Owner"/>
			<img src="images/MiiTeamData/AdminTeam.png" width="800" alt="Administrators"/>
			<img src="images/MiiTeamData/DevTeam.png" width="800" alt="Devs"/>
			<img src="images/MiiTeamData/UITeam.png" width="800" alt="Ui designers"/>
			<img src="images/MiiTeamData/ShopmanTeam.png" width="800" alt="eShop managers"/>
			<img src="images/MiiTeamData/ModTeam.png" width="800" alt="Discord mods"/>
		</div>
		</div>
    `;
}
