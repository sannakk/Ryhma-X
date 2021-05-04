function lisaa()
{

//haen ruutujen id:llä kyseisten tietojen valuen
  const nimi = document.getElementById("etunimi").value;
  const snimi = document.getElementById("sukunimi").value;
  const oso = document.getElementById("osoite").value;
  const post = document.getElementById("postinro").value;
  const paikka = document.getElementById("ppaikka").value;
  const nro = document.getElementById("puh").value;
  const sposti = document.getElementById("email").value;
  const tiedot = document.getElementById("tiedot");

//Jos kaikki ruudut ovat täytetty ohjelma asettaa niiden arvot
// local Storageen ja sen jälkeen käynnistyy hae() funktio
  if(nimi && snimi && oso && post && paikka && nro && sposti)
{
    localStorage.setItem("etunimi", nimi);
    localStorage.setItem("sukunimi", snimi);
    localStorage.setItem("osoite", oso);
    localStorage.setItem("postinro", post);
    localStorage.setItem("ppaikka", paikka);
    localStorage.setItem("puh", nro);
    localStorage.setItem("email", sposti);
    hae();
}
}
//Funktio hakee localstoragesta sinne tallennetut Tiedot
//ja näyttää ne sille luodussa kentässä hetken, jonka jälkeen
//tiedot menevät piiloon
function hae()
{

    const nimi = localStorage.getItem("etunimi");
    const snimi = localStorage.getItem("sukunimi");
    const oso = localStorage.getItem("osoite");
    const post = localStorage.getItem("postinro");
    const paikka = localStorage.getItem("ppaikka");
    const nro = localStorage.getItem("puh");
    const sposti = localStorage.getItem("email");
     document.getElementById("tiedot").innerHTML = nimi + " " + snimi + "<br>" + oso + "<br>" + post + " " + paikka + "<br>" + nro + "<br>" + sposti + " " + "&emsp;<button type='button' id='poista'" + " onclick='poista(this)'>Poista tieto</button>"+ "<br>";
     document.getElementById('etunimi').value = "";
     document.getElementById('sukunimi').value = "";
     document.getElementById('osoite').value = "";
     document.getElementById('postinro').value = "";
     document.getElementById('ppaikka').value = "";
     document.getElementById('puh').value = "";
     document.getElementById('email').value = "";
     setTimeout(function(){ tiedot.innerHTML = ""; }, 10000);
}

//Funktio poistaa kyseessä olevan boxin jossa on täytetyt tiedot
function poista(boxi)
{
const tama = boxi.id;
localStorage.removeItem(tama);
location.reload();
}
