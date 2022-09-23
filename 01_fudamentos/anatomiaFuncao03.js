// Arrow function
const hipotenusa = (a, b) => {
    const quadradoCatetoOposto = Math.pow(a, 2)
    const quadradoCatetoAdjacente = Math.pow(b, 2)

    return Math.sqrt(quadradoCatetoOposto + quadradoCatetoAdjacente)
}

console.log(hipotenusa(4, 3))


// quando a função não tem corpo (par de chaves), essa função terá apenas uma única linha, e tudo que estiver nessa linha será retonado automáticamente
const temperaturaKelvin = temperaturaCelsius => temperaturaCelsius + 273.15

console.log(temperaturaKelvin(30));


// no caso da função ter apenas 1 parâmetro, o uso dos parenteses é opcional
const raizCubica = numero => {
    return Math.cbrt(numero)
}

console.log(raizCubica(125))