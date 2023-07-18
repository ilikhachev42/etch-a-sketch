const grid = document.getElementById('grid');
grid.innerHTML = '<div class="pixel"></div>'.repeat(256);
const pixel = document.getElementsByClassName('pixel');
console.log(pixel)

const setColor = function(event) {
	event.target.setAttribute('class', 'pixel new');
}

let isHoverOn = false;

function hoverMode(event) {
		isHoverOn = !isHoverOn;

    if (isHoverOn) {
      for (let i = 0; i < pixel.length; i++) {
        if (event.target !== grid) {
          pixel[i].addEventListener('mouseover', setColor)
        }
      }
    }

    if (!isHoverOn) {
      for (let i = 0; i < pixel.length; i++) {
        if(event.target !== grid) {
          pixel[i].removeEventListener('mouseover', setColor)
        }
      }
    }
}

grid.addEventListener('click', hoverMode);

//Resizing grid

let buttonValue = 0;

const addDiv = function(num) {
	grid.innerHTML = '<div class="pixel"></div>'.repeat(num);
}

const setGridSize = function(event) {
	if (event.target.hasAttribute('value')) {
		buttonValue = event.target.value;
		addDiv(buttonValue * buttonValue);
	}
}

addEventListener('click', setGridSize);
