// correção do 10 com 2 arrays
let nome   = [];
let cidade = [];

//coletando os dados de 10 itens
for (let i=0; i<3; i++){
    nome.push(prompt("informe o nome da pessoa "+(i+1)+":"));
    cidade.push(prompt("informe a cidade da pessoa "+(i+1)+":"));
}

let indice;
let continua;
while (true){
    indice = prompt("Informe o índice");
    if (indice>=0 && indice<3) {
        alert("Nome..: "+nome[indice]+" Cidade: "+cidade[indice]);
    } else {
        alert("índice inválido");
    }
    continua = prompt("deseja ler outro índice <s/n>").toLowerCase();
    if (continua !="s") break;
}
