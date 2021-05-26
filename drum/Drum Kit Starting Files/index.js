// Cantidad de letras
var numberOfDrumButtons =  document.querySelectorAll(".drum").length;
// Array de botones con letras, sonidos y variables
var button = [];
// Listado de sonidos
var sound = ['sounds\\tom-1.mp3', 'sounds\\tom-2.mp3', 'sounds\\tom-3.mp3', 'sounds\\tom-4.mp3', 'sounds\\crash.mp3', 'sounds\\kick-bass.mp3', 'sounds\\snare.mp3'];
// Constructor de objetos button
function Button(letter, sound) {
  this.letter = letter;
  this.sound = function(){
    var s = new Audio(sound);
    s.play();
  };
}
// Se cargan todos los botones del DOM
for (var i = 0; i < numberOfDrumButtons ; i++){
  var but = new Button(document.querySelectorAll(".drum")[i].innerHTML,sound[i]);
  button.push(but);
}

// Crea evventos para todos los clicks de los buttons
for (var i = 0; i < numberOfDrumButtons ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    buttonLetter = this.innerHTML;
    // MANERA COMPACTA, NECESITA ES6-> button.find(elem => elem.name === buttonLetter).sound();
    switch(buttonLetter) {
      case 'w':
        button[0].sound();
        break;
      case 'a':
        button[1].sound();
        break;
      case 's':
        button[2].sound();
        break;
      case 'd':
        button[3].sound();
        break;
      case 'j':
        button[4].sound();
        break;
      case 'k':
        button[5].sound();
        break;
      case 'l':
        button[6].sound();
        break;
      default:
        console.log(buttonLetter + "unknown");
    }
  });
}
