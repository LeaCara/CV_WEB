// If i put script and jquery library in head section, it is required verify
// if jquery is ready
$(document).ready(function() {
  alert("Hello");
  $("h1").css("color", "red");
});

$("h1").css("font-size","10rem");
$("h1").addClass("big-title margin-title");
//$("button").text("CLIKKCCC");
$("button").html("<en>CLIKKCCC</en>");

console.log($("img").attr("src"));
$("a").attr("href", "http://www.facebook.com");

$("h1").click(function(){
  $("h1").css("color", "green" );
});

// var but = document.querySelectorAll("button");
// for(var i = 0; i < but.length; i++ )
// {
//   but[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// }

//$("button").click(function(){
  //$("h1").css("color","grey");
//});

$("input").keypress(function(event){
  $("h1").text(event.key);
});

$("h1").mouseover(function(event){
  $("h1").css("color", "green" );
});

$("h1").on("mouseover",function(event){
  $("h1").css("color", "blue" );
  //$("h1").before("<button>Before</button>");
  //$("h1").after("<button>After</button>");
  //$("h1").prepend("<button>Prepend</button>");
  //$("h1").append("<button>Append</button>");
});

$("button").on("click", function(){
  $("h1").fadeOut().slideUp().slideDown().animate({opacity: 0.5});
});
