let matriz = [];
let linhas = 3;
let colunas = 3;
for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseInt(prompt("Digite um valor para a posição [' +i+'][' +j+']'));
    }
}

console.log(matriz);

