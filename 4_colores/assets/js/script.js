// Parte 4.2: "Dentro del script agrega el evento para que al hacer click a cada uno de los
// divs, este cambie de color al color negro. Utiliza addEventListener para
// agregar el evento".

const azul = document.querySelector("#azul");
const rojo = document.querySelector("#rojo");
const verde = document.querySelector("#verde");
const amarillo = document.querySelector("#amarillo");

function negro(identificador){
    identificador.style.backgroundColor = 'black'
 }

azul.addEventListener("click", ()=> negro(azul));
rojo.addEventListener("click", ()=> negro(rojo));
verde.addEventListener("click", ()=> negro(verde));
amarillo.addEventListener("click", ()=> negro(amarillo));

