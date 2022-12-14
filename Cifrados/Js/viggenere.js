
//Parametros del cifrado
var ELEMENTOS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                 "n","ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var LONGITUD = ELEMENTOS.length;

function cifradoVigenere(idMensaje, idClave){

    var mensaje = document.getElementById(idMensaje).value;

    var clave = document.getElementById(idClave).value;

    //Inicializacion de variables

    var mensajeCifrado = [];

    var mat = [];

    var letra1, letra2;

  //Generacion de la matris
  for (var i = 0; i < LONGITUD; i++) {

    mat[i] = [];

    for (var j = 0; j < LONGITUD; j++) {

        if ((i + j) < LONGITUD) {

            mat[i][j] = ELEMENTOS[i + j];
      } else {

        mat[i][j] = ELEMENTOS[i + j - LONGITUD];
      }
    }
  }

  //Ajuste del tamanio de la clave
  
  while (mensaje.length > clave.length) {
    clave = clave.concat("", clave);
  }

  //Cifrado de mensaje
  for (var j = 0; j < mensaje.length; j++) {
  
    var index = 0;
  
    letra1 = mat[0].indexOf(mensaje[j]);
  
    letra2 = mat[0].indexOf(clave[j]);
  
    if (mensaje[j] === " ") {
  
        mensajeCifrado.push(" ");
    }else {
  
        for (var i = 0; i < LONGITUD; i++) {
  
            if ((mat[i][0]) === (mat[0][letra2])) {
  
                index = i;
        }
      }
  
      mensajeCifrado.push(mat[index][letra1]);
  
    }
  }
  
  mensajeCifrado = mensajeCifrado.join("");
  
  document.getElementById("resultado").innerHTML = mensajeCifrado;
  
  return mensajeCifrado;
}

function cifradoCesar(mensaje, paso) {
  
    //Inicializacion de variables
  
  mensaje = mensaje.toLowerCase();
  
  var mensajeCifrado = [];
  
  var letra;
  
  //Cifrado del mensaje
  
  for (var i = 0; i < mensaje.length; i++) {
  
    letra = ELEMENTOS.indexOf(mensaje[i]);
  
    if (mensaje[i] === " ") {
  
        mensajeCifrado.push(" ");
    } else {

      //Validacion de limites de caracteres
      if ((letra + paso) >= LONGITUD) {
        
        mensajeCifrado.push(ELEMENTOS[letra + paso - LONGITUD]);
      } else if (letra + paso < 0){
        
        mensajeCifrado.push(ELEMENTOS[letra + paso + LONGITUD]);
      } else  {
        
        mensajeCifrado.push(ELEMENTOS[letra + paso]);
      }
    }
  }

  mensajeCifrado = mensajeCifrado.join("");
  return mensajeCifrado;
}

mns = cifradoCesar("hola", 3);
console.log(mns);
