var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
document.querySelector("h1").innerHTML="Refresh Me";

if(randomNumber1===1){document.querySelector(".dice .img1").setAttribute("src","dice1.png");}
if(randomNumber1===2){document.querySelector(".dice .img1").setAttribute("src","dice2.png");}
if(randomNumber1===3){document.querySelector(".dice .img1").setAttribute("src","dice3.png");}
if(randomNumber1===4){document.querySelector(".dice .img1").setAttribute("src","dice4.png");}
if(randomNumber1===5){document.querySelector(".dice .img1").setAttribute("src","dice5.png");}
if(randomNumber2===1){document.querySelector(".dice .img2").setAttribute("src","dice1.png");}
if(randomNumber2===2){document.querySelector(".dice .img2").setAttribute("src","dice2.png");}
if(randomNumber2===3){document.querySelector(".dice .img2").setAttribute("src","dice3.png");}
if(randomNumber2===4){document.querySelector(".dice .img2").setAttribute("src","dice4.png");}
if(randomNumber2===5){document.querySelector(".dice .img2").setAttribute("src","dice5.png");}

if(randomNumber1===randomNumber2){document.querySelector("h1").innerHTML="Draw";}
if(randomNumber1>randomNumber2){document.querySelector("h1").innerHTML="Player 1 Wins!";}
if(randomNumber1<randomNumber2){document.querySelector("h1").innerHTML="Player 2 Wins!";}


