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

//funciones para añadir colores//
function changeColors(color1, color2, color3, color4) {
  colorName.classList.add(color1);
  colorLeftSquare.classList.add(color2);
  colorBackground.classList.add(color4);

  for (const icon of colorIcons) {
    icon.classList.add(color1);
  }
  for (const border of colorBorder) {
    border.classList.add(color3);
  }
}
//funciones para quitar los colores //
function removeColors(color1, color2, color3, color4) {
  colorName.classList.remove(color1);
  colorLeftSquare.classList.remove(color2);
  colorBackground.classList.remove(color4);

  for (const icon of colorIcons) {
    icon.classList.remove(color1);
  }
  for (const border of colorBorder) {
    border.classList.remove(color3);
  }
}

function removeColors2(color1, color2, color3, color4) {
  colorName.classList.remove(color1);
  colorLeftSquare.classList.remove(color2);
  colorBackground.classList.remove(color4);

  for (const icon of colorIcons) {
    icon.classList.remove(color1);
  }
  for (const border of colorBorder) {
    border.classList.remove(color3);
  }
}

//Muestra los cambios en la tarjeta, según el color elegido y elimina las demás opciones//

function handlerStyle() {
  if (event.currentTarget.classList.value === 'style-blue') {
    changeColors(
      'style-blue-dark',
      'style-blue-medium',
      'style-blue-light',
      'style-blue-background'
    );
    removeColors(
      'style-red-dark',
      'style-red-medium',
      'style-red-light',
      'style-red-background'
    );
    removeColors2(
      'style-yellow-dark',
      'style-yellow-medium',
      'style-yellow-light',
      'style-yellow-background'
    );
  } else if (event.currentTarget.classList.value === 'style-red') {
    changeColors(
      'style-red-dark',
      'style-red-medium',
      'style-red-light',
      'style-red-background'
    );

    removeColors(
      'style-blue-dark',
      'style-blue-medium',
      'style-blue-light',
      'style-blue-background'
    );

    removeColors2(
      'style-yellow-dark',
      'style-yellow-medium',
      'style-yellow-light',
      'style-yellow-background'
    );
  } else if (event.currentTarget.classList.value === 'style-yellow') {
    changeColors(
      'style-yellow-dark',
      'style-yellow-medium',
      'style-yellow-light',
      'style-yellow-background'
    );
    removeColors(
      'style-blue-dark',
      'style-blue-medium',
      'style-blue-light',
      'style-blue-background'
    );
    removeColors2(
      'style-red-dark',
      'style-red-medium',
      'style-red-light',
      'style-red-background'
    );
  }
  iconColorChange();
}

styleBlue.addEventListener('click', handlerStyle);
styleRed.addEventListener('click', handlerStyle);
styleYellow.addEventListener('click', handlerStyle);
