const ele = document.getElementById("ele1");
const ele1 = document.getElementById("ele2")

function pintar (elementoclickeado, color = "green"){
  elementoclickeado.style.backgroundColor = color
}// Se recibe la referencia de los elementos "ele1" y "ele2" en la variable "elementoclickeado" declarada en el bloque de la función. Así pues, se hace referencia a estos a traves de esta nueva variable sin necesidad de hacer referencia nuevamente a "ele" o "ele1" dentro de la función(apartado 3.2). Tambien, se recibe en la variable "color" un segundo parametro (apartado 3.3) para la modificación del color, en caso contrario, se pintará de verde por defecto al hacer click. 

// 3.2: "Modifica la función para que reciba el elemento clickeado de forma de no
// tener que seleccionarlo nuevamente dentro de la función".

ele.addEventListener("click",() =>pintar(ele));//Enviando la referencia del id "ele1" a traves de la constante "ele" como primer argumento para la función "pintar". No se envia un segundo argumento; debería pintarse de verde por defecto. 


// 3.3:"Modifica el código anterior para poder pasarle un color como argumento a la
// función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
// párrafo se debe pasar amarillo como color".

ele1.addEventListener("click", ()=>pintar(ele1, "yellow"));//Enviando la referencia del id "ele2" a traves de la constante "ele1" como primer argumento para la función "pintar". Junto a esta, se envía un segundo argumento para modificar el color a amarillo.