const grid = document.getElementById('grid');
const allPixels = document.getElementsByClassName('pixel');
const fancyPixels = document.querySelectorAll('.new');
const sizeButtons = document.querySelectorAll('.btn');
const colorPicker = document.querySelector('#color-picker');
const paletteEllipse = document.querySelector('.palette-ellipse');
const defaultColor = '#000000';
const defaultSizeValue = 256;
const gridHeight = getComputedStyle(grid).height;
const gridPaddingTop = getComputedStyle(grid).paddingTop;
const gridPaddingBottom = getComputedStyle(grid).paddingBottom;

//Code below responsible for drawing.

//Save current picked color in currentColor variable.
let currentColor = defaultColor;

//After color is picked, change color of the ellipse inside an icon.
colorPicker.addEventListener('input', (event) => {
	currentColor = event.target.value;
	paletteEllipse.style.fill = currentColor;
});

//Use a color saved in currentColor when function setColor is called.
const setColor = function(event) {
	event.target.style.backgroundColor = currentColor;
};

let isHoverOn = false;

const hoverMode = function(event) {
	isHoverOn = !isHoverOn;

  if (isHoverOn) {
    for (let i = 0; i < allPixels.length; i++) {
      if (event.target !== grid) {
        allPixels[i].addEventListener('mouseover', setColor)
      }
    }
  }

  if (!isHoverOn) {
    for (let i = 0; i < allPixels.length; i++) {
      if(event.target !== grid) {
        allPixels[i].removeEventListener('mouseover', setColor)
      }
    }
  }
};

grid.addEventListener('click', hoverMode);

//Function getNumber() accepts a string and returns number for further calculatings.
const getNumber = function(string) {
	const regex = /\d/g;
	return Number(string.match(regex).join(''));
};

//Code below responsible for resizing grid after user clicks a button.
const addDiv = function(btnValue = defaultSizeValue) {
  grid.innerHTML = '';

	//To get current pixel width and height I use a formula: a / √x where a = length of grid; x = total amount of pixels. To get 'a' I subtract sum of paddings from a grid height;
	const a = getNumber(gridHeight) - (getNumber(gridPaddingTop) + getNumber(gridPaddingBottom));
	const x = Math.sqrt(btnValue);

	for (let i = 0; i < btnValue; i++) {
		const newPixel = document.createElement('div');
		newPixel.setAttribute('class', 'pixel');
		newPixel.style.width = `${a / x}px`;
		newPixel.style.height = `${a / x}px`;
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
