class tv {
    constructor(CanalAtual, volume) {
        this.canalAtual = CanalAtual;
        this.volume = volume;
    }

    aumentarVolume(volume) {
        if (volume >= 100){
            volume = 100
        } else {
        this.volume += volume;
        return this.volume;
        }
    }

    diminuirVolume(volume) {
        if (volume <= 0){
            volume = 0
        } else {
        this.volume -= volume;
        return this.volume;
        }
    }

    mudarCanal(canal) {
        this.canalAtual = canal;
        return canal;
    }
}

const minhaTV = new tv(5, 50);
console.log("Canal atual:", minhaTV.mudarCanal(10));
console.log("Volume atual após aumentar:", minhaTV.aumentarVolume(30));
console.log("Volume atual após diminuir:", minhaTV.diminuirVolume(20));