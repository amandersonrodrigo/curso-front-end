const href = window.location.href;

console.log(href);

const titulo = document.querySelector("h1");

titulo.style.color = 'green';

function callbackH1() {
   console.log('Clicou em ', titulo.innerText);
}

titulo.addEventListener('click', callbackH1);