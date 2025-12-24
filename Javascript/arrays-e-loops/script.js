var videoGames = ['Switch', 'PS5', 'Xbox'];
console.log(videoGames);

let ultimoItem = videoGames.pop();
console.log(ultimoItem);

videoGames.push('3DS');
console.log(videoGames);

console.log(videoGames.length);

for (let i = 1; i <= 10; i++) {
   console.log(i);
}

let i = 0;
while (i <= 10) {
   console.log(i);
   i+=2;
}

var videoGames = ['Switch', 'PS5', 'Xbox', '3DS'];

for(let i = 0; i < videoGames.length; i++) {
   console.log(videoGames[i]);
   if(videoGames[i] === 'PS5') {
      break;
   }
}

videoGames.forEach(function() {
   console.log('Oi')
})

let frutas = ['Banana', 'Maçã', 'Pera', 'Abacaxi'];

frutas.forEach(function(item, index) {
   console.log(item, index);
})