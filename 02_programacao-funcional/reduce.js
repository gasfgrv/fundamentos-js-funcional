//  reduce() => executa uma função reducer para cada elemento do array, resultando num único valor de retorno.

// Exemplo 01
const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el
const total = numbers.reduce(sum, 0)
console.log(total)


// Exemplo 02
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}

const result = numbers.reduce(avg)
console.log(result)