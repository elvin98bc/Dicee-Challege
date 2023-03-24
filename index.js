document.querySelectorAll('img')

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomimgsrc1= "images/dice" + randomNumber1 + ".png";

document.querySelectorAll('img')[0].setAttribute('src',randomimgsrc1)

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomimgsrc2= "images/dice" + randomNumber2 + ".png";

document.querySelectorAll('img')[1].setAttribute('src',randomimgsrc2)

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML=" 🚩 Player 1 Win!"
} else if (randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML="Draw!"
} else {
    document.querySelector('h1').innerHTML="Player 2 Win! 🚩 "
}