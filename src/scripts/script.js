"use strict"

function hideMobileMenu(event) {
	// kinda "if event.target is not menu then hide menu"
}

// only add this listener when the menu gets actually opened, and kill the listener when the menu gets closed.
document.body.addEventListener('click', hideMobileMenu);