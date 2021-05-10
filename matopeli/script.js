//Aloitetaan määrittelemällä seka pelialustan, että madon värit
const maailmanReuna='yellow';
const maailmanVari='black';
const matoVari='red';
const matoReuna='lightblue';

//Luodaan mato haluttuun sijaintiin pelialustalla mistä,
//se lähtee myös liikkeelle
let mato = [{x: 200, y: 200}, {x: 190, y: 200}, {x: 180, y: 200}, {x: 170, y: 200}, {x: 160, y: 200},];


let tulos = 0;
let suunnanMuutos = false;
let ruokaX;
let ruokaY;
let dx = 10;
let dy = 0;

//const matoMaailma liitetään html:ssä luodun canvasin id:hen
const matoMaailma = document.getElementById('matoMaailma');
//Määritetään kaksiulotteiseksi
const matoMaailma_ctx = matoMaailma.getContext('2d');

//kaiken luomisen jälkeen käynnistetään pääfunktio sekä
//madonruoan luomis funktio jolla saadaan ruoka random kohtaan
main();
teeRuoka();

document.addEventListener('keydown', muutaSuuntaa);

function main(){
  if (peliLoppuu()) return;
  suunnanMuutos = false;
  setTimeout(function onTick() {
  clear_board();
  piirraRuoka();
  liikuMato();
  piirraMato();
  main();
}, 100)
}

function clear_board(){
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
  matoMaailma_ctx.fillStyle ='red'; //Väri
  matoMaailma_ctx.strokestyle = 'red';
  matoMaailma_ctx.fillRect(ruokaX, ruokaY, 10, 10); //Ruuan muoto ja mitat
  matoMaailma_ctx.strokeRect(ruokaX, ruokaY, 10, 10); //Neliö 10 x 10
}

//Luo pelilaudalle "madonOsa":an määritetyt muodot ja mitat
function piirraMadonOsa(madonOsa){
  matoMaailma_ctx.fillStyle  = matoVari;
  matoMaailma_ctx.strokestyle = matoReuna;
  matoMaailma_ctx.fillRect(madonOsa.x, madonOsa.y, 10, 10); //Tässä tapauksessa neliö 10 x 10
  matoMaailma_ctx.strokeRect(madonOsa.x, madonOsa.y, 10, 10);//-||-
}

// Peli loppuu..
function peliLoppuu(){
  for (let i = 4; i < mato.length; i++){
    if (mato[i].x === mato[0].x && mato[i].y === mato[0].y) return true //...jos
  }
  const hitLeftWall = mato[0].x < 0;
  const hitRightWall = mato[0].x > matoMaailma.width - 10;
  const hitTopWall = mato[0].y < 0;
  const hitBottomWall = mato[0].y > matoMaailma.height - 10;
  if (hitLeftWall || hitRightWall || hitTopWall || hitBottomWall){ // Törmätessä seinään...
    document.getElementById('gameover').innerHTML = "Game over!";} // ...tulee pelilaudan alapuolelle "Game over"
  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
}

//Arpoo random sijainnin ruualle
function ruuanSijainti(min, max){
  return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function teeRuoka(){ // HAHAHA keksi tähän vaa joku muu XD kirjotin vaa jonkun
  ruokaX = ruuanSijainti(0, matoMaailma.width - 10);
  ruokaY = ruuanSijainti(0, matoMaailma.height - 10);
  mato.forEach(function onkoMatoSyonyt(part){
    const onSyonyt = part.x == ruokaX && part.y == ruokaY;
    if (onSyonyt)
    teeRuoka();
  });
}

function muutaSuuntaa(event){
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

if (suunnanMuutos) return;
suunnanMuutos = true;
  const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight){
      dx = -10;
      dy = 0;
    }
    if (keyPressed === UP_KEY && !goingDown){
      dx = 0;
      dy = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft){
      dx = 10;
      dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp){
      dx = 0;
      dy = 10;
    }
}

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
