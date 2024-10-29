
var button = document.querySelector("#playBtn");

function myfunction () {
    var randomNo1 = Math.floor(Math.random() * 6) + 1;
    var randomNo2 = Math.floor(Math.random() * 6) + 1;
    
    
    
    var image1, image2;
    image1 = "./images/dice" + randomNo1 + ".png";
    
    image2 = "./images/dice" + randomNo2 + ".png";
    
    var firstImg = document.querySelector(".img1");
    firstImg.setAttribute("src", image1);
    // firstImg.src = image1; 
    
    var secondImg = document.querySelector(".img2");
    secondImg.setAttribute("src", image2);
    
    // secondImg.src = image2;

    if (randomNo1 > randomNo2) {
        document.querySelector("h1").innerHTML = "Player-1 WON! ☝️";
    }
    else if (randomNo2 > randomNo1) {
        document.querySelector("h1").innerHTML = "Player-2 WON! ✌️";
    }
    else {
        document.querySelector("h1").innerHTML = "It's a DRAW! 🤝";
    }

}

button.addEventListener ("click", myfunction);



