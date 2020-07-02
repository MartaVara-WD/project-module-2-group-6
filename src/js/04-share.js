'use strict';

const buttonCard = document.querySelector ('.js-share');
const buttonTwitter = document.querySelector ('.js-twitter');

function createCard (ev) {
  ev.preventDefault ();
  buttonCard.classList.remove ('active');
  buttonCard.classList.add ('inactive');
  buttonTwitter.classList.remove ('hidden');
}

buttonCard.addEventListener ('click', createCard);
