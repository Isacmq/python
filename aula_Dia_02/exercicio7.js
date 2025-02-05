function media(nota1, nota2) {
    let med = (nota1 + nota2)/2;
    return med;
}

// Armazenando o resultado em variáveis
let resultado = media(8, 8)
if (resultado >= 6) {
    alert("Aprovado! Você tirou: " +resultado);
} else {
    alert("Reprovado! Você tirou: " + resultado);
}
