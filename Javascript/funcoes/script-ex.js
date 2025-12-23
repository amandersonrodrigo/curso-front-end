// Crie uma função para verificar se um valor é Truthy
function souBonito(bonito) {
   return !!bonito;;
}

console.log(souBonito('sim'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
   var soma = 4 * lado;
   return soma;
}

console.log(perimetroQuadrado(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function meuNome(nome, sobrenome) {
  return `Meu nome completo é ${nome} ${sobrenome}.` 
}

console.log(meuNome('Amanderson', 'Rodrigo'));

// Crie uma função que verifica se um número é par

function parOuImpar(n) {
   if (n === 0) {
     return `O número ${n} é Par e também é considerado Neutro!`; 
   }
   else if (n % 2 === 0) {
      return `O número ${n} é Par!`;
   } else if (n === undefined) {
      return `Defina um número válido`;
   } else if (typeof n !== 'number') {
      return `Defina um número válido`;
   }
    else {
      return `O número ${n} é Ímpar!`;
   }
}

console.log(parOuImpar(9));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
   return typeof dado;
}
console.log(tipoDeDado(24));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

// addEventListener('click', function(){
//    console.log('Amanderson Rodrigo');
// });

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

console.log(precisoVisitar(20));
console.log(jaVisitei(20));