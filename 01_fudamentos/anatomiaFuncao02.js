// Função anônima
(function (c, i, n) {
    return c * Math.pow((1 + i), i)
})

// Function expression
var temperaturaCelsius = function(temperaturaFahrenheit) {
    return (temperaturaFahrenheit - 32) * 5 / 9
}

const temperaturaConvertida = temperaturaCelsius(50)
console.log(temperaturaConvertida)