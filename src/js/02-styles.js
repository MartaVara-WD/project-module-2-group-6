'use strict';
const styleBlue = document.querySelector('.style1');
const styleRed = document.querySelector('.style2');
const styleYellow = document.querySelector('.style3');
//variables del cambio de estilos//
const colorLeftSquare = document.querySelector('.js-square');
const colorName = document.querySelector('.js-name-print');
const colorIcons = document.querySelectorAll('.js-icon');
const colorBorder = document.querySelectorAll('.js-border');
const palette1 = ['dark-blue', 'medium-blue', 'light-blue'];
const palette2 = ['dark-red', 'medium-red', 'light-red'];
const palette3 = ['dark-blue-2', 'medium-yellow', 'light-blue-2'];

function handlerStyle() {
  //Muestra cuál es el evento actual//
  if (event.currentTarget.classList.value === 'style1') {
    changeColors(palette1);
    removeColors(palette2);
    removeColors(palette3);
  } else if (event.currentTarget.classList.value === 'style2') {
    changeColors(palette2);
    removeColors(palette1);
    removeColors(palette3);
  } else if (event.currentTarget.classList.value === 'style3') {
    changeColors(palette3);
    removeColors(palette1);
    removeColors(palette2);
  }
}

function changeColors(palette) {
  colorName.classList.add(palette[0]);
  colorLeftSquare.classList.add(palette[1]);
  for (const icon of colorIcons) {
    icon.classList.add(palette[0]);
  }
  for (const border of colorBorder) {
    border.classList.add(palette[2]);
  }
}

function removeColors(palette) {
  colorName.classList.remove(palette[0]);
  colorLeftSquare.classList.remove(palette[1]);
  for (const icon of colorIcons) {
    icon.classList.remove(palette[0]);
  }
  for (const border of colorBorder) {
    border.classList.remove(palette[2]);
  }
}

styleBlue.addEventListener('click', handlerStyle);
styleRed.addEventListener('click', handlerStyle);
styleYellow.addEventListener('click', handlerStyle);
