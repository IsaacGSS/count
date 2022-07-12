var numero = 0
let checkbox = document.getElementById("checkbox");
  var data = new Date() 
  var hora = data.getHours()


// temeTime🌙🌞
function tame() {

  if (hora > 6 && hora < 18) {   
    document.body.style.backgroundColor = "#C0DAEB";
    document.getElementById("main").style.color = "#000000";
    var zero = "#000000";
  } else {
    document.body.style.backgroundColor = "#152238";
    document.getElementById("main").style.color = "#f5f5f5";
    var zero = "#f5f5f5";
  }
}


// Buttom🔢
/// button increase [➕] 
function mais() {
  document.getElementById('contagem').innerHTML = numero = numero + 1
  
}

/// button decrease [➖]
function menos() {
  document.getElementById('contagem').innerHTML = numero = numero - 1

}

/// button reset [🔁]
function reset() {
  document.getElementById('contagem').innerHTML = numero = 0

}

// return🏃
document.getElementById('contagem').innerHTML = numero 

// evento visual👀
function evento() {

  if (numero == 0) {

    if (hora > 6 && hora < 18) {
      document.getElementById("contagem").style.color = "#000000";
    } else {
      document.getElementById("contagem").style.color = "#ffffff";
    }
    
  } if (numero < 0) {
    document.getElementById("contagem").style.color = "#cf0000";
  } if (numero > 0) {
    document.getElementById("contagem").style.color = "#1ba4ff";
  }  
}

