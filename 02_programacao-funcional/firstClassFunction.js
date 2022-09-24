// Quando uma função é tratada como qualquer outro valor dentro da linguagem
const add = function (a, b) {
    return a + b
}

const subtract = function sub(a, b) {
    return a - b
}


const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => a / b

console.log(add(10, 30));
console.log(subtract(10, 30));
console.log(multiply(10, 30));
console.log(divide(10, 30));