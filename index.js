var randomNumer1 = Math.random();
randomNumer1 = (randomNumer1 * 6) + 1;
randomNumer1 = Math.floor(randomNumer1);
var randomDiceImg1 = "images/dice"+ randomNumer1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImg1);

var randomNumer2 = Math.random();
randomNumer2 = (randomNumer2 * 6) + 1;
randomNumer2 = Math.floor(randomNumer2);
var randomDiceImg2 = "images/dice"+ randomNumer2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImg2);


if(randomNumer1 === randomNumer2){
    document.querySelector("h1").textContent = ("Draw");
}else if(randomNumer1 > randomNumer2){
    document.querySelector("h1").textContent = ("Player 1 Wins!");
}else{
    document.querySelector("h1").textContent = ("Player 2 Wins!");
}