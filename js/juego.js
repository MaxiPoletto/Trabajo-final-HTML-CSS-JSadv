
let reinicio= document.querySelector(".reiniciar")

let zonadestino1=document.querySelector(".tarjeta1")
let zonadestino2=document.querySelector(".tarjeta2")
let zonadestino3=document.querySelector(".tarjeta3")

let imagen1= document.querySelector(".imagen1")
let imagen2= document.querySelector(".imagen2")
let imagen3= document.querySelector(".imagen3")


// ----------------GUARDANDO IMAGEN---------------------------
function guardando() {
    imagen1.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("Text",e.target.src);
    })
    
    imagen2.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("Text",e.target.src);
    })
    
    imagen3.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("Text",e.target.src);
    })
}

guardando()

// --------------------limpieza-----------------------------
function limpiando() {
    zonadestino1.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    zonadestino2.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    zonadestino3.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })    
}


limpiando()

//----------------------dropeado-----------------------------

function dropeando() {
    

    zonadestino1.addEventListener("drop",(e)=>{
        let dataimg= e.dataTransfer.getData("Text");

        zonadestino1.innerHTML=`<img src="${dataimg}"/>`
        console.log(dataimg)

        if (dataimg ===imagen1.src) {
            imagen1.style.visibility="hidden"
        } if(dataimg === imagen2.src) {
            imagen2.style.visibility="hidden"
        }if(dataimg=== imagen3.src){
            imagen3.style.visibility="hidden"
        }
        e.dataTransfer.clearData("Text");
    })

    zonadestino2.addEventListener("drop",(e)=>{
        let dataimg= e.dataTransfer.getData("Text");

        zonadestino2.innerHTML=`<img src="${dataimg}"/>`
        console.log(dataimg)

        if (dataimg ===imagen1.src) {
            imagen1.style.visibility="hidden"
        } if(dataimg === imagen2.src) {
            imagen2.style.visibility="hidden"
        }if(dataimg=== imagen3.src){
            imagen3.style.visibility="hidden"
        }
        e.dataTransfer.clearData("Text");
    })

    zonadestino3.addEventListener("drop",(e)=>{
        let dataimg= e.dataTransfer.getData("Text");

        zonadestino3.innerHTML=`<img src="${dataimg}"/>`
        console.log(dataimg)

        if (dataimg ===imagen1.src) {
            imagen1.style.visibility="hidden"
        } if(dataimg === imagen2.src) {
            imagen2.style.visibility="hidden"
        }if(dataimg=== imagen3.src){
            imagen3.style.visibility="hidden"
        }
        e.dataTransfer.clearData("Text");
})
}

dropeando()

//----------------------REINICIO-------------------------------
function reiniciando() {
    
    reinicio.addEventListener("click",(e)=>{
        
        window.location.reload()
    
        console.log("se hizo click");
    })
}
reiniciando()