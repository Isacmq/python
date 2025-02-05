// quetão 6
function nomeDoMes(n) {
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio",
                "Junho","Julho", "Agosto", "Setembro", "Outubro",
                "Novembro", "Dezembro"];
    return meses[n - 1];
}

let mes = parseInt(prompt("informe o número do mês: "))
document.write(nomeDoMes(mes))