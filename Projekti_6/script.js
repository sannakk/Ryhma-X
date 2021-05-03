var nimi = document.getElementById("etunimi").value;
var snimi = document.getElementById("sukunimi").value;
var oso = document.getElementById("osoite").value;
var post = document.getElementById("postinro").value;
var paikka = document.getElementById("ppaikka").value;
var nro = document.getElementById("puh").value;
var sposti = document.getElementById("email").value;
var tiedot = document.getElementById("tiedot");



function lisaa() {
  if(nimi && snimi && oso && post && paikka && nro && sposti) {
    localStorage.setItem(nimi, snimi, oso, post, paikka, nro, sposti);
}
      localStorage.getItem(nimi);
     snimi = localStorage.getItem(snimi);
     oso = localStorage.getItem(oso);
     post = localStorage.getItem(post);
     paikka = localStorage.getItem(paikka);
     nro = localStorage.getItem(nro);
     sposti = localStorage.getItem(sposti);
    tiedot.innerHTML += nimi + snimi + oso + post + paikka + nro + sposti;

console.log(nimi);
}

function nayta() {

}

function poista() {

}
