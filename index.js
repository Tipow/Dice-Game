//first dice
    var randomNumber1 = Math.random();
    var randomNumber1 = Math.floor(randomNumber1 * 6);
    var randomNumber1 = randomNumber1 + 1;

    var imagesrc1 = "./images/dice" + randomNumber1 + ".png"

     document.querySelector(".img1").setAttribute("src", imagesrc1);


//second dice
     var randomNumber2 = Math.random();
     var randomNumber2 = Math.floor(randomNumber2 * 6);
     var randomNumber2 = randomNumber2 + 1;
 
     var imagesrc2 = "./images/dice" + randomNumber2 + ".png";
 
      document.querySelector(".img2").setAttribute("src", imagesrc2);

      if(randomNumber1 === randomNumber2){
        document.getElementById("heading").innerHTML = "It's a draw!";
      } else if(randomNumber1 > randomNumber2){
        document.getElementById("heading").innerHTML = "Player 1 Wins!🚩";
      } else{
        document.getElementById("heading").innerHTML = "Player 2 Wins!🚩";
      }