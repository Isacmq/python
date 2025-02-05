function soma (a,b){
    return a+b;
}

function subtracao (a,b){
    return a-b
}
 function divisao (a,b) {
    return a/b
 }
  function multiplicacao (a,b) {
    return a*b
  }
let funcao = prompt("digite a operaçao").toLowerCase();
let valor1 = parseInt(prompt("digite um numero"));
let valor2 = parseInt(prompt("digite um numero"));

if(funcao=="soma"){
    document.write(soma(valor1,valor2))
} else if(funcao=="subtração"){
    document.write(subtracao(valor1,valor2))
} else if (funcao=="divisão"){
    document.write(divisao(valor1,valor2).toFixed(3))
} else if(funcao=="multiplicação"){
    document.write(multiplicacao(valor1,valor2))
}
