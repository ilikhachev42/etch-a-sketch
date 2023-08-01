const grid = document.getElementById('grid');

//Make default grid size when page is loaded.

window.onload = function() {
	const defaultGrid = 256;

	for (let i = 0; i < defaultGrid; i++) {
		const newPixel = document.createElement('div');
		newPixel.setAttribute('class', 'pixel');
		grid.appendChild(newPixel);
	}
}

const pixel = document.getElementsByClassName('pixel');

//Part below responsible for entering 'hover mode' and changing a color of pixels on the grid.

const setColor = function(event) {
	event.target.setAttribute('class', 'pixel new');
}

let isHoverOn = false;

const hoverMode = function(event) {
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

addEventListener('click', hoverMode);

//Resizing grid. Displaying pixels on a grid is incorrect yet. I will fix this issue after resizing function will work correct.

let btnValue;

const addDiv = function(event) {
	btnValue = Math.pow(event.target.value, 2);

	if (btnValue > pixel.length) {
		for (let i = 0; i < btnValue; i++) {
			const newPixel = document.createElement('div');
			newPixel.setAttribute('class', 'pixel');
			grid.appendChild(newPixel);
		}
	} else if (btnValue < pixel.length) {

		//Figure out how to remove remaining divs.

		for (let i = 0; i < (pixel.length - btnValue); i++) {
			grid.lastChild.remove();
		}
	} else {
		return btnValue;
	}
	
}

addEventListener('click', addDiv);
