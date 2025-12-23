const pessoa = {
   nome: 'Amanderson',
   sobrenome: 'Rodrigo',
   idade: 28,
   possuiFaculdade: true,
}

console.log(pessoa.nome);

// Método --> É uma propriedade que possui uma função no local do seu valor.
const quadrado = {
   lados: 4,
   area: function(lado) {
     return lado * lado;
   },
   perimetro: function(lado) {
      return this.lados * lado;
   },
   cinco() { // Nova maneira de escrever função dentro do objeto no ES6.
      return 5;
   }
}

console.log(quadrado.cinco());

let numero = Math.random() * 6;

console.log(Math.ceil(numero));

const menu = {
   width: 800,
   height: 50,
   backgroundColor: '#84e',
   metadeHeight() {
      return this.height / 2;
   }
}

menu.backgroundColor = '#000';
const bg = menu.backgroundColor;

menu.color = 'blue'

console.log(menu.metadeHeight());

console.log(menu.hasOwnProperty('hasOwnProperty'));

