var randomnumber1=(Math.floor(Math.random()*6))+1;
var diceImageSource1="dice"+randomnumber1+".png";
image1=document.querySelectorAll('img')[0];
image1.setAttribute('src',diceImageSource1)

var randomnumber2=((Math.floor(Math.random()*6))+1);
var diceimageSource2="dice"+randomnumber2+".png";
image2=document.querySelectorAll('img')[1];
image2.setAttribute("src",diceimageSource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 Wins"
}else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}else{
   document.querySelector("h1").innerHTML="Draw!";
}