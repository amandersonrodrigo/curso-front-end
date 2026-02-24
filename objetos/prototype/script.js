function Pessoa(nome, idade) {
   this.nome = nome;
   this.idade = idade;
   this.abracar = function() {
      return 'Abraçou';
   }
   this.andar = function() {
      return 'Andou pelo objeto';
   }
}

Pessoa.prototype.andar = function() {
   return `${this.nome} andou`;
}

Pessoa.prototype.nadar = function() {
   return `${this.nome} nadou`;
}

const amanderson = new Pessoa('Amanderson', 28);

// console.log(Pessoa.prototype);
// console.log(amanderson.andar());
// console.log(amanderson.nadar());

const pais = 'Brasil';
const cidade = new String('Natal');

// const listaAnimais = ['Cachorro', 'Gato', 'Peixe'];
// console.log(listaAnimais)

const lista = document.querySelectorAll('li');

// Tranforma em uma array
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);
console.log(listaArray);
console.log(listaArray2);

Object.getOwnPropertyNames(Array);
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype))

