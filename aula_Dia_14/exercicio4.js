class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
    descontoCria() {
        this.preco -= this.preco * 0.1
    }
    exibirProduto() {
        document.write(`Nome: ${this.nome}<br>Preço: <strong>R$ ${this.preco}</strong><p>`)
    }
}
elden = new Produto("banana", 2)
elden.exibirProduto()
elden.descontoCria()
elden.exibirProduto()

// Saída:
