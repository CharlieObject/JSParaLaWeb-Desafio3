//   Parte 4.3: " Crea una página junto a un script que guarde dentro de una variable global
//   un color dependiendo de la letra del teclado presionada. (2 Puntos).

//    ○ La letra a guardará el color rosado.
//    ○ La letra s guardará el color naranjo.
//    ○ La letra d guardará el color celeste.
//    ○ Para guardar el color revisa el tip al final del enunciado.
//    ○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
//      color blanco y borde negro.
//    ○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
//      “key” a rosado, naranjo o celeste respectivamente".


function cambiarcolor(color, referencia){
  referencia.style.backgroundColor = color
}
const ident = document.querySelector("#key")
document.addEventListener("keydown", function(event){

  if(event.key === "a" || event.key === "A"){
    const color = 'pink'
    cambiarcolor(color, ident)
  }
  else if(event.key === "s" || event.key === "S"){
    const color = 'orange'
    cambiarcolor(color, ident)
  }
  else if(event.key === "d" || event.key === "D"){
    const color = 'skyblue'
    cambiarcolor(color, ident)
  }

// Parte 4.4: "Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
// deberá crear un div nuevo de las mismas dimensiones antes mencionadas
// con los colores morado, gris y café respectivamente". Nota: al mencionar solo dimensiones y no bordes, no consideré que el nuevo div deba tener bordes negros.


  else if(event.key === 'q' || event.key === 'Q'){
    const color = 'purple'
    creardiv(color)
  }
  else if(event.key === 'w' || event.key === 'W'){
    const color = 'grey'
    creardiv(color)
  }
  else if(event.key === 'e' || event.key === 'e'){
    const color = 'saddlebrown'
    creardiv(color)
  }
  })

function creardiv (color){
 let nuevoElemento = document.createElement("div");
 nuevoElemento.style.width = "200px"
 nuevoElemento.style.height = "200px"
 nuevoElemento.style.marginLeft = "10px"
 nuevoElemento.style.backgroundColor = color
 document.body.appendChild(nuevoElemento)
}


