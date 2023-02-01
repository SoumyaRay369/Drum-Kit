for (let i=0; i< 7; i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML)
    })
}

//The code above used to be:
// for (let i = 0; i < 7; i++) {
//     document.getElementsByClassName("drum")[i].addEventListener("click", function () {
//         alert("I have been clicked")
//     })
// }

// Code for playing audio in Javascript obtained from StackOverflow
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

// Basic Code for understanding which key in the keyboard has been pressed
// Here the function(event) part literally means that it will call the function that triggered the event; in this case the "keydown" , i.e, the keypress
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    if (key == "w") {
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    }
    if (key == "a") {
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
    }
    if (key == "s") {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    }
    if (key == "d") {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
    if (key == "j") {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    }
    if (key == "k") {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    }
    if (key == "l") {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    }
}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.toggle("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}