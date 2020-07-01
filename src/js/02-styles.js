'use strict';
const styleBlue = document.querySelector('.style1');
const styleRed = document.querySelector('.style2');
const styleYellow = document.querySelector('.style3');
//variables del cambio de estilos//
const colorLeftSquare = document.querySelector('.js-square');
const colorName = document.querySelector('.js-name-print');
const colorIcons = document.querySelectorAll('.js-icon');
const colorBorder = document.querySelectorAll('.js-border');
function handlerStyle() {
  //Muestra cuál es el evento actual//
  console.log(event.currentTarget.classList);
  if (event.currentTarget.classList.value === 'style1') {
    console.log('Ha elegido el estilo 1');
    changeColors('dark-blue', 'medium-blue', 'light-blue');
    removeColors('dark-red', 'medium-red', 'light-red');
    removeColors2('dark-blue-2', 'medium-yellow', 'light-blue-2');
  } else if (event.currentTarget.classList.value === 'style2') {
    console.log('Ha elegido el estilo 2');
    changeColors('dark-red', 'medium-red', 'light-red');
    removeColors('dark-blue', 'medium-blue', 'light-blue');
    removeColors2('dark-blue-2', 'medium-yellow', 'light-blue-2');
  } else if (event.currentTarget.classList.value === 'style3') {
    console.log('Ha elegido el estilo 2');
    changeColors('dark-blue-2', 'medium-yellow', 'light-blue-2');
    removeColors('dark-blue', 'medium-blue', 'light-blue');
    removeColors2('dark-red', 'medium-red', 'light-red');
  }
}
function changeColors(color1, color2, color3) {
  colorName.classList.add(color1);
  colorLeftSquare.classList.add(color2);

  for (const icon of colorIcons) {
    icon.classList.add(color1);
  }
  for (const border of colorBorder) {
    border.classList.add(color3);
  }
}

function removeColors(color1, color2, color3) {
  colorName.classList.remove(color1);
  colorLeftSquare.classList.remove(color2);

  for (const icon of colorIcons) {
    icon.classList.remove(color1);
  }
  for (const border of colorBorder) {
    border.classList.remove(color3);
  }
}

function removeColors2(color1, color2, color3) {
  colorName.classList.remove(color1);
  colorLeftSquare.classList.remove(color2);

  for (const icon of colorIcons) {
    icon.classList.remove(color1);
  }
  for (const border of colorBorder) {
    border.classList.remove(color3);
  }
}

styleBlue.addEventListener('click', handlerStyle);
styleRed.addEventListener('click', handlerStyle);
styleYellow.addEventListener('click', handlerStyle);
