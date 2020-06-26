'use strict';
console.log(07);

const click = document.querySelector('.arrow');
const section = document.querySelector('.colors-container');

function displayArrow() {
    console.log('click');
    section.classList.toggle('hidden');
}

click.addEventListener ('click', displayArrow);