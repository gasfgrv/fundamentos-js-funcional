// Quando a linguagem permite que a função opere usando outras funções, ou seja, poder passar uma função como argumento para outra ou retonar uma função a partir de outra função
function run(fn) {
    fn()
}

function sayHello() {
    console.log('Hello')
}

run(sayHello)

run(function () {
    console.log('run')
})


function runWithReturn(fn) {
    return fn()
}

const random = runWithReturn(Math.random)
console.log(random)