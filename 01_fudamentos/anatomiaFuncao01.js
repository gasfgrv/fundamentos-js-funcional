// Declaração - functuon declaration
function sayHello() {
    console.log('hello')
}

sayHello()


function sayHelloTo(name) {
    console.log(`hello ${name}`)
}

sayHelloTo('dog')


function returnHi() {
    return 'Hi!'
}

console.log(returnHi());

const greeting = returnHi()
console.log(greeting);


function returnHiTo(name) {
    return `Hi, ${name}`
}

console.log(returnHiTo('cat'));

const greetingTo = returnHi('cat')
console.log(greeting);