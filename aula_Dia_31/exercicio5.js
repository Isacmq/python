let nome = prompt("Informe o seu nome.");
let vezes = parseInt(prompt("Informe o numero de vezes que o nome irá aparecer na tela."));
let i = 0;

while(i<vezes){
    document.write(nome+"<br>");
    vezes--;
}
