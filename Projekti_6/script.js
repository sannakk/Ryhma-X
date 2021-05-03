const nimi = document.getElementById("etunimi");
var snimi = document.getElementById("sukunimi");
var oso = document.getElementById("osoite");
var post = document.getElementById("postinro");
var paikka = document.getElementById("ppaikka");
var nro = document.getElementById("puh");
var sposti = document.getElementById("email");
var tiedot = document.getElementById("tiedot");



function lisaa() {
  if(nimi && snimi && oso && post && paikka && nro && sposti) {
    localStorage.setItem("etunimi:", nimi);
    localStorage.setItem("sukunimi:", snimi);
    localStorage.setItem("osoite:", oso);
    localStorage.setItem("postinumero:", post);
    localStorage.setItem("postitoimipaikka:", paikka);
    localStorage.setItem("puhelinnumero:", nro);
    localStorage.setItem("sähköposti:", sposti);
}

for(let i = 0; i < localStorage.length; i++)
{
    const nimi = localStorage.key(i);
    localStorage.getItem(nimi);
    localStorage.getItem(snimi);
    localStorage.getItem(oso);
    localStorage.getItem(post);
    localStorage.getItem(paikka);
    localStorage.getItem(nro);
    localStorage.getItem(sposti);
     document.getElementById("tiedot").innerHTML = nimi + snimi + oso + post + paikka + nro + sposti + "&emsp;<button type='button' id=" + " onclick='poista(this)'>Poista tieto</button>"+ "<br/>";
     document.getElementById('etunimi').value = "";
     document.getElementById('sukunimi').value = "";
     document.getElementById('osoite').value = "";
     document.getElementById('postinro').value = "";
     document.getElementById('ppaikka').value = "";
     document.getElementById('puh').value = "";
     document.getElementById('email').value = "";
     setTimeout(function(){ tiedot.innerHTML = ""; }, 5000);


console.log(nimi);
}
}
function nayta() {

}

function poista() {

}
