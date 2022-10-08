function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        }

        resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdeNumeros) {
    try {
        const numeros = []

        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }

        return numeros.sort((a, b) => a - b)
    } catch (_) {
        throw 'Deu problema'
    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)
