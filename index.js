const grid = document.getElementById('grid');
grid.innerHTML = '<div class="pixel"></div>'.repeat(256);
const pixel = document.querySelectorAll('.pixel');

const setColor = function(event) {
	event.target.setAttribute('class', 'pixel new');
}

const hoverMode = function(setColor) {
	for (let i = 0; i < pixel.length; i++) {
		if (event.target !== grid) {
			pixel[i].setAttribute('onmouseover', 'setColor(event)');
		}
	}
}

grid.addEventListener('click', hoverMode);
