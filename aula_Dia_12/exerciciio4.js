class ProducaoFilme{
    constructor(titulo, diretor, lancamento) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.lancamento = lancamento;
    }
    filme() {
        document.write("O filme "+this.titulo+", foi criado pelo "+this.diretor+" e lançado em "+this.lancamento);
    }
}
let producaoFilme = new ProducaoFilme("Vingadores Ultimato", "Stan Lee", "2019");
producaoFilme.filme();
