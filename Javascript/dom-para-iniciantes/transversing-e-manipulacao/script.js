// const h1 = document.querySelector('.titulo');
// console.log(h1.innerText);

const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement); // pega o elemento Pai
// console.log(lista.parentElement.parentElement); pega o elemento Pai do pai
// console.log(lista.previousElementSibling)  elemento acima do mesmo nivel
// console.log(lista.nextElementSibling); elemento abaixo do mesmo nivel

// console.log(lista.children); HTMLCollection com os filhos
// console.log(lista.children[0]); Primeiro Filho
// console.log(lista.children[lista.children.length - 1]); // Ultimo filho

// console.log(lista.childNodes); todos os nodes (nó's) filhos
// console.log(lista.previousSibling) node acima
// console.log(lista.nextSibling) node abaixo

// Geralmente estamos atrás de um elemento e não de qualquer node em si.

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// animais.appendChild(titulo) // move o titulo como o ultimo filho de animais

// contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo titulo';
// novoH1.classList.add('titulo')

// contato.appendChild(novoH1);

// const titulo = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = titulo;

// titulo, titulo2 e novoTitulo são iguais

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul')
faq.appendChild(cloneH1);