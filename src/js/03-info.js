"use strict";

const inputName = document.querySelector(".js-name");
const inputJob = document.querySelector(".js-job");
// const inputPhone = document.querySelector(".js-phone");
// const inputEmail = document.querySelector(".js-email");
// const inputLinkedin = document.querySelector(".js-linkedin");
// const inputGithub = document.querySelector(".js-github");
const printName = document.querySelector(".card__top__title__name");

//empty object

const userData = {};

//función que guarda los datos

function saveFormValues(ev) {
  userData.name = ev.currentTarget.value;
  console.log(userData.name);
}

//envía los datos a la tarjeta
function sendUserData() {
  printName.innerHTML = userData.name;
}

// esta hace magia y lo cambia en la tarjeta
function printUserData(ev) {
  saveFormValues(ev);
  sendUserData();
}

// inputName.addEventListener("keyup", saveFormValues);
inputName.addEventListener("keyup", printUserData);
