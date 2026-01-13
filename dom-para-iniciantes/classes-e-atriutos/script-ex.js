// Adicione a classe ativo a todos os itens do menu

const ativo = document.querySelectorAll('.menu a');
ativo.forEach((item) => {
   item.classList.add('ativo')
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

ativo.forEach((item) => {
   item.classList.remove('ativo')
});
ativo[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
   const possuiAlt = item.hasAttribute('alt')
   console.log(item, possuiAlt);
});

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'https://www.google.com');
console.log(linkExterno);
