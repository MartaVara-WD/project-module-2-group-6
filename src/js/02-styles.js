'use strict';
//variables con las opciones de los colores//

const styleBlue = document.querySelector('.style-blue');
const styleRed = document.querySelector('.style-red');
const styleYellow = document.querySelector('.style-yellow');

//variables del cambio de estilos//

const colorLeftSquare = document.querySelector('.js-square');
const colorName = document.querySelector('.js-name-print');
const colorBackground = document.querySelector('.js-background');

//estos seleccionan grupos de cosas
const colorIcons = document.querySelectorAll('.js-icon');
const colorBorder = document.querySelectorAll('.js-border');

//paletas de colores
const palette1 = ['style-blue-dark', 'style-blue-medium', 'style-blue-light','style-blue-background', 'style-blue-background-icon'];
const palette2 = ['style-red-dark', 'style-red-medium', 'style-red-light', 'style-red-background', 'style-red-background-icon'];
const palette3 = ['style-yellow-dark', 'style-yellow-medium', 'style-yellow-light', 'style-yellow-background', 'style-yellow-background-icon'];

function handlerStyle() {
  //Muestra cuál es el evento actual//
  if (event.currentTarget.classList.value === 'style-blue') {
    changeColors(palette1);
    removeColors(palette2);
    removeColors(palette3);
  } else if (event.currentTarget.classList.value === 'style-red') {
    changeColors(palette2);
    removeColors(palette1);
    removeColors(palette3);
  } else if (event.currentTarget.classList.value === 'style-yellow') {
    changeColors(palette3);
    removeColors(palette1);
    removeColors(palette2);
  }
}

function changeColors(palette) {
  colorName.classList.add(palette[0]);
  colorLeftSquare.classList.add(palette[1]);
  colorBackground.classList.add(palette[3]);

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
  colorBackground.classList.remove(palette[3]);
  for (const icon of colorIcons) {
    icon.classList.remove(palette[0]);
  }
  for (const border of colorBorder) {
    border.classList.remove(palette[2]);
  }
}

//iconColorChange();


styleBlue.addEventListener('click', handlerStyle);
styleRed.addEventListener('click', handlerStyle);
styleYellow.addEventListener('click', handlerStyle);
