const input_texto = document.querySelector('#textcode');
const input_mensagem = document.querySelector('#input-mensagem');
const mensagem_erro = document.querySelector('#mensagem-erro');
const content_answer = document.querySelector('#content-answer');
const content_response = document.querySelector('#content-response');

let matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
  
  
function btnCriptografar() {
    const textoCriptografado = Criptografar(input_texto.value);
    if (textoCriptografado === null) {
        mensagem_erro.textContent = "Apenas letras minúsculas e sem acento.";
    } else {
        mensagem_erro.textContent = "";
        input_mensagem.value = textoCriptografado;
        input_texto.value = "";
        verificarMensagem();
    }
}
  
function Criptografar(stringCriptografada) {
    if (!/^[a-z ]+$/.test(stringCriptografada)) {
        return null;
    }

    for (let i = 0; i < matriz_code.length; i++) {
        const regex = new RegExp(matriz_code[i][0], "g");
        stringCriptografada = stringCriptografada.replace(regex, matriz_code[i][1]);
    }
    return stringCriptografada;
}
  
function btnDescriptografar() {
    const textoDescriptografado = Descriptografar(input_texto.value);
    if (textoDescriptografado === null) {
        mensagem_erro.textContent = "Apenas letras minúsculas e sem acento.";
    } else {
        mensagem_erro.textContent = "";
        input_mensagem.value = textoDescriptografado;
        input_texto.value = "";
        verificarMensagem();
    }
}
  
function Descriptografar(stringDescriptografada) {
    if (!/^[a-z ]+$/.test(stringDescriptografada)) {
        return null;
    }

    for (let i = 0; i < matriz_code.length; i++) {
        const regex = new RegExp(matriz_code[i][1], "g");
        stringDescriptografada = stringDescriptografada.replace(regex, matriz_code[i][0]);
    }
    return stringDescriptografada;
}
  
function Copiar() {
    input_mensagem.select();
    navigator.clipboard.writeText(input_mensagem.value);
    input_mensagem.value = "";
    verificarMensagem();
}

function verificarMensagem() {
    if (input_mensagem.value.trim() === '') {
        content_answer.style.display = 'flex';
        content_response.style.display = 'none';
    } else {
        content_answer.style.display = 'none';
        content_response.style.display = 'flex';
    }
}

verificarMensagem();

input_mensagem.addEventListener('input', verificarMensagem);

