'use strict';

const inputName = document.querySelector('.js-name');
const inputJob = document.querySelector('.js-job');
// const inputPhone = document.querySelector('.js-phone');
// const inputEmail = document.querySelector('.js-email');
// const inputLinkedin = document.querySelector('.js-linkedin');
// const inputGithub = document.querySelector('.js-github');
const printName = document.querySelector('.card__top__title__name');
const printJob = document.querySelector('.card__top__title__role');

//empty object

const userData = {};

//función que guarda los datos

function saveFormValues() {
  userData.name = inputName.value;
  userData.job = inputJob.value;
  console.log(userData.name);
  console.log(userData.job);
}

//envía los datos a la tarjeta
function sendUserData() {
  printName.innerHTML = userData.name;
  printJob.innerHTML = userData.job;
}

// esta hace magia y lo cambia en la tarjeta
function printUserData() {
  saveFormValues();
  sendUserData();
}

// inputName.addEventListener('keyup', saveFormValues);
inputName.addEventListener('keyup', printUserData);
inputJob.addEventListener('keyup', printUserData);
