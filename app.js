let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1


function exibirTextoNaTela(tag, texto) {
  const campo = document.querySelector(tag)
  campo.innerHTML = texto
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2})
}
exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número de 1 a 10')

function verificarChute() {
  const chute = parseInt(document.querySelector('input').value)

  if(chute == numeroSecreto) {
    document.getElementById('reiniciar').disabled = false
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`

    exibirTextoNaTela('h1', 'Você acertou! Parabéns!')
    exibirTextoNaTela('p', mensagemTentativas)
  } else if(chute < numeroSecreto) {
    exibirTextoNaTela('p', 'O número secreto é maior')
    tentativas++
  } else {
    exibirTextoNaTela('p', 'O número secreto é menor')
    tentativas++
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

  if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = []
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido
  }
}

function reiniciarChute() {
  exibirTextoNaTela('h1', 'Jogo do número secreto')
  exibirTextoNaTela('p', 'Escola um número de 1 a 10')

  limparCampo()

  numeroSecreto = gerarNumeroAleatorio()
  tentativas = 1
}

function limparCampo() {
  chute = document.querySelector('input')
  chute.value = ''
}





