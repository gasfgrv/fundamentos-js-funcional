// curring
function finalPrice(tax) {
    return (price) => price * (1 + tax)
}

const taxFinalPrice = finalPrice(0.0875)

console.log(taxFinalPrice(100.00).toFixed(2))