function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 3000);
const fiat = new Carro("Fiat", 4000);
console.log(honda);
console.log(fiat);

// O this faz referência ao próprio objeto construído com a Constructor Function.

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const mazda = new Carro2("Mazda", 5000);
// console.log(mazda)
