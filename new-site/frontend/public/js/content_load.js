function changeContent(page) {
	var contentDiv = document.getElementById('content');
	switch (page) {
		//home page
		case 'home':
			contentDiv.innerHTML = load_1();
			break;
		//guide stuffs
		case 'guide':
			contentDiv.innerHTML = load_2();
			break;
		case 'guide_1':
			contentDiv.innerHTML = load_2_1();
			break;
		case 'guide_2':
			contentDiv.innerHTML = load_2_2();
			break;
		case 'guide_3':
			contentDiv.innerHTML = load_2_3();
			break;

		case 'badgearcade':
			contentDiv.innerHTML = load_3();
			break;
		//other thingamajigs
		case 'other':
			contentDiv.innerHTML = load_04();
			break;
		case 'progress':
			contentDiv.innerHTML = load_5();
			break;
	}
}
