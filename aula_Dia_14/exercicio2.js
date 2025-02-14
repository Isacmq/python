class Aluno {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }

    calcularMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        let media = soma / this.notas.length;
        document.write(`A média do(a) aluno(a) ${this.nome}, que tem ${this.idade} anos, é ${media}<br>`);
    }
}

let aluno1 = new Aluno("João", 18, [7, 8, 9]);
let aluno2 = new Aluno("Maria", 20, [6, 7, 8]);
aluno1.calcularMedia();
aluno2.calcularMedia();