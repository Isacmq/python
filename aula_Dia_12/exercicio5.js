class Person {
    constructor(nome, energia, nivel) {
        this.nome = nome;
        this.energia = energia;
        this.nivel = nivel;
    }
    aumentarEnergia(atbEnergia) {
        this.energia += atbEnergia
        if (this.energia > 100) {
            document.write("Sua energia está no máximo. " + "| Total: " + (this.energia=100))
            document.write("<br>---------------------------------<br>")
        } else {  
            document.write("Você ganhou mais " + atbEnergia + " de energia. " + "| Total: " + this.energia)
            document.write("<br>---------------------------------<br>")
        }
    }
    perderEnergia(atbEnergia) {
        if (atbEnergia > this.energia) {
            this.energia = 0
            document.write("Sua energia foi zerada")
            document.write("<br>---------------------------------<br>")

        } else {
            this.energia -= atbEnergia
            document.write("Você perdeu " + atbEnergia + " de energia. " + "| Total: " + this.energia)
            document.write("<br>---------------------------------<br>")

        }
    }
    subirNivel(exp) {
        document.write("Parabéns, você subiu de nível: " + this.nivel)
        this.nivel += exp
        document.write(" >>> " + this.nivel)
        document.write("<br>---------------------------------<br>")

    }
    consultarAtrib() {
        document.write("Nome: " + this.nome + "<br>" + "Energia: " + this.energia + "<br>" + "Nivel: " + this.nivel + "<br>")
        document.write("<br>---------------------------------<br>")
    }
}

let person1 = new Person("Sarah", 100, 1)

person1.consultarAtrib();
person1.aumentarEnergia(10);
person1.subirNivel(1);
person1.consultarAtrib();
person1.perderEnergia(50)
person1.subirNivel(1)
person1.consultarAtrib()