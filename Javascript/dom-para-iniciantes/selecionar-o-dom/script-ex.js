// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll('[src^="img/imagem"]');
console.log(img);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');
console.log(h2);

// Selecione o último p do site
const paragrafo = document.querySelectorAll('p');

console.log(paragrafo[paragrafo.length - 1]);
