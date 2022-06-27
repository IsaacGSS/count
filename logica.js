var numero = 0


function mais() {

  document.getElementById('contagem').innerHTML = numero = numero + 1
  
}

function menos() {

  document.getElementById('contagem').innerHTML = numero = numero - 1

}

function reset() {

  document.getElementById('contagem').innerHTML = numero = 0

}

document.getElementById('contagem').innerHTML = numero 

function evento() {
  if (numero < 0) {
    document.getElementById("contagem").style.color = "#cf0000";
  } if (numero > 0) {
    document.getElementById("contagem").style.color = "#1ba4ff";
  } if(numero == 0){
    document.getElementById("contagem").style.color = "#000000";
  } 

}