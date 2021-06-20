/*
2 Descricao :
5 Nome Completo:Luana
6 Data :20/06

8 */

const MAX_ERROS = 7

// Métodos do jogo

function obterLetra(palavra, posicao) {
    let letraAtual = ''
    if (posicao == palavra.length - 1) {
        letraAtual = palavra.substring(posicao)
    } else {
        letraAtual = palavra.substring(posicao, posicao + 1)
    }
    return letraAtual
}

function obterPosicaoLetraDigitada(palavra, letra) {
    let posicoesLetras = []
    for (let posicao = 0; posicao < palavra.length; posicao++) {
        let letraAtual = obterLetra(palavra, posicao)

        if (letraAtual == letra) {
            posicoesLetras.push(posicao)
        }
    }
    return posicoesLetras
}

function trocarPosicoesPalavraExibida(posicoesLetras, palavraExibida, letra) {
    for (let i = 0; i < posicoesLetras.length; i++) {
        let a = posicoesLetras[i]
        palavraExibida[a] = letra
    }
}

function printarPalavraExibida(palavraExibida) {
    let a = ''
    for (let i = 0; i < palavraExibida.length; i++) {
        a += palavraExibida[i] + " "
    }
    console.log(a)
}

// Aqui começa o jogo

async function main() {
    let numero = 0
    while (numero != 2) {
        numero = prompt('Digite a opção desejada: (1) Iniciar (2) Sair')
        if (numero == 1) {
            await iniciarJogo()
        }
        console.clear()
    }
}
main()

async function iniciarJogo() {
    console.clear()
    console.log('Jogo Iniciado')

    let letra = ''
    let palavra = 'cachorro'
    let palavraExibida = ['_', '_', '_', '_', '_', '_', '_', '_']
    let letrasDigitadas = []
    let letrasErradas = []

    while (letra != 'exit') {
        letra = prompt('Digite uma letra ou EXIT para sair: ')
        if (letrasDigitadas.includes(letra)) {
            console.clear()
            console.log('Letra repetida, tente outra vez migles')
            printarPalavraExibida(palavraExibida)
            continue
        }

        letrasDigitadas.push(letra)

        let posicoesLetras = obterPosicaoLetraDigitada(palavra, letra)

        if (posicoesLetras.length == 0) {
            letrasErradas.push(letra)
            if (letrasErradas.length == MAX_ERROS) {
                prompt('Lascou: perdesse! Chora não!!! Digite ENTER para continuar')
                break // o jogo acaba
            } else if (letrasErradas.length >= 5) {
                console.log(`Cuidado que já errasse ${letrasErradas.length} vezes! Vai perderrrr!`)
            } else {
                console.log(`Se liga que já errasse ${letrasErradas.length} vezes`)
            }
            continue
        }

        trocarPosicoesPalavraExibida(posicoesLetras, palavraExibida, letra)

        console.clear()
        printarPalavraExibida(palavraExibida)


        if (!palavraExibida.includes('_')) {

            console.log('!!!!!!!!!!!!!!!!!!')
            console.log('GANHOUUUU JUNIOOO')
            console.log('!!!!!!!!!!!!!!!!!!')

            console.log('(Digite ENTER para continuar)')

            break //letra = 'exit'

        }
    }
}