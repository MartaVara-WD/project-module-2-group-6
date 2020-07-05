'use strict';

const buttonCard = document.querySelector ('.js-share');
const buttonTwitter = document.querySelector ('.js-twitter');
const buttonContainer = document.querySelector('.form__share__button');

function createCard (ev) {
  let form = document.querySelector('form');

 if (form.checkValidity()){
   buttonContainer.classList.remove ('active');
   buttonContainer.classList.add ('inactive');
   buttonTwitter.classList.remove ('hidden');
   ev.preventDefault ();
  }
}

buttonCard.addEventListener ('click', createCard);
