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

//Jos ruutu on täytetty ohjelma asettaa niiden arvot jotka on täytetty
// local Storageen ja sen jälkeen käynnistyy hae() funktio
  if(nimi)
{
    localStorage.setItem("etunimi", nimi);
    hae();
}
else if(snimi)
{
    localStorage.setItem("sukunimi", snimi);
    hae();
}
else if(oso)
{
    localStorage.setItem("osoite", oso);
    hae();
}
else if(post)
{
    localStorage.setItem("postinro", post);
    hae();
}
else if(paikka)
{
    localStorage.setItem("ppaikka", paikka);
    hae();
}
else if(nro)
{
    localStorage.setItem("puh", nro);
    hae();
}
else if(sposti)
{
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
     document.getElementById("tiedot").innerHTML = nimi + " " + "<button type='button' id='poista' onclick='remove(this)'>Poista tieto</button>" + "<br>" +
     snimi + " " + "<button type='button' id='poista' onclick='remove(this)'>Poista tieto</button>" + "<br>" +
     oso + " " + "<button type='button' id='poista' onclick='remove(this)'>Poista tieto</button>" + "<br>" +
     post + " " + "<button type='button' id='poista' onclick='remove(this)'>Poista tieto</button>" + "<br>" +
     paikka + " " + "<button type='button' id='poista' onclick='remove(this)'>Poista tieto</button>" + "<br>" +
     nro + " " + "<button type='button' id='poista' onclick='remove(this)'>Poista tieto</button>" + "<br>" +
     sposti + " " + "<button type='button' id='poista' onclick='remove(this)'>Poista tieto</button>"+ "<br>";
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
function remove(tama)
{
localStorage.removeItem(tama.id);
location.reload();
}
