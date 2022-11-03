// FUNCION PARA PAUSA Y PLAY 

let video= document.querySelector("#videoHistoria");
let duracion= document.querySelector("#tiempo")
let lleva=document.querySelector("#lleva")

function reproducir() {
    video.play();
    duracion.textContent=video.duration;
    console.log("se clickeo");
    
}

function pausar() {
    video.pause();
    lleva.textContent= video.currentTime
    duracion.textContent=video.duration;
    console.log("se clickeo");
}
