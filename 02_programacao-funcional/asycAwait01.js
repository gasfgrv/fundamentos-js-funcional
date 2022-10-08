function esperarPor(tempo = 2000) {
    return new Promise(resolve => setTimeout(() => {
        resolve()
    }, tempo))
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(2000)
    console.log(`async/await ${valor}`)
    
    await esperarPor(2000)
    console.log(`async/await ${valor + 1}`)
    
    await esperarPor(2000)
    console.log(`async/await ${valor + 2}`)

    return valor + 3
}

async function executarDeVerdade() {
    const resposta = await executar().then(console.log)
}

executarDeVerdade()
