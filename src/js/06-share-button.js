'use strict';

function buttonActive() {
  let inputValueEmail = input.email.value;
  let inputValueGithub = input.github.value;
  let inputValuePhone = input.phone.value;
  let inputValueLinkedin = input.linkedin.value;

  if (
    inputValueEmail !== 0 &&
    inputValueGithub !== 0 &&
    inputValuePhone !== 0 &&
    inputValueLinkedin !== 0
  ) {
    buttonCard.classList.add('active');
    buttonCard.classList.remove('inactive');
  }
}
