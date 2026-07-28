class CarroEletrico extends Carro {
    constructor(marca, modelo, ano, capacidadedeBateria) {
        super(marca, modelo, ano);
        this.capacidadedeBateria = capacidadedeBateria;
    }
    imprimirDetalhes() {
        return
        `
        Marca:${this.marca};
        Modelo:${this.modelo};
        Ano:${this.ano};
        Capacidade de bateria:${this.capacidadedeBateria} kwh
        `
    }
}

const carro1 = new Carro(
    "Toyota",
    "Corolla",
    2022
);

const carro2 = new CarroEletrico(
    "Tesla",
    "Model 3",
    2024,
    75
);

function mostrarCarros() {
    document.getElementById("resultado").innerHTML =
        "<b>Carro Convencional</b><b>" +
        carro1.imprimirDetalhes() +
        "<br><br><br>CarroEletrico</br>"
}
