const keys_encrip = new Map();
keys_encrip.set("e", "enter");
keys_encrip.set("i", "imes");
keys_encrip.set("a", "ai");
keys_encrip.set("o", "ober");
keys_encrip.set("u", "ufat");

const keys_desencrip = new Map();
keys_desencrip.set("enter", "e");
keys_desencrip.set("imes", "i");
keys_desencrip.set("ai", "a");
keys_desencrip.set("ober", "o");
keys_desencrip.set("ufat", "u");

function cadenaValida(cadena) {
  expresion = /[A-Zá-úÁ-Ú]/g;
  if (cadena.match(expresion) != null) {
    return false;
  } else {
    return true;
  }
}

function encriptar() {
  // Lectura de entrada
  if (cadenaValida(document.getElementById("input-text").value) == false) {
    alert("Solo letras minusculas y sin acento");
    return;
  }
  var input = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";
  var output = "";

  // Proceso de encriptacion
  for (const element in input) {
    if (keys_encrip.get(input[element]) != undefined) {
      output = output + keys_encrip.get(input[element]);
    } else {
      output = output + input[element];
    }
  }

  // Retorno de entrada encriptada
  document.getElementById("output-text").value = output;

  document.getElementById("salida-llena").style.display = "block";
  document.getElementById("salida-vacia").style.display = "none";
}

function desencriptar() {
  // Lectura de entrada
  if (cadenaValida(document.getElementById("input-text").value) == false) {
    alert("Solo letras minusculas y sin acento");
    return;
  }

  var input = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";
  var output = "";

  // Proceso de desencriptacion
  for (let element of keys_desencrip.keys()) {
    console.log(element);
    input = input.replaceAll(element, keys_desencrip.get(element));
    output = input;
  }

  // Retorno de entrada desencriptada
  document.getElementById("output-text").value = output;

  document.getElementById("salida-llena").style.display = "block";
  document.getElementById("salida-vacia").style.display = "none";
}

function copyToClipBoard() {
  var content = document.getElementById("output-text");
  content.select();
  document.execCommand("copy");

  document.getElementById("salida-vacia").style.display = "block";
  document.getElementById("salida-llena").style.display = "none";
}
