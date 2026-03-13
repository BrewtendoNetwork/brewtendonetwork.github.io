function changeContent(page) {
	var contentDiv = document.getElementById('content');
	switch (page) {
		case 'home':
			contentDiv.innerHTML = load_1();
			break;
		case 'guide':
			contentDiv.innerHTML = load_2();
			break;
		case 'badgearcade':
			contentDiv.innerHTML = load_3();
			break;
		case 'other':
			contentDiv.innerHTML = load_4();
			break;
	}
}
