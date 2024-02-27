let numeroMaximo = 10;
let tentativas = 1;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumero(numeroMaximo,listaDeNumerosSorteados);

let input = document.querySelector('.container__input');
input.max = numeroMaximo;

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
}

exibirMensagemInicial();

//função que vai retornar um número aleatório graças ao Math.random, com limitação de número graças ao parâmetro numeroMaximo
function gerarNumero(numeroMaximo,listaDeNumerosSorteados){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNalista == numeroMaximo) {
        listaDeNumerosSorteados = [];
        }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
//E
function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Parabéns');
        exibirTextoNaTela('p',`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        }
        else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

//foi pensado essa função como uma forma de não duplicar códigos, já que precisávamos de alguma forma gerar o texto sem precisar repetir mais uma vez, dessa forma fica mais prática
function exibirTextoNaTela(tag,texto){
    //document.querySelector basicamente ta localizando a tag desejada definida entre parenteses e atribuindo essa localização em uma variável campo
    let campo = document.querySelector(tag);
    //com o querySelector e atribuindo no campo, conseguimos inserir um texto dentro da tag
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    let listaDeNumerosSorteados = [];
    exibirMensagemInicial();
    numeroSecreto = gerarNumero(numeroMaximo,listaDeNumerosSorteados);
    limparCampo();
    tentativas = 1;
}
