var kortit = document.querySelectorAll('.kortti, .kortti6'); //Poimii kaikki class "kortti" ja "kortti6" elementit
var kaannetty = false;
var lukitse = false;
var ekaKortti, tokaKortti;
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
  if (lukitse) return;
  this.classList.add('kaanto'); //Tapahtuu kaanto-classiin määritellyt asiat
  if (!kaannetty){
    kaannetty = true;
    ekaKortti = this;
    return;
  }
    tokaKortti = this;
    kaannetty = false;

onkoParit();
}

//Onko kortit parit
function onkoParit(){
var onkoPari = ekaKortti.dataset.framework === tokaKortti.dataset.framework;
onkoPari ? poistaKortit(): kaannaTakaisin();
}
function poistaKortit(){
  //On parit
  ekaKortti.removeEventListener("click", kaanna);
  tokaKortti.removeEventListener("click", kaanna);
  //console.log("ei pysty painaa uudestaan");
}

  //Ei ole parit
  function kaannaTakaisin(){
  setTimeout(() => {
  ekaKortti.classList.remove('kaanto');
  tokaKortti.classList.remove('kaanto');
}, 1500);
  }


//Kutsuu jokaista elementtiä erikseen ja lisää kaikille "tapahtuman" eli klikatessa alkaa funktio kaanna
kortit.forEach(kortti => kortti.addEventListener('click', kaanna));
