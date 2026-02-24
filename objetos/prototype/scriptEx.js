// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
   this.nome = nome;
   this.sobrenome = sobrenome;
   this.idade = idade;
}

Pessoa.prototype.retornaNome = function() {
   return `${this.nome} ${this.sobrenome}`;
};

const amanderson = new Pessoa('Amanderson', 'Rodrigo', 28);

console.log(amanderson.retornaNome());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// li.click.constructor.name

li; // HTMLLIElement
li.click; // Função 
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; //Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String