'use strict';
const styles = document.querySelector('.styles');
const style1 = document.querySelector('.style1');
const style2 = document.querySelector('.style2');
const style3 = document.querySelector('.style3');

function handlerStyle() {
    //Muestra cuál es el evento actual//
  console.log(event.currentTarget.classList);
  if(event.currentTarget.classList.value === 'style1'){
    console.log(`Ha elegido el estilo 1`);
  } else if(event.currentTarget.classList.value === 'style2') {
    console.log(`Ha elegido el estilo 2`);
  } else if(event.currentTarget.classList.value === 'style3')
    console.log(`Ha elegido el estilo 3`);
}

style1.addEventListener ('click', handlerStyle);
style2.addEventListener ('click', handlerStyle);
style3.addEventListener ('click', handlerStyle);