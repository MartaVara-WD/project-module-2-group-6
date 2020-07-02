'use strict';

const buttonCard = document.querySelector ('.js-share');
const buttonTwitter = document.querySelector ('.js-twitter');
const buttonContainer = document.querySelector('.form__share__button');

function createCard (ev) {
  ev.preventDefault ();
  buttonContainer.classList.remove ('active');
  buttonContainer.classList.add ('inactive');
  buttonTwitter.classList.remove ('hidden');
}

buttonCard.addEventListener ('click', createCard);
