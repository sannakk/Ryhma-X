// Tein nää eri variablet niinkuin ymmärsin
var lista = document.getElementsByTagName("li");
var listaJasen = document.createElement("li");
var teksti = document.getElementById("tekstiKentta").value;
var t = document.createTextNode(teksti);
listaJasen.appendChild(document.createTextNode(tekstiKentta.value));
lista.appendChild(listaJasen);
tekstiKentta.value = "";


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
  if (kentanPituus() > 0)

}


function poista(){




}
