class Carro {
    constructor(marca, modelo, nao) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = nao;
    }
    imprimirdetalhe() {
        return
        `
        marca:${this.marca}
        modelo:${this.modelo}
        ano:${this.ano}
        `
    }
}
