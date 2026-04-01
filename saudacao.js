function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
}

saudacao("Papador de véias");

function subirDeNivel(nivelAtual) {
    return nivelAtual + 1;
}

let meuNivel = Infinity;

let nivelAtualizado = subirDeNivel(meuNivel);

console.log('Seu novo nivel: ' + nivelAtualizado);

