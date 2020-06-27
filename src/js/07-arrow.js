'use strict';
console.log(07);

const click = document.querySelector('.click');
const section = document.querySelector('.colors-container');
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');

function displayArrow() {
    console.log('click');
    section.classList.toggle('hidden');
    arrowUp.classList.toggle('hidden');
    arrowDown.classList.toggle('hidden');


}

click.addEventListener ('click', displayArrow);