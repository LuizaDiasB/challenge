const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function botaoCriptografar(){
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
}

function criptografar(stringCriptografada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}


function botaoDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";
}

function descriptografar(stringDescriptografar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografar = stringDescriptografar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptografar.includes(matrizCodigo[i][1])) {
            stringDescriptografar = stringDescriptografar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografar;
}

function botaoCopiar() {
    const texto = mensagem.value;
    navigator.clipboard.writeText(texto).then(() =>{
        console.log("Texto copiado para área de transderência " + texto);
    }).catch((error) => {
        console.error("Erro ao copiar texto ", error);
    });
    mensagem.value = " ";
}