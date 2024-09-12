
const boton = document.getElementById("buttonText");

boton.addEventListener("click", function(e) {
    localStorage.setItem("valor", document.getElementById("inputText").value);
    //console.log(localStorage.getItem("valor")); //lo muestro
});