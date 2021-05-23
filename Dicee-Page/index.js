var dice1 = Math.trunc(Math.random() * 6) + 1;
var dice2 = Math.trunc(Math.random() * 6) + 1;
document.querySelector("div.Dicees img.dice1").src = dice1 + '.png';
document.querySelector("div.Dicees img.dice2").src = dice2 + '.png';
document.querySelector("div.Result span.pro").textContent = dice1 + dice2;
