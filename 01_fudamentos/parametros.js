function logParams(a, b, c) {
    console.log(a, b, c);
}

logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)
logParams(1, 2)
logParams(1)
logParams()


// definindo valor padrão para um parâmetro
function parametrosDefault(a, b, c = 0) {
    console.log(a, b, c)
}

parametrosDefault(7, 8)


//spread operator
function logNums(...nums) {
    for (let num of nums) {
        console.log(num)
    }
}

logNums(1, 2, 3, 4, 5)