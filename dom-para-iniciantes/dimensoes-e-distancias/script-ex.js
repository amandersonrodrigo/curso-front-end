// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img');
const distancia = img.offsetTop;
console.log(distancia);

// Retorne a soma da largura de todas as imagens

function somaLargura() {
   let soma = 0;
   const imgs = document.querySelectorAll('img');
   imgs.forEach((imagem) => {
      soma += imagem.offsetWidth
   });
   console.log(soma);
}

window.onload = function () {
   somaLargura();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
   const larguraLink = link.offsetWidth;
   const alturaLink = link.offsetHeight;
   if(larguraLink >= 48 && alturaLink >= 48){
      console.log(link, 'Possui boa acessibilidade!')
   } else {
      console.log(link, 'NÃO Possui boa acessibilidade!')
   }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia('(max-width: 720px)').matches;
const menu = document.querySelector('.menu');

if (browser) {
   menu.classList.add('menu-mobile');
}