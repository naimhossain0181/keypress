var pTag=document.querySelector("p")
document.addEventListener("keypress",function(e){
    var text = e.key;
    pTag.innerHTML =text
    audioPlay(text);
    animationHandller(text)
})

for (i=0; i<=3;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click" ,function(){
        var text =this.innerHTML;
        audioPlay(text);
        animationHandller(text)

    })
}
   





function audioPlay(text){
    switch(text){
        case "a" :
            var sound = new Audio("sounds/A.mp3")
            sound.play()

            break;

        case "b" :
            var sound = new Audio("sounds/B.mp3")
            sound.play()


            break;

        case "c" :
            var sound = new Audio("sounds/C.mp3")
            sound.play()


            break;
    }
}


function animationHandller(text){
    var selelectButton= document.querySelector("."+ text)
    selelectButton.classList.add("shadow")
    setTimeout(function(){
        selelectButton.classList.remove("shadow")
    },700)
}


