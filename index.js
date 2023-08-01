const grid = document.getElementById('grid');
const pixel = document.getElementsByClassName('pixel');
const sizeButtons = document.querySelectorAll('.btn');
const defaultSizeValue = 256;

const setColor = function(event) {
	event.target.setAttribute('class', 'pixel new');
};

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
};

grid.addEventListener('click', hoverMode);

const addDiv = function(btnValue = defaultSizeValue) {
  grid.innerHTML = '';

	for (let i = 0; i < btnValue; i++) {
		const newPixel = document.createElement('div');
		newPixel.setAttribute('class', 'pixel');
		grid.appendChild(newPixel);
	}
};

sizeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let btnValue = Math.pow(event.target.value, 2);
    addDiv(btnValue);
  });
});

addDiv();
