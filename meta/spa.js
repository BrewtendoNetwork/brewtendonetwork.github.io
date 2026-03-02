// NOT A SPA FOR LIKE UR FACE, THIS IS A SINGLE PAGE APPLICATION, for music & sound effects maybe
function changeContent(page) {
	var contentDiv = document.getElementById('content');
	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				<!--NOT AI BTW-->
				<img src="meta/images/logo.png"/>
				<p>(actually human) website back soon holy shit</p>
				<h3>by cannedfart <img class="pfp" src="https://cdn.discordapp.com/avatars/1106930666333028422/f676c7fde54ed42351e094cac5825324.png"/> & nebula <img class="pfp" src="https://cdn.discordapp.com/avatars/1407843801762107535/aa55584f743396e1adcd23d949939096.png"> btw :)</h3>
				<button type="button" class="test-btn" onclick="window.location = '#'; document.getElementById('touch-sound').play(); document.getElementById('decide-sound').play();">test button</button>
			`;
			break;
		case 'guide':
			contentDiv.innerHTML = `
				<p>new guide page wowwwww</p>
				<button type="button" class="test-btn" onclick="changeContent('home'); document.getElementById('touch-sound').play(); document.getElementById('decide-sound').play(); setTimeout(function(){ window.location = 'index.html'; }, 200);">
					go back home
				</button>
			`;
			break;
	}
}