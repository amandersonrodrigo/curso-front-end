// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const meusDados = {
   nome: 'Amanderson',
   sobrenome: 'Rodrigo',
   idade: 28,
   endereco: 'Rua serra Roraima',
}
console.log(meusDados.nome);

// Crie um método no objeto anterior, que mostre o seu nome completo
   meusDados.nomeCompleto = function () {
      return `${this.nome} ${this.sobrenome}`;
   }
   console.log(meusDados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
   raca: 'labrador',
   cor: 'preto',
   idade: 10,
   latir(pessoa) {
      if(pessoa === 'homem') {
         return 'latir';
      } else {
         return 'Nada';
      }
   }
}

console.log(cachorro.latir('homem'));