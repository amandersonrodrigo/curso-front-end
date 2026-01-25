// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');

function handleAtivo(evento) {
   evento.preventDefault();
   links.forEach((link) => {
      link.classList.remove('ativo')
   });
   evento.currentTarget.classList.add('ativo');
} 

links.forEach((link) => {
   link.addEventListener('click', handleAtivo)
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElement = document.querySelectorAll('body *');

function handleElemento(evento) {
   // console.log(evento.currentTarget);
}

todosElement.forEach((elemento) => {
   elemento.addEventListener('click', handleElemento);
});

console.log(todosElement);


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleElemento(evento) {
   // evento.currentTarget.remove();
}


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
   if(event.key === 't' || event.key === 'T') {
      document.documentElement.classList.toggle('textomaior');
   }
}

window.addEventListener('keydown', handleClickT);