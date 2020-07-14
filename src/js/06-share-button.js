'use strict';

function buttonActive() {
  let inputValueEmail = input.email.value;
  let inputValueGithub = input.github.value;
  let inputValuePhone = input.phone.value;
  let inputValueLinkedin = input.linkedin.value;

  if (
    inputValueEmail.length !== 0 &&
    inputValueGithub.length !== 0 &&
    inputValuePhone.length !== 0 &&
    inputValueLinkedin.length !== 0
  ) {
    buttonCard.classList.add('active');
    buttonCard.classList.remove('inactive');
  }
}
