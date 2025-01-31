let nome, cadastro = "";
let continua = "s";
let i = 0;
while(continua == "s") {
    nome = prompt("informe seu nome");
    cadastro += nome + "<br>";
    i++;
    continua = prompt("Deseja cadastrar mais nomes? (s/n)");
}

document.write(cadastro);
document.write("foram lidos"+i+"nomes");
