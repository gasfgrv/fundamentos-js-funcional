function range(a, b, s = 1) {
    const nums = []
    
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b    
    const step = n1 <= n2 
        ? Math.abs(s) 
        : -Math.abs(s)

    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
        nums.push(i)
    }

    return nums
}

console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(12, -10, 5))