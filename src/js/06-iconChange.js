'use strict';

//variables para los inputs//

const inputBlue = document.querySelector('.js-input-blue');
const inputRed = document.querySelector('.js-input-red');
const inputYellow = document.querySelector('.js-input-yellow');

//variable para el fondo de los iconos

const colorIconBackgroundMail = document.querySelector('.js-background-email');
const colorIconBackgroundMobile = document.querySelector(
  '.js-background-mobile'
);
const colorIconBackgroundLinkedin = document.querySelector(
  '.js-background-linkedin'
);
const colorIconBackgroundGithub = document.querySelector(
  '.js-background-github'
);

function iconColorChange() {
  let cssColor = '';

  if (inputBlue.checked) {
    cssColor = 'style-blue-background-icon';
    // colorIconBackgroundMail.classList.toggle(cssColor);
    // colorIconBackgroundMobile.classList.toggle(cssColor);
    // colorIconBackgroundLinkedin.classList.toggle(cssColor);
    // colorIconBackgroundGithub.classList.toggle(cssColor);
  }
}
