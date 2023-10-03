"use strict"

function hideMobileMenu(event) {
	if ( 
		// only hide the menu if the event is outside the menu:
		!document.querySelector('.header__nav--menu').contains(event.target) 
		&& 
		// only hide the menu if event is outside the burger (cos if the burger is clicked, we want the CSS to do the job):
		document.querySelector('.header__burger') !== event.target 
	) {
		document.querySelector('#header__nav--toggle').checked = false;
	}
}

document.addEventListener('mousedown', hideMobileMenu);