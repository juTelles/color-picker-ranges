window.addEventListener('load', start);

const redSlider = document.querySelector('#red');
const greenSlider = document.querySelector('#green');
const blueSlider = document.querySelector('#blue');
const background = document.querySelector('#container');

function start() {
  redSlider.addEventListener('input', activeColorMachine);
  greenSlider.addEventListener('input', activeColorMachine);
  blueSlider.addEventListener('input', activeColorMachine);
  background.addEventListener('change', changeBalls);
}

function activeColorMachine() {
  function fillSquare(color, slider) {
    const colorValue = slider.value;
    const square = document.querySelector('#' + color + 'Square');
    square.value = colorValue;
  }
  fillSquare('red', redSlider);
  fillSquare('green', greenSlider);
  fillSquare('blue', blueSlider);

  function fillBackground() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
    background.style.background = rgb;
  }
  fillBackground();
}
function changeBalls() {
  const ballsArray = document.querySelectorAll('.balls');
  const colorsArray = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#B3B31A',
    '#00E680',
    '#4D8066',
    '#809980',
    '#E6FF80',
    '#1AFF33',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
  ];
  const colorsLen = colorsArray.length;

  ballsArray.forEach((ball) => {
    const color = Math.floor(Math.random() * colorsLen);
    ball.style.background = colorsArray[color];
  });
}
