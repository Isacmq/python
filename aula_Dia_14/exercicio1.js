class Livros {
    constructor(titulo,autor,anoPublicado)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
    }

    amostrarLivro(){
    document.write(`o titulo do livro é: ${this.titulo}`)
    document.write(`o autor do livro é: ${this.autor}`)
    document.write(`o ano de publicação do livro é: ${this.anoPublicado}`)
    }
}

let livro1 = new Livros("Genio incompreendido", "isac", 2025);
livro1.amostrarLivro();