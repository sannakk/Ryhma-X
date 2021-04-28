var kortit = document.querySelectorAll('.kortti, .kortti6'); //Poimii kaikki class "kortti" ja "kortti6" elementit
var kaannetty = false;
var eka, toka;
//var napautukset = 0;
//var aikaa = setInterval(ajanLasku, 1000);
//var sekunnit = 0;
//console.log(kortit);

/*function ajanLasku(){
  sekunnit++;
  var sek = sekunnit -
  var min =
  //document.getElementById("aika").innerHTML = sekunnit;
console.log(sekunnit);
}*/

//Kortin kääntäminen
function kaanna(){
  this.classList.add('kaanto'); //Tapahtuu kaanto-classiin määritellyt asiat
  if (!kaannetty){
    kaannetty = true;
    eka = this;
  }else{
    kaannetty = false;
    toka = this;
    console.log({kaannetty, toka});
  }
}

//Kutsuu jokaista elementtiä erikseen ja lisää kaikille "tapahtuman" eli klikatessa alkaa funktio kaanna
kortit.forEach(kortti => kortti.addEventListener('click', kaanna));
