const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");
const campo_copiar = document.querySelector("#botonCopiar")

const matriz_code_enc = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

const matriz_code_des = [
    ["u", "ufat"],
    ["o", "ober"],
    ["a", "ai"],    
    ["i", "imes"],
    ["e", "enter"],
];

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_texto.value = "";
    campo_mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_texto.value = "";
}

function btnCopiar() {
    const texto = copiar(campo_mensaje.value);
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code_enc.length; i++) {
        if (fraseEncriptada.includes(matriz_code_enc[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code_enc[i][0],
                matriz_code_enc[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code_des.length; i++) {
        if (fraseEncriptada.includes(matriz_code_des[i][1])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code_des[i][1],
                matriz_code_des[i][0]
            );
        }
    }
    return fraseEncriptada;
}

campo_copiar.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(campo_mensaje.value);
      alert("Mensaje copiado");
    } catch (err) {
      console.error(err.name, err.message);
      alert("Mensaje no copiado");
    }
  });
