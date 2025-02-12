// Criando a matriz 3x3 com notas dos alunos
const notas = [
    [7.5, 8.0, 6.5],
    [5.0, 9.5, 7.0],
    [6.0, 4.5, 8.5]
];

// Exibindo a matriz de forma organizada
console.log("Matriz de Notas:");
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i].join(" | "));
}

// Calculando e exibindo a média das notas de cada aluno
console.log("\nMédia das notas de cada aluno:");
for (let i = 0; i < notas.length; i++) {
    const soma = notas[i].reduce((acc, nota) => acc + nota, 0);
    const media = soma / notas[i].length;
    console.log(`Aluno ${i + 1}: ${media.toFixed(2)}`);
}

// Identificando e exibindo a maior nota da matriz
let maiorNota = notas[0][0];
for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        if (notas[i][j] > maiorNota) {
            maiorNota = notas[i][j];
        }
    }
}
console.log(`\nMaior nota da matriz: ${maiorNota}`);

// Substituindo todas as notas menores que 6 por 6
for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        if (notas[i][j] < 6) {
            notas[i][j] = 6;
        }
    }
}

// Exibindo a matriz após a substituição
console.log("\nMatriz de Notas após substituição:");
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i].join(" | "));
}