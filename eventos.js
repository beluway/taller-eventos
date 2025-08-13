
addEventListener("DOMContentLoaded",function(){

const DIV = this.document.getElementById("div");
    //click en el div
    DIV.addEventListener("click",function(){
        {alert("Hola! Soy el div");}
    })

    
const BOTON = document.querySelector("#saludar");

    //click en el botón
        BOTON.addEventListener("click",function(event){
            event.stopPropagation(); //evita que el evento del div se dispare en el objeto hijo
    });



    
});


