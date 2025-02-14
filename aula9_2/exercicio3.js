let numeros = [12,34,48,5,13]

console.log("Números do vetor: ");
console.log(numeros);

console.log("Números pares: ");
for (let i = 0; i < numeros.length; i++) {
    if (numeros [i] % 2 == 0) {
        console.log(numeros[i]);
    }
}