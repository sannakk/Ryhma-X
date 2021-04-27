//Kortin kääntö
var kortit = document.querySelectorAll('.kortti, .kortti6');
var laskuri = 0;
console.log(kortit);

function kaanna(){
console.log('click');
}

kortit.forEach(kort => kort.addEventListener('click', kaanna));
