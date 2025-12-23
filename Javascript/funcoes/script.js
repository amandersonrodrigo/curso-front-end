// function areaQuadrado(lado) {
//    return lado * lado;
// }

// console.log(areaQuadrado(10));


 function imc (peso, altura) {
   var imc = peso / (altura * altura);
   return imc;
 }
 imc(60, 1.63);
 console.log(imc(60, 1.63));

 function corFavorita(cor) {
   if (cor === 'azul') {
      return 'Eu gosto do céu'
   } else if (cor === 'verde') {
      return 'Eu gosto da floresta'
   } else {
      return 'Não gosto de porra nenhuma'
   }
 }

 corFavorita('verde');
 console.log(corFavorita('verde'));

//  addEventListener('click', function() {
//    console.log('clicou');
//  }) 

  function imc2 (peso, altura) {
   const imc = peso / (altura * altura);
   return imc;
 }

 imc2(60, 1.63);
 console.log(imc2(60, 1.63));

 function terceiraIdade(idade) {
   console.log(typeof idade);
   if (typeof idade !== 'number' ) {
      return 'Por favor, digite um número válido!'
   } else if (idade >= 60) {
      return true;
   } else {
      return false;
   }
 }

 console.log(terceiraIdade('olá'));

 function faltaVisitar(paisesVisitados) {
   var totalPaises = 193;
   return `Faltam visitar ${totalPaises - paisesVisitados} países`
 }

 console.log(faltaVisitar(2));

 var profissao = 'Desenvolvedor'

 function dados() {
   var nome = 'Amanderson';
   var idade = 30;
   function outrosDados() {
      var endereco = 'São Paulo';
      var idade = 28;
      return `${nome}, ${idade}, ${endereco}, ${profissao}`;
   }
   return outrosDados();
 }

 console.log(dados());

 
