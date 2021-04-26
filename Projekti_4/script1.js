
/*var lista = document.getElementsByTagName("ul");
var lisaaNappi = document.getElementById("enter");
var tekstiBoxi = document.getElementById("tekstiKentta").value;

function pituus(){
  return tekstiBoxi.length;
}


function maara(){
  return lista.length;
}

function lisaaPaina(event){
  if(pituus() > 0){
    lisaaTehtava();
  }
}

function lisaaEnter(){
  if(pituus() > 0 && event.which == 13){
    lisaaTehtava();
  }
}*/

  function lisaaTehtava(){
    var tekstiBoxi = document.getElementById("tekstiKentta").value;
    var li = document.createElement("li");
    var teksti = document.createTextNode(tekstiBoxi);
      li.appendChild(teksti);
      if (tekstiBoxi ===""){
        console.log("tyhja");
      }else{
        document.getElementById("tehtavaLista").appendChild(li);
        //console.log("kirjotusta");
      }
        document.getElementById("tekstiKentta").value="";

    var nappi = document.createElement("button");
    var x = document.createTextNode("x");
      nappi.classname = "sulje";
      nappi.appendChild(x);
      li.appendChild(nappi);
}
