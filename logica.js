var numero = 0
let checkbox = document.getElementById("checkbox");


// temeTime🌙🌞
function tame() {
  var data = new Date() 
  var hora = data.getHours()

  if (hora > 6 && hora < 18) {   
    document.body.style.backgroundColor = "#C0DAEB";
    document.getElementById("main").style.color = "#000000";
    document.getElementById("contagem").style.color = "#000000";
  } else if(hora > 18 && hora < 6) {
    document.body.style.backgroundColor = "#152238";
    document.getElementById("main").style.color = "#f5f5f5";
    document.getElementById("contagem").style.color = "#f5f5f5";
  }
}


// buttom🔢
function mais() {
  document.getElementById('contagem').innerHTML = numero = numero + 1
  
}

function menos() {
  document.getElementById('contagem').innerHTML = numero = numero - 1

}

function reset() {
  document.getElementById('contagem').innerHTML = numero = 0

}

// return🏃
document.getElementById('contagem').innerHTML = numero 

// evento visual👀
function evento() {

  if (numero == 0) {
    document.getElementById("contagem").style.color = "#000000";
  } if (numero < 0) {
    document.getElementById("contagem").style.color = "#cf0000";
  } if (numero > 0) {
    document.getElementById("contagem").style.color = "#1ba4ff";
  }  
}