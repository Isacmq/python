class Produto{
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    produto() {
        document.write("O produto "+this.nome+" tem um preço de R$ "+this.preco+" e tem uma quantia de "+this.quantidade+ " do próprio.")
    }
}
let prod = new Produto("Sabão", "14,99", "10")
prod.produto();