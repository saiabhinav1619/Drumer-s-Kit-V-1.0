for(var i=0;i<document.querySelectorAll(".drum").length;i++){


//This part of the code only listens for drums box because of document.queryselector
//The listening type is click 
//and plays the sound accordingly
document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    var innerHTMLButton = this.innerHTML;

   makesound(innerHTMLButton);
   buttonAnimation(innerHTMLButton);
    
});

}


//This part of the code sees what type of key is pressed on keyboard using event.key
document.addEventListener("keydown", function(event){
    var keypressedOnKeyBoard = event.key;
    makesound(keypressedOnKeyBoard);
    buttonAnimation(keypressedOnKeyBoard);
});


// This part of the code is just to play sound accornding to the key pressed
function makesound(key){
     switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

            case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

            case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

            case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

            case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

             case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

            case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

    
        default:
            break;
}
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

  



