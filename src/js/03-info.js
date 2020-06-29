'use strict';

const inputName = document.querySelector('.js-name');
const inputJob = document.querySelector('.js-job');
const inputPhone = document.querySelector('.js-phone');
const inputEmail = document.querySelector('.js-email');
const inputLinkedin = document.querySelector('.js-linkedin');
// const inputGithub = document.querySelector('.js-github');
const printPhone = document.querySelector('.js-phone-icon');
const printName = document.querySelector('.card__top__title__name');
const printJob = document.querySelector('.card__top__title__role');
const printEmail = document.querySelector('.js-email-icon');
const printLinkedin = document.querySelector('.js-linkedin-icon');

//empty object

const userData = {};

//función que guarda los datos

function saveFormValues() {
  userData.name = inputName.value;
  userData.job = inputJob.value;
  userData.phone = inputPhone.value;
  userData.email = inputEmail.value;
  userData.linkedin = inputLinkedin.value;

  console.log(userData.name);
  console.log(userData.job);
  console.log(userData.phone);
  console.log(userData.email);
  console.log(userData.linkedin);
}

//envía los datos a la tarjeta
function sendUserData() {
  printName.innerHTML = userData.name;
  printJob.innerHTML = userData.job;
  printPhone.href = `tel:` + userData.phone;
  printEmail.href = `mailto:` + userData.email;
  printLinkedin.href = `https://es.linkedin.com/` + userData.linkedin;
}

// esta hace magia y lo cambia en la tarjeta
function printUserData() {
  saveFormValues();
  sendUserData();
}

// inputName.addEventListener('keyup', saveFormValues);
inputName.addEventListener('keyup', printUserData);
inputJob.addEventListener('keyup', printUserData);
inputPhone.addEventListener('keyup', printUserData);
inputEmail.addEventListener('keyup', printUserData);
inputLinkedin.addEventListener('keyup', printUserData);
