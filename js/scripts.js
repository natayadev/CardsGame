do {
  var numInicial = Math.floor(Math.random()*12);
  var numElegido = Math.floor(Math.random()*12);
} while (numInicial==numElegido) {

}
var resultado = "";
console.log(numInicial);
console.log(numElegido);

function compararMayor(){
  document.getElementById("resultado").innerHTML = resultado;

  var image = document.getElementById("SegundaCarta");
      if (image.src.match("on")) {
          image.src = "images/cards/back.png";
      } else {
        switch (numElegido) {
          case 0:
          image.src= "images/cards/2.png";
            break;
          case 1:
          image.src= "images/cards/3.png";
            break;
          case 2:
          image.src= "images/cards/4.png";
            break;
          case 3:
          image.src= "images/cards/5.png";
            break;
          case 4:
          image.src= "images/cards/6.png";
            break;
          case 5:
          image.src= "images/cards/7.png";
            break;
          case 6:
          image.src= "images/cards/8.png";
            break;
          case 7:
          image.src= "images/cards/9.png";
            break;
          case 8:
          image.src= "images/cards/J.png";
            break;
          case 9:
          image.src= "images/cards/Q.png";
            break;
          case 10:
          image.src= "images/cards/K.png";
            break;
          case 11:
          image.src= "images/cards/A.png";
            break;
          }
        }
      }
      if (numElegido > numInicial) {
        resultado = "GANASTE :D";
      } else {
        resultado = "PERDISTE :(";
      }

function compararMenor(){
  document.getElementById("resultado").innerHTML = resultado;

  var image = document.getElementById("SegundaCarta");
            if (image.src.match("on")) {
                image.src = "images/cards/back.png";
            } else {
              switch (numElegido) {
                case 0:
                image.src= "images/cards/2.png";
                  break;
                case 1:
                image.src= "images/cards/3.png";
                  break;
                case 2:
                image.src= "images/cards/4.png";
                  break;
                case 3:
                image.src= "images/cards/5.png";
                  break;
                case 4:
                image.src= "images/cards/6.png";
                  break;
                case 5:
                image.src= "images/cards/7.png";
                  break;
                case 6:
                image.src= "images/cards/8.png";
                  break;
                case 7:
                image.src= "images/cards/9.png";
                  break;
                case 8:
                image.src= "images/cards/J.png";
                  break;
                case 9:
                image.src= "images/cards/Q.png";
                  break;
                case 10:
                image.src= "images/cards/K.png";
                  break;
                case 11:
                image.src= "images/cards/A.png";
                  break;
                }
              }
            }
            if (numElegido < numInicial) {

              resultado = "GANASTE :D";
            } else {
              resultado = "PERDISTE :(";
            }

function revelarCartaInicial(){
  var image = document.getElementById("PrimeraCarta");

    if (image.src.match("on")) {
        image.src = "images/cards/back.png";
    } else {
      switch (numInicial) {
        case 0:
        image.src= "images/cards/2.png";
          break;
        case 1:
        image.src= "images/cards/3.png";
          break;
        case 2:
        image.src= "images/cards/4.png";
          break;
        case 3:
        image.src= "images/cards/5.png";
          break;
        case 4:
        image.src= "images/cards/6.png";
          break;
        case 5:
        image.src= "images/cards/7.png";
          break;
        case 6:
        image.src= "images/cards/8.png";
          break;
        case 7:
        image.src= "images/cards/9.png";
          break;
        case 8:
        image.src= "images/cards/J.png";
          break;
        case 9:
        image.src= "images/cards/Q.png";
          break;
        case 10:
        image.src= "images/cards/K.png";
          break;
        case 11:
        image.src= "images/cards/A.png";
          break;
        }
      }
    }
