class Produto {

    constructor(nome, preco, desconto) {
        this._nome = nome
        this.preco = preco
        this.desconto = desconto
    }

    get precoFinal() {
        return this.preco * (1 - this.desconto)
    }

    get nome() {
        return this._nome
    }
    
    set nome(novoNome) {
         this._nome = novoNome.charAt(0).toUpperCase() + novoNome.slice(1)
    }
}

const p1 = new Produto('caneta', 8.59)
p1.nome = 'caneta azul'
console.log(p1._nome)

const p2 = new Produto('geladeira', 10000.00, 0.8)
console.log(p2.preco)
console.log(p2.precoFinal)