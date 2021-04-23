// Tein nää eri variablet niinkuin ymmärsin
var lista = document.getElementsByTagName("li");
var listaJasen = document.createElement("li");
tekstiKentta.value = "";
var teksti = document.getElementById("tekstiKentta").value;
var t = document.createTextNode(teksti);


//Tää on vaan et se tuo sen tekstikentän pituuden tota lisaa
//funktiota varten tavallaan
function kentanPituus()
{
       return tekstiKentta.value.length;

// ja taa tuo listan pituuden. siit en vielä tiiä mihin sitä tarvii
function listanPituus()
{
        return lista.length;
}

function lisaa() {


  if (kentanPituus() > 0) {
    teeListaJasen();
  }
  if (kentanPituus() > 0 && event.which == 13) {
    teeListaJasen();
  }
}

function teeListaJasen() {
  document.getElementById("enter").addEventListener("click", function() {
    document.getElementById("tehtavalista").appendChild(teksti);
  }
)};

function poista(){




}
