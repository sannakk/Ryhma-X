//Aloitetaan määrittelemällä seka pelialustan, että madon värit
const maailmanReuna='yellow';
const maailmanVari='black';
const matoVari= '#F4FF46';
const matoReuna='green';

//Luodaan mato haluttuun sijaintiin pelialustalla mistä,
//se lähtee myös liikkeelle
let mato = [{x: 200, y: 200}, {x: 180, y: 200}, {x: 160, y: 200}, {x: 140, y: 200}, {x: 120, y: 200},];


let tulos = 0;
let suunnanMuutos = false;
let ruokaX;
let ruokaY;
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

document.addEventListener('keydown', muutaSuuntaa);

//Pelin pääfunktio joka pyörittää lähes kaikkia funktioita
//Jotka olemme luoneet
function peli(){
  if (peliLoppuu()) return;
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
//mistä mato on mennyt jäisi madon värisiksi.
function korjaa(){
  matoMaailma_ctx.fillStyle = maailmanVari;
  matoMaailma_ctx.strokestyle = maailmanReuna;
  matoMaailma_ctx.fillRect(0, 0, matoMaailma.width, matoMaailma.height);
  matoMaailma_ctx.strokeRect(0, 0, matoMaailma.width, matoMaailma.height);
}


function piirraMato(){
  mato.forEach(piirraMadonOsa)
}

//Luo pelilaudalle "ruuan"
function piirraRuoka(){
  matoMaailma_ctx.fillStyle ='purple'; //Väri
//  matoMaailma_ctx.strokestyle = 'red';
  matoMaailma_ctx.fillRect(ruokaX, ruokaY, 20, 20); //Ruuan muoto ja mitat
//  matoMaailma_ctx.strokeRect(ruokaX, ruokaY, 20, 20); //Neliö 10 x 10
}

//Luo pelilaudalle "madonOsa":an määritetyt muodot ja mitat
function piirraMadonOsa(madonOsa){
  matoMaailma_ctx.fillStyle  = matoVari;
  matoMaailma_ctx.strokestyle = matoReuna;
  matoMaailma_ctx.fillRect(madonOsa.x, madonOsa.y, 20, 20); //Tässä tapauksessa neliö 20 x 20
  matoMaailma_ctx.strokeRect(madonOsa.x, madonOsa.y, 20, 20);//-||-
}

// Peli loppuu..
function peliLoppuu(){
  for (let i = 4; i < mato.length; i++){
    if (mato[i].x === mato[0].x && mato[i].y === mato[0].y){
      document.getElementById('gameover').innerHTML = "Game over!";
      document.getElementById('pelaauudestaan').innerHTML = '<button id="nappi" onclick="window.location.reload();">Play again!</button>';
     return true} //...jos
  }
  const hitLeftWall = mato[0].x < 0;
  const hitRightWall = mato[0].x > matoMaailma.width - 20;
  const hitTopWall = mato[0].y < 0;
  const hitBottomWall = mato[0].y > matoMaailma.height - 20;
  if (hitLeftWall || hitRightWall || hitTopWall || hitBottomWall){ // Törmätessä seinään...
    document.getElementById('gameover').innerHTML = "Game over!";
    document.getElementById('pelaauudestaan').innerHTML = '<button id="nappi" onclick="window.location.reload();">Play again!</button>';} // ...tulee pelilaudan alapuolelle "Game over"
  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
}

//Arpoo random sijainnin ruualle
function ruuanSijainti(min, max){
  return Math.round((Math.random() * (max-min) + min) / 20) * 20;
}

function teeRuoka(){ // HAHAHA keksi tähän vaa joku muu XD kirjotin vaa jonkun
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
  //Kun madon x ja y akseli ja ruoan x ja y akseli ovat samassa
  //paikassa tarkoittaa se sitä, että mato on syönyt ruoan
  //jolloin saa 9 pistettä ja ruoka vaihtaa sijaintia
  const onSyonytRuoan = mato[0].x === ruokaX && mato[0].y === ruokaY;
  if(onSyonytRuoan){
    tulos += 9;
    document.getElementById('tulos').innerHTML = tulos;
    teeRuoka();
  }else{
  mato.pop();
}
}
