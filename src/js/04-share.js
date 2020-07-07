'use strict';

const buttonCard = document.querySelector ('.js-share');
const buttonTwitter = document.querySelector ('.js-twitter');
const buttonContainer = document.querySelector ('.form__share__button');
const url = document.querySelector ('.js-twitter-url');

function getJSONFromInputs (inputs) {
  return inputs.reduce (function (acc, val) {
    if (val.nodeName !== 'BUTTON') acc[val.name] = val.value;
    return acc;
  }, {});
}

function loadPhoto () {
  var myFile = document.querySelector ('#img-selector').files[0];
  fr.addEventListener ('load', sendData);
  fr.readAsDataURL (myFile);
}

function sendData () {
  let json = getJSONFromInputs (userData);
  json.photo = fr.result;
  sendRequest (json);
}

function createCard (event) {
  buttonContainer.classList.remove ('active');
  buttonContainer.classList.add ('inactive');
  buttonTwitter.classList.remove ('hidden');
  console.log (userData);
  showURL ();
}

buttonCard.addEventListener ('click', function (event) {
  event.preventDefault ();
  fetch ('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify (userData),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then (function (resp) {
      return resp.json ();
    })
    .then (function (result) {
      showURL (result);
    })
    .catch (function (error) {
      console.log (error);
    });
});
function showURL (result) {
  console.log (result);
  if (result.success) {
    url.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    createCard ();
  } else {
    url.innerHTML = 'ERROR:' + result.error;
  }
}
