function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'

        return
    }

    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `
            <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>
        `

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Acertou miseravi !!!</h2>
            <h3>${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor</div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior</div>
        `
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})