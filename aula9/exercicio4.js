const num = prompt(`Diga o decimal desejado:`)

document.write(`${num} arredondado para cima: ${Math.ceil(num)}<br>`)
document.write(`${num} arredondado para baixo: ${Math.floor(num)}<br>`)
document.write(`${num} arrendodado normalmente: ${Math.round(num)}`)