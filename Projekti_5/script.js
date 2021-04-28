var kortit = document.querySelectorAll('.kortti, .kortti6'); //Poimii kaikki class "kortti" ja "kortti6" elementit
var kaannetty = false; // Kortin kääntö
var lukitus = false; // Lukitus että ei tapahdu mtn ennen kun kortit on kääntynyt takaisin tai pari
var ekaKortti, tokaKortti;
//var napautukset = 0;
//var aikaa = setInterval(ajanLasku, 1000);
//var sekunnit = 0;


/*function ajanLasku(){
  sekunnit++;
  var sek =
  var min =
  //document.getElementById("aika").innerHTML = ;
console.log(sekunnit);
}*/

// Kortin kääntäminen
function kaanna(){
  if (lukitus) return; // Jos lukitus epätosi niin palaa
  if (this === ekaKortti) return; // Jos on eka kortti valittuna -> palaa
  this.classList.add('kaanto'); //Tapahtuu kaanto-classiin määritellyt asiat
  if (!kaannetty){ //Jos ei ole vielä käännetty
    kaannetty = true;
    ekaKortti = this;
    return;
  }
    tokaKortti = this;

    onkoParit(); // Kutsuu onkoParit funktiota
  }

// Onko kortit pari
  function onkoParit(){
    var onkoPari = ekaKortti.dataset.framework === tokaKortti.dataset.framework; //Testaa onko ekan ja tokan kortin data-frameworkit samoja
    onkoPari ? poistaKortit(): kaannaTakaisin(); // Jos em. sisältö on sama/tosi niin toteuta poistaKortit() ja jos ei niin kaannaTakaisin()
  }

// On pari
  function poistaKortit(){
    ekaKortti.removeEventListener("click", kaanna); // Poistaa korttiin liitetyn tapahtuman
    tokaKortti.removeEventListener("click", kaanna); // Poistaa korttiin liitetyn tapahtuman

    resettaa();
  }

// Ei ole pari
  function kaannaTakaisin(){
    lukitus = true; // Lukitus päällä
    setTimeout(() => { // Määrittää ajan tulevalle tapahtumalle
      ekaKortti.classList.remove('kaanto'); // Poistaa kortille liitetyn classin
      tokaKortti.classList.remove('kaanto'); // poistaa kortille liitetyn classin
    resettaa();
    }, 1000); // Aika 1sek
  }

// Resettaa kortit
  function resettaa(){
    [kaannetty, lukitus] = [false, false];
    [ekaKortti, tokaKortti] = [null, null];
  }

// Sekoittaa kortit
  (function sekoita(){
    kortit.forEach(kortti => { // Erittelee jokaisen elementin erikseen
      var sekoitus = Math.floor(Math.random()*36); // Arpoo random numerot ja tallentaa muuttujaan
      kortti.style.order = sekoitus; // Poimii muuttujasta arvotut numerot ja laittaa jokaiselle kortille numeron ja pistää ne johkin järjestykseen
    });
  })();

// "Erittelee" jokaisen elementin erikseen ja lisää kaikille "tapahtuman" eli klikatessa alkaa funktio kaanna
  kortit.forEach(kortti => kortti.addEventListener('click', kaanna));
