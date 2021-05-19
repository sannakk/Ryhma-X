//Aloitetaan määrittelemällä sekä pelialustan, että madon värit
const maailmanReuna='yellow';
const maailmanVari='black';
const matoVari= '#F4FF46';
const matoReuna='black';
//Kun peli alkaa hiiren kursori katoaa näkyvistä
document.body.style.cursor = "none";
//Luodaan mato haluttuun sijaintiin pelialustalla mistä,
//se lähtee myös liikkeelle
let mato = [{x: 200, y: 200}, {x: 180, y: 200}, {x: 160, y: 200}, {x: 140, y: 200}, {x: 120, y: 200},];

//parastulos ja nykyinen tulos on 0 kun pelaa ensimmäisen kerran
//nykyinen tulos on 0 myös aina kun uusi peli alkaa
let paras = 0;
let tulos = 0;
//suunnanMuutos on epätosi kunnes toisin määritellään.
let suunnanMuutos = false;
//Ruokaan liittyvät muuttujat, joita tarvitaan myöhemmin koodissa.
let ruokaX;
let ruokaY;
//Kääntymiseen liittyvät muuttujat, joita tarvitaan myöhemmin koodissa.
let dx = 20;
let dy = 0;

//const matoMaailma liitetään html:ssä luodun canvasin id:hen
const matoMaailma = document.getElementById('matoMaailma');
//Määritetään kaksiulotteiseksi
const matoMaailma_ctx = matoMaailma.getContext('2d');

//kaiken luomisen jälkeen käynnistetään pääfunktio sekä
//madonruoan luomis funktio jolla saadaan ruoka random kohtaan
peli();
teeRuoka();

//Luodaan muutaSuuntaa funktiolle tapahtuma.
document.addEventListener('keydown', muutaSuuntaa);

//Pelin pääfunktio joka pyörittää lähes kaikkia funktioita
//Jotka olemme luoneet
function peli(){
  if (peliLoppuu()) return;
  hae();
  suunnanMuutos = false;
  setTimeout(function onTick() {
  korjaa();
  piirraRuoka();
  liikuMato();
  piirraMato();
  peli();
}, 100)
}

//Tämä funktio korjaa pelikentän jatkuvasti siitä mistä mato
//on liikkunut takaisin taustanväriksi. Ilman tätä kaikki kohdat
//mistä mato on mennyt jäisi madon värisiksi. Ja sama ruoan kanssa.
function korjaa(){
  matoMaailma_ctx.fillStyle = maailmanVari;
  matoMaailma_ctx.strokestyle = maailmanReuna;
  matoMaailma_ctx.fillRect(0, 0, matoMaailma.width, matoMaailma.height);
  matoMaailma_ctx.strokeRect(0, 0, matoMaailma.width, matoMaailma.height);
}

//Piirtää madon canvasille
function piirraMato(){
  mato.forEach(piirraMadonOsa)
}

//Luo pelilaudalle "ruuan"
function piirraRuoka(){
  matoMaailma_ctx.fillStyle ='purple'; //Väri
  matoMaailma_ctx.fillRect(ruokaX, ruokaY, 20, 20); //Ruuan muoto ja mitat
}


//Luo pelilaudalle "madonOsa":an määritetyt muodot ja mitat
function piirraMadonOsa(madonOsa){
  matoMaailma_ctx.fillStyle  = matoVari;
  matoMaailma_ctx.strokestyle = matoReuna;
  matoMaailma_ctx.fillRect(madonOsa.x, madonOsa.y, 20, 20); //Tässä tapauksessa neliö 20 x 20
  matoMaailma_ctx.strokeRect(madonOsa.x, madonOsa.y, 20, 20);//-||-
}


// Peli loppuu kun mato osuu joko itseensä tai johonkin seinään
// eli joko yläseinään, alaseinään, oikeaan seinään tai vasempaan seinään
function peliLoppuu(){
  for (let i = 4; i < mato.length; i++){
    if (mato[i].x === mato[0].x && mato[i].y === mato[0].y){
      document.getElementById('gameover').innerHTML = "Game over!";
      //Kun häviää pelin hiiren kursori tulee taas näkyviin
      document.body.style.cursor = "default";
      document.getElementById('pelaauudestaan').innerHTML = '<button id="nappi" onclick="window.location.reload();">Play again!</button>';
     return true}
  }
  const hitLeftWall = mato[0].x < 0;
  const hitRightWall = mato[0].x > matoMaailma.width - 20;
  const hitTopWall = mato[0].y < 0;
  const hitBottomWall = mato[0].y > matoMaailma.height - 20;
  if (hitLeftWall || hitRightWall || hitTopWall || hitBottomWall){ // Törmätessä seinään...
    document.getElementById('gameover').innerHTML = "Game over!";
    document.body.style.cursor = "default";
    document.getElementById('pelaauudestaan').innerHTML = '<button id="nappi" onclick="window.location.reload();">Play again!</button>';} // ...tulee pelilaudan alapuolelle "Game over"
  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall

}

//Arpoo random sijainnin ruualle
function ruuanSijainti(min, max){
  return Math.round((Math.random() * (max-min) + min) / 20) * 20;
}

//Ruoan sijainnin lisäksi pitää luoda ruoalle myös koko ja määrittää
//että se ilmestyy myös uudestaan kun se on syöty
function teeRuoka(){
  ruokaX = ruuanSijainti(0, matoMaailma.width - 20);
  ruokaY = ruuanSijainti(0, matoMaailma.height - 20);
  mato.forEach(function onkoMatoSyonyt(part){
    const onSyonyt = part.x == ruokaX && part.y == ruokaY;
    if (onSyonyt)
    teeRuoka();
  });
}

//Määritetään, että tietokoneen näppäimistön nuolinäppäimilla
//liikutetaan matoa
function muutaSuuntaa(event){
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

if (suunnanMuutos) return;
//Nyt kun painaa nuolinäppäintä suunnanMuutos muuttuu falsesta
//trueksi.
suunnanMuutos = true;
  const keyPressed = event.keyCode;
  const goingUp = dy === -20;
  const goingDown = dy === 20;
  const goingRight = dx === 20;
  const goingLeft = dx === -20;

//Tärkeä tässä on se, että mato ei saa lähteä vastakkaiseen
//suuntaan suoraan.
    if (keyPressed === LEFT_KEY && !goingRight){
      dx = -20;
      dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown){
      dx = 0;
      dy = -20;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft){
      dx = 20;
      dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp){
      dx = 0;
      dy = 20;
    }
}

//unshiftilla luodaan madolle tavallaan jatkuvasti uusi pää
//edellisen eteen. Ja perä poistuu ELLEI mato syö ruokaa jolloin sen yhden
//liikkeen aikana madon perä ei poistu eli mato kasvaa.
function liikuMato() {
  const paa = {x: mato[0].x + dx, y: mato[0].y + dy};
  mato.unshift(paa);
  //Kun madon pään x ja y akseli ja ruoan x ja y akseli ovat samassa
  //paikassa tarkoittaa se sitä, että mato on syönyt ruoan
  //jolloin saa 9 pistettä ja ruoka vaihtaa sijaintia
  const onSyonytRuoan = mato[0].x === ruokaX && mato[0].y === ruokaY;
  if(onSyonytRuoan){
    tulos += 9;
    //Jos tulos on suurempi kuin localStoragessa sijaitseva
    //paras tulos se korvautuu tällä nykyisellä tuloksella.
    document.getElementById('tulos').innerHTML = tulos;
     if(tulos > localStorage.getItem("paras")) {
      localStorage.setItem("paras", tulos);
      document.getElementById("paras").innerHTML = tulos;
      paras += 9;
      hae();
      //Jos local Storagessa sijaitseva paras tulos on suurempi
      // kuin nykyinen tulos silloin se näkyy divissä paras.
    } if(paras > tulos) {
      document.getElementById("paras").innerHTML = paras;
      paras += 9;
      localStorage.setItem("paras", paras);
      hae();
    }
    teeRuoka();
  }else{
    //Kun mato ei syö ruokaa niin perä poistuu.
  mato.pop();
}
}

//Tämä funktio hakee local Storagesta parhaan tuloksen diviin paras.
function hae() {
  const parasTulos = localStorage.getItem("paras");
  document.getElementById("paras").innerHTML = parasTulos;
}
