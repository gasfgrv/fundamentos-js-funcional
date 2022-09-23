// IIFE - Immediately invoked function expression
(function (a, b, c) {
    console.log(a + b * c);
})(1, 2, 3);


// para usar mais de uma iife deve usar ;
(function (percentual, total) {
    console.log((percentual / 100) * total);
})(30, 700);


// dá para criar arrow functions como iife
((numero) => {
    console.log('Tabuada');
    for (let index = 0; index < 10; index++) {
        console.log(`${numero} x ${index + 1} = ${numero * (index + 1)}`)
    }
})(5)