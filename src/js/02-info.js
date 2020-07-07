'use strict';

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

function saveFormValues () {
  userData.name = inputName.value;
  userData.job = inputJob.value;
  userData.phone = inputPhone.value;
  userData.email = inputEmail.value;
  userData.linkedin = inputLinkedin.value;
  userData.github = inputGithub.value;
}

//envía los datos a la tarjeta
function sendUserData () {
  printName.innerHTML = userData.name;
  printJob.innerHTML = userData.job;
  printPhone.href = `tel:` + userData.phone;
  printEmail.href = `mailto:` + userData.email;
  printLinkedin.href = `https://www.linkedin.com/in/` + userData.linkedin;
  printGithub.href = `https://github.com/` + userData.github;
}

// esta hace magia y lo cambia en la tarjeta
function printUserData () {
  saveFormValues ();
  sendUserData ();
}

<<<<<<< HEAD:src/js/03-info.js
inputName.addEventListener ('keyup', printUserData);
inputJob.addEventListener ('keyup', printUserData);
inputPhone.addEventListener ('keyup', printUserData);
inputEmail.addEventListener ('keyup', printUserData);
inputLinkedin.addEventListener ('keyup', printUserData);
inputGithub.addEventListener ('keyup', printUserData);
=======
inputName.addEventListener('keyup', printUserData);
inputJob.addEventListener('keyup', printUserData);
inputPhone.addEventListener('keyup', printUserData);
inputEmail.addEventListener('keyup', printUserData);
inputLinkedin.addEventListener('keyup', printUserData);
inputGithub.addEventListener('keyup', printUserData);
>>>>>>> 5f3c870f6f2f9d256d254bb143bb79a8e19f8c37:src/js/02-info.js

// function x() {
//   let css = '.fondo';
//   if (azul.checked) {
//     css = '.azul';
//   }
//   if (verde.checked) {
//     css = '.verde';
//   }
//   if (rojo.checked) {
//     css = '.rojo';
//   }

//   if (usedata.email != '') {
//     btnemail.css.add(css);
//   } else {
//     //quitar fondo
//   }
//   if (usedata.github != '') {
//     btnemail.css.add(css);
//   } else {
//     //quitar fondo
//   }
//   if (usedata.patata != '') {
//     btnemail.css.add(css);
//   } else {
//     //quitar fondo
//   }
// }
<<<<<<< HEAD:src/js/03-info.js
=======

'use strict';

const resetButton = document.querySelector('.js-reset-button');
const form = document.querySelector('.js-form');

//limpia el formulario(no la tarjeta)
function resetForm() {
  console.log('limpia');
  form.reset();
  printUserData();
  changeColors(palette1);
  //vuelven a escribir la info por defecto de nombre y puesto
  printName.innerHTML = 'Nombre Apellido';
  printJob.innerHTML = 'Front-en developer';
  //vuelve a la imagen por defecto
  document.querySelector('.js__profile-image').removeAttribute('style');
  document.querySelector('.js__profile-preview').removeAttribute('style');
  //cierra el botón share y oculta twitter
  buttonContainer.classList.remove('inactive');
  buttonTwitter.classList.add('hidden');
}

resetButton.addEventListener('click', resetForm);
>>>>>>> 5f3c870f6f2f9d256d254bb143bb79a8e19f8c37:src/js/02-info.js
