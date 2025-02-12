class contaBamcaria {
    #saldo; //atributo ptrivado
    constructor(titular, saldo) {
        this.titular = titular;
        this.#saldo = saldo;
    }
depositar(valor) {
        this.#saldo += valor;
        document.write("deposit de R$ " +this.#valor + "realizado");
}
consultarSaldo() {
    document.write("Saldo Atual: R$ " + this.#saldo);   
}
sacar(valor) {
    if (valor >= this.#saldo) {
        document.write("Saldo insuficiente" +this.#titular);
    } else {
        this.#saldo -= valor;
        document.write("Saque apos o saque " + valor +this.#saldo);
}
}
transferir(valor, destino) {
    if (valor >= this.#saldo) {
        document.write("Saldo insuficiente para o titular " + this.#titular);
    } else {
        this.#saldo -= valor;
        destino.saldo += valor;
        document.write("Transferencia de R$ " + valor + " realizada" + destino.titular);
    }
}
}

let cliente1 = new ContaBancaria("João", 1000.00);
let cliente2 = new ContaBancaria("jose", 500.00);
cliente1.consultarSaldo();
cliente1.consultarSaldo();

