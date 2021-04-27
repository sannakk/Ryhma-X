var kortit = document.querySelectorAll('.kortti, .kortti6'); //Poimii kaikki class "kortti" ja "kortti6" elementit
var laskuri = 0;
console.log(kortit);

//Kortin kääntäminen
function kaanna(){
  this.classList.toggle('kaanto'); //Tapahtuu kaanto-classiin määritellyt asiat
console.log('click');
}

//Kutsuu jokaista elementtiä erikseen ja lisää kaikille "tapahtuman" eli klikatessa alkaa funktio kaanna
kortit.forEach(kortti => kortti.addEventListener('click', kaanna));
