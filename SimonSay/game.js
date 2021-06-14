var sound = ['sounds\\green.mp3', 'sounds\\red.mp3', 'sounds\\yellow.mp3', 'sounds\\blue.mp3', 'sounds\\wrong.mp3'];



function Button(letter, sound) {
  this.letter = letter;
  this.sound = function(){
    var s = new Audio(sound);
    s.play();
  };
}


function makeSound(buttonLetter) {
  // MANERA COMPACTA, NECESITA ES6->
  // Buscar instrumento según letra
  var instrument = buttonInstrum.find(elem => elem.letter === buttonLetter);
  // Si existe instrumernto
  if (instrument)
    instrument.sound();
}


function buttonAnimation(button){
  var activeButton = $("." + button);
  activeButton.addClass("pressed");
  setTimeout(function(){
    activeButton.removeClass("pressed");
  }, 100);
}

// Detectar clicks de los buttons
for (var i = 0; i < numberOfDrumButtons ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    buttonLetter = this.innerHTML;
    makeSound(buttonLetter);
    buttonAnimation(buttonLetter)

  });
}
