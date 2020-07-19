let red = document.querySelector('#red');
let redValue = red.value;

let redSquare = document.querySelector('#redSquare');
redSquare.textContent = redValue; 

let balls = Array.from(document.querySelectorAll('.balls'));
balls.forEach(a = (item) => {item.classList.remove('balls')});
console.log(balls);

const squareFill = elem => {
  
}