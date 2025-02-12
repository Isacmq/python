class carro {
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = ano;
    }

    //metodo
acelerar() {
    document.write("o carro " + this.modelo + "esta acelerando");
    }

    frear() {
        document.write("o carro " + this.modelo + "esta freando");
        }
}

//criando um objeto a partir da classe carro 
let meucarro = new carro("toyota","corola","preto");
meucarro.acelerar();
let meuOutrocarro = new carro("toyota","fiat","preto");
meucarro.acelerar();xx