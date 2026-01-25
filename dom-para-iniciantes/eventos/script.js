const img = document.querySelector('img');

function callback(event) {
   console.log(event);
}

// img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(e) {
   console.log(e.currentTarget);
   console.log(e.target);
   console.log(e.type);
}

// animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
   event.preventDefault();
   // console.log(event);
   console.log(this);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
   console.log(event.type, event); 
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function hadleKeyboard(event) {
   if(event.key === 'a') {
      document.body.classList.toggle('azul');
   }
}

window.addEventListener('keydown', hadleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
   console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) => {
   img.addEventListener('click', handleImg)
});
