// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');
// console.log(paragrafos);

paragrafos.forEach((paragrafo) => {
  console.log(paragrafo);
});


// Mostre o texto dos parágrafos no console
paragrafos.forEach((paragrafo) => {
  console.log(paragrafo.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  // console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  // console.log(i++);
});

imgs.forEach(() => i++);