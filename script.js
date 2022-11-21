// Fonctionnalité 1

let listenFooter = document.querySelector("footer");
let count =0;
listenFooter.addEventListener('click', function(){ count++; console.log("clique on footer : "+count)});

// Fonctionnalité 2

let navbarHeader = document.getElementById('navbarHeader');
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


