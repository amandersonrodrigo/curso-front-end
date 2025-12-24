function mostrarCarro() {
   let carro = 'Fusca';
   return carro;
}

console.log(mostrarCarro());

if(true) {
   const mes = 'Março';
   console.log(mes);
}

// console.log(mes);

{
   var carro =  'BMW';
   const ano = 2025;
}

console.log(carro);
// console.log(ano);

const semana = 'Sexta';
// semana = 'Quinta';
console.log(semana);

const data = {
   ano: 2025,
   mes: 'março',
}
data.ano = 2026;

data.dia = 'Domingo';
console.log(data);

let ano;
ano = 2025;
ano++;
console.log(ano);