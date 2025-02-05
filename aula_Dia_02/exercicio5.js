// quetão 5
function contar(num, numero) {
    alert("contar!")

    for (i = num; i <= numero; i++) {
        document.write(i + "<br>")
    }
}

let num = prompt("escolha um numero")
let numero = prompt("escolha o numero maximo")
contar(num, numero)
