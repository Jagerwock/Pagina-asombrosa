let contenidoAcerca = "Acerca de mi";

let acerca = document.querySelector("#subtitulo-principal");
acerca.innerHTML = contenidoAcerca; 

let textoAcerca = acerca.innerText; 
console.log(textoAcerca);
 
if(textoAcerca == "Acerca de mi"){
    acerca.innerHTML = "Acerca";
} else{
    console.log("Hubo un error")
}

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

