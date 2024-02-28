let conteo = 0;
const contador = document.getElementById("contador");

const botonSuma = document.getElementById("sumar");
const botonResta = document.getElementById("restar")
const botonReinicio = document.getElementById("reiniciar")


botonSuma.addEventListener("click", event => {
    conteo++;
    contador.textContent = conteo.toString();
    contador.style.color = "green";
    console.log(conteo);
});

botonResta.addEventListener("click", event => {
    conteo--;
    contador.textContent = conteo.toString();
    contador.style.color = "red";
    console.log(conteo);
});

botonReinicio.addEventListener("click", event => {
    conteo = 0;
    contador.textContent = conteo.toString();
    contador.style.color = "black";
    console.log(conteo);
})