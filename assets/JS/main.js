const botaoCriptografar = document.getElementById('criptografar');
const botaoDescriptografar = document.getElementById('descriptografar');
const botaocopiar = document.getElementById('copiar');
const textoEntrada = document.getElementById('entrada');
const textoSaida = document.getElementById('saida');
const imagemSaida = document.getElementById('imagem_saida');

function criptografarTexto(texto){
    let textoCriptografado = texto.replace(/e/g,"enter");
    textoCriptografado = textoCriptografado.replace(/i/g, "imes");
    textoCriptografado = textoCriptografado.replace(/a/g, "ai");
    textoCriptografado = textoCriptografado.replace(/o/g, "ober");
    textoCriptografado = textoCriptografado.replace(/u/g, "ufat");
    return textoCriptografado;
}

function chamadaDeCriptografia(){
    const texto = textoEntrada.value;
    if (texto==""){
        imagemSaida.style.display = 'block';
        textoSaida.innerText = "";
    }else{
        imagemSaida.style.display = 'none';
        textoSaida.innerText = criptografarTexto(texto);
    }
}

function descriptografarTexto(texto){
    let textoDescriptografado = texto.replace(/enter/g, "e");
    textoDescriptografado = textoDescriptografado.replace(/imes/g, "i");
    textoDescriptografado = textoDescriptografado.replace(/ai/g, "a");
    textoDescriptografado = textoDescriptografado.replace(/ober/g, "o");
    textoDescriptografado = textoDescriptografado.replace(/ufat/g, "u");
    return textoDescriptografado;
}

function chamadaDeDescriptografia(){
    const texto = textoEntrada.value;
    if (texto==""){
        imagemSaida.style.display = 'flex';
        textoSaida.innerText = "";
    }else{
        imagemSaida.style.display = 'none';
        textoSaida.innerText = descriptografarTexto(texto);
    }
}

botaoCriptografar.addEventListener('click',chamadaDeCriptografia);
botaoDescriptografar.addEventListener('click',chamadaDeDescriptografia);

function copiar(){
    const textoParaSalvar = textoSaida.innerText;
    navigator.clipboard.writeText(textoParaSalvar).then(() => alert('Texto Copiado!!'));
}

botaocopiar.addEventListener('click', copiar);