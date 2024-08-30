function validar(caracteres) {
  let noPermitido = /[^a-z]/;
  return !noPermitido.test(caracteres);
}

function encriptar() {
  let texto = document.getElementById("inputTexto").value; //.toLowerCase();
  //i es para que afecte tanto a mayusculas y minusculas
  //g es para toda la oracion
  //m es para afectar multiples lineas

  let txtCifrado = texto.replace(/e/gim, "enter");
  txtCifrado = txtCifrado.replace(/o/gim, "ober");
  txtCifrado = txtCifrado.replace(/i/gim, "imes");
  txtCifrado = txtCifrado.replace(/a/gim, "ai");
  txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  document.getElementById("img-derecha").style.display = "none";
  document.getElementById("txt").style.display = "none";
  document.getElementById("txt2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  let texto = document.getElementById("inputTexto").value;

  let txtCifrado = texto.replace(/enter/gim, "e");
  txtCifrado = txtCifrado.replace(/ober/gim, "o");
  txtCifrado = txtCifrado.replace(/imes/gim, "i");
  txtCifrado = txtCifrado.replace(/ai/gim, "a");
  txtCifrado = txtCifrado.replace(/ufat/gim, "u");

  document.getElementById("img-derecha").style.display = "none";
  document.getElementById("txt").style.display = "none";
  document.getElementById("txt2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  let contenido = document.querySelector("#txt2");
  contenido.select();
  navigator.clipboard.writeText(contenido.value).then(() => {
    alert("Texto copiado");
  });
}
