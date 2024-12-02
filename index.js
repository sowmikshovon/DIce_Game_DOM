var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // e.g., dice1.png to dice6.png
var randomImageSource1 = "images/" + randomDiceImage1; // e.g., images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // e.g., dice1.png to dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // e.g., images/dice1.png to images/dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "Draw!";
}
