
addEventListener("DOMContentLoaded",function(){
    
    const BOTON = document.querySelector("#saludar");

    //click en el botón
        BOTON.addEventListener("click",function()
        {alert("Hola! Soy el botón");}
    
    );

    //no me quedó claro si era hacer click en el div o en el botón
    //por las dudas hice ambos

    const DIV = this.document.getElementById("div");
    //click en el div
    DIV.addEventListener("click",function(){
        {alert("Hola! Soy el div");}
    })
});


