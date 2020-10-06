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
  const balls = document.querySelectorAll('.balls');

  balls.forEach((ball) => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
    ball.style.background = rgb;
  });
}
