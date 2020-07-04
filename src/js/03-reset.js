'use strict';

const resetButton = document.querySelector('.js-reset-button');
const form = document.querySelector('.js-form');

//limpia el formulario(no la tarjeta)
function resetForm() {
  console.log('limpia');
  debugger;
  form.reset();
  printUserData();
  changeColors(palette1);
}

resetButton.addEventListener('click', resetForm);

