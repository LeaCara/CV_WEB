/*jshint esversion: 6 */
var wrongSound = 'sounds\\wrong.mp3';
// Simon Button constructor
function Button(imgcolor, sound) {
  this.imgcolor = imgcolor;
  this.sound = function(){
    var s = new Audio(sound);
    s.play();
  };
}
var simonButton = [new Button($(".btn")[0], 'sounds\\green.mp3'),
                   new Button($(".btn")[1], 'sounds\\red.mp3'),
                   new Button($(".btn")[2], 'sounds\\yellow.mp3'),
                   new Button($(".btn")[3], 'sounds\\blue.mp3')];
var start = 0;
var level = 0;
var nClicked = 0;
var secuence = [];

// Si no start, keyboard event listener
$(document).on("keypress", function(){
  if(start === 0){
    start = 1;
    nextSecuence();
  }
  //console.log($(".btn")[1]);
  //else { ... TODO listener r g b y to push color}
});

// Si start, click event listener
$(".btn").click(function(){
  if(start === 0){
    start = 1;
    nextSecuence();
  }
  if(start === 1) {
    animateButton(this);
    processClick(this);
  }
});

// Fucnion animacion boton cada vez que se clickea
function animateButton(butt){
  $(butt).addClass("pressed");
  setTimeout(function(){
    $(butt).removeClass("pressed");
  }, 100);
  simonButton.find(elem => elem.imgcolor.id === butt.id).sound();
}

// Agregar al pattern un nuevo objeto
function nextSecuence(){
  $("h1").text("Level " + (++level));
  var newCol = Math.floor(Math.random()*4);
  var newButt = simonButton[newCol].imgcolor;
  secuence.push(newButt.id);
  $(newButt).fadeIn(100).fadeOut(100).fadeIn(100);
  simonButton.find(elem => elem.imgcolor.id === newButt.id).sound();
}

function verifyPattern(butt){
  var color = butt.id;
  if (color === secuence[nClicked])
  {
    return true;
  }
  else {
    return false;
  }
}

function animateError(){
  // game-over effect
  $("body").addClass("game-over");
  var s = new Audio(wrongSound);
  s.play();
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 100);
  $("h1").text("Game Over, Press Any Key to Restart");
}

function errorSecuence(){
  // restart secuence
  var len = secuence.length;
  for(var j = 0; j < len; j++){
    secuence.pop();
  }
  // Restart index
  start = 0;
  nClicked = 0;
  level = 0;
  animateError();
}

// Process de current state of the game
function processClick(butt) {
  var verified = verifyPattern(butt);
  if (verified){
    nClicked++;
    if(nClicked === level){
      setTimeout(function(){
        nextSecuence();
        nClicked = 0;
      }, 1200);
    }
  }
  else{
    errorSecuence();
  }
}
