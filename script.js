// Fonctionnalité 1

let listenFooter = document.querySelector("footer");
let count =0;
listenFooter.addEventListener('click', function(){ count++; console.log("clique on footer : "+count)});

// Fonctionnalité 2

// let navbarHeader = document.getElementById('navbarHeader'); ou
   let navbarHeader = document.querySelector('#navbarHeader');
let hamburgerMenu = document.querySelector('button.navbar-toggler');
hamburgerMenu.addEventListener('click', function(){ navbarHeader.classList.toggle("collapse");});


// Fonctionnalité 3

let card_1 = document.querySelectorAll('div.col-md-4')[0];
let editCard_1 = document.querySelectorAll('div.col-md-4 button.btn-outline-secondary')[0];
editCard_1.addEventListener('click', function(){ card_1.style.color = 'red';});


// Fonctionnalité 4

let card_2 = document.querySelectorAll('div.col-md-4')[1];
let editCard_2 = document.querySelectorAll('div.col-md-4 button.btn-outline-secondary')[1];
editCard_2.addEventListener('click', function(){ 
    if (card_2.style.color === 'green') {card_2.style.color = '' ;}
    else {card_2.style.color = 'green';}
    });


// Fonctionnalité 5

let navBar = document.querySelector('header');
navBar.addEventListener('dblclick', function(){
    if (document.querySelector('link').disabled === true) {document.querySelector('link').disabled = false;}
    else {document.querySelector('link').disabled = true;}
});



// Fonctionnalité 6

let cards = document.getElementsByClassName("card");
let head = document.querySelector('head');
let reduced = document.createElement('style');
reduced.innerText = '.reduced img {width: 20%} .reduced .card-text {display: none}';
head.appendChild(reduced);
[...cards].forEach(c => {
  c.querySelector('.btn-success').addEventListener('mouseover', e => {
    e.composedPath()[4].classList.toggle('reduced');
  });
});


// Fonctionnalité 7

let nextBtn = document.querySelector('.jumbotron .btn-secondary');
nextBtn.addEventListener('click', () => {
  let cardCols = document.querySelectorAll('.album .col-md-4');
  cardCols[0].parentNode.insertBefore(cardCols[cardCols.length - 1], cardCols[0]);
});


// Fonctionnalité 8

let prevBtn = document.querySelector('.jumbotron .btn-primary');
prevBtn.addEventListener('click', e => {
  e.preventDefault();
  let cardCols = document.querySelectorAll('.album .col-md-4');
  cardCols[0].parentNode.appendChild(cardCols[0]);
});


// Fonctionnalité 9

let logo = document.querySelector('.navbar-brand');
logo.addEventListener('keypress', e => {
  switch (e.key) {
    case 'a':
      document.body.classList = 'col-4';
      break;
    case 'y':
      document.body.classList = 'col-4 offset-4';
      break;
    case 'p':
      document.body.classList = 'col-4 offset-8';
      break;
    case 'b':
      document.body.classList = '';
      break;
  }
})