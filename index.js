var number1=Math.floor(Math.random() * 6)+1;
var imagesource1="images/dice"+number1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src", imagesource1);

var number2=Math.floor(Math.random() * 6)+1;
var imagesource2="images/dice"+number2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src", imagesource2);


if(number1>number2){
    document.querySelector("h1").innerHTML="😎 Player 1 Wins";
}
else if(number2>number1){
    document.querySelector("h1").innerHTML="Player 2 Wins 😎";
}
else{
    document.querySelector("h1").innerHTML="!Draw";
}