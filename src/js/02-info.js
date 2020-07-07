'use strict';

let number = 1;

//variables con las opciones de los colores//

const styleBlue = document.querySelector ('.style-blue');
const styleRed = document.querySelector ('.style-red');
const styleYellow = document.querySelector ('.style-yellow');

//variables del cambio de estilos//

const colorLeftSquare = document.querySelector ('.js-square');
const colorName = document.querySelector ('.js-name-print');
const colorBackground = document.querySelector ('.js-background');

//estos seleccionan grupos de cosas
const colorIcons = document.querySelectorAll ('.js-icon');
const colorBorder = document.querySelectorAll ('.js-border');

//paletas de colores
const palette1 = [
  'style-blue-dark',
  'style-blue-medium',
  'style-blue-light',
  'style-blue-background',
  'style-blue-background-icon',
];
const palette2 = [
  'style-red-dark',
  'style-red-medium',
  'style-red-light',
  'style-red-background',
  'style-red-background-icon',
];
const palette3 = [
  'style-yellow-dark',
  'style-yellow-medium',
  'style-yellow-light',
  'style-yellow-background',
  'style-yellow-background-icon',
];

function handlerStyle () {
  iconChangeBlue ();
  iconChangeRed ();
  iconChangeYellow ();

  //Muestra cuál es el evento actual//
  if (event.currentTarget.classList.value === 'style-blue') {
    number = 1;
    changeColors (palette1);
    removeColors (palette2);
    removeColors (palette3);
  } else if (event.currentTarget.classList.value === 'style-red') {
    number = 2;
    changeColors (palette2);
    removeColors (palette1);
    removeColors (palette3);
  } else if (event.currentTarget.classList.value === 'style-yellow') {
    number = 3;
    changeColors (palette3);
    removeColors (palette1);
    removeColors (palette2);
  }
}

function changeColors (palette) {
  colorName.classList.add (palette[0]);
  colorLeftSquare.classList.add (palette[1]);
  colorBackground.classList.add (palette[3]);

  for (const icon of colorIcons) {
    icon.classList.add (palette[0]);
  }
  for (const border of colorBorder) {
    border.classList.add (palette[2]);
  }
}

function removeColors (palette) {
  colorName.classList.remove (palette[0]);
  colorLeftSquare.classList.remove (palette[1]);
  colorBackground.classList.remove (palette[3]);
  for (const icon of colorIcons) {
    icon.classList.remove (palette[0]);
  }
  for (const border of colorBorder) {
    border.classList.remove (palette[2]);
  }
}

//iconColorChange();

styleBlue.addEventListener ('click', handlerStyle);
styleRed.addEventListener ('click', handlerStyle);
styleYellow.addEventListener ('click', handlerStyle);

const inputName = document.querySelector ('.js-name');
const inputJob = document.querySelector ('.js-job');
const inputPhone = document.querySelector ('.js-phone');
const inputEmail = document.querySelector ('.js-email');
const inputLinkedin = document.querySelector ('.js-linkedin');
const inputGithub = document.querySelector ('.js-github');
const printPhone = document.querySelector ('.js-phone-icon');
const printName = document.querySelector ('.card__top__title__name');
const printJob = document.querySelector ('.card__top__title__role');
const printEmail = document.querySelector ('.js-email-icon');
const printLinkedin = document.querySelector ('.js-linkedin-print');
const printGithub = document.querySelector ('.js-github-print');

//empty object

const userData = {};

//función que guarda los datos

function saveFormValues() {
  userData.name = inputName.value;
  userData.job = inputJob.value;
  userData.phone = inputPhone.value;
  userData.email = inputEmail.value;
  userData.linkedin = inputLinkedin.value;
  userData.github = inputGithub.value;
  userData.palette = number;
  userData.photo = fr.result;
}

//envía los datos a la tarjeta
function sendUserData() {
  printName.innerHTML = userData.name;
  printJob.innerHTML = userData.job;
  printPhone.href = `tel:` + userData.phone;
  printEmail.href = `mailto:` + userData.email;
  printLinkedin.href = `https://www.linkedin.com/in/` + userData.linkedin;
  printGithub.href = `https://github.com/` + userData.github;
}

// esta hace magia y lo cambia en la tarjeta
function printUserData() {
  saveFormValues();
  sendUserData();
}

inputName.addEventListener ('keyup', printUserData);
inputJob.addEventListener ('keyup', printUserData);
inputPhone.addEventListener ('keyup', printUserData);
inputEmail.addEventListener ('keyup', printUserData);
inputLinkedin.addEventListener ('keyup', printUserData);
inputGithub.addEventListener ('keyup', printUserData);

const resetButton = document.querySelector ('.js-reset-button');
const form = document.querySelector ('.js-form');

//limpia el formulario(no la tarjeta)
function resetForm() {
  form.reset();

  // función que imprime la info en la tarjeta
  printUserData();
  changeColors(palette1);
  removeColors(palette2);
  removeColors(palette3);
  //vuelven a escribir la info por defecto de nombre y puesto
  printName.innerHTML = 'Nombre Apellido';
  printJob.innerHTML = 'Front-en developer';
  //vuelve a la imagen por defecto
  document.querySelector ('.js__profile-image').removeAttribute ('style');
  document.querySelector ('.js__profile-preview').removeAttribute ('style');
  //cierra el botón share y oculta twitter
  buttonContainer.classList.remove('inactive');
  buttonTwitter.classList.add('hidden');

  //funciones que borran los styles de los fondos
  iconChangeBlue();
  iconChangeRed();
  iconChangeYellow();
}
resetButton.addEventListener ('click', resetForm);
