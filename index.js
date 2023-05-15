
// random Image Player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

// use concatenation to add this number to the  end of the string 'dice' then get random dice image
var randomDiceImageSource1 = "images/dice" + randomNumber1 + ".png" ;  // images/dice1.png - images/dice6.png 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImageSource1);

// random Image Player 2

var randomNumber2 = Math.floor(Math.random() *6) +1;

var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource2);

if (randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML = "🥇 Player 1 Wins!";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "🥈 Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw !"
}