"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplyMixin_1 = require("./mixin/ApplyMixin");
class Automovel {
    ligar() {
        console.log("Automóvel ligado com sucesso!");
    }
    desligar() {
        console.log("Automóvel desligado com sucesso!");
    }
}
class Especificao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome, cavalaria, tamanho_da_roda) {
        this.nome = nome;
        this.cavalaria = cavalaria;
        this.tamanho_da_roda = tamanho_da_roda;
    }
}
// aplicamos o mixin, na classe que queremos que receba
// e nas classes que extendemos
(0, ApplyMixin_1.applyMixins)(Carro, [Especificao, Automovel]);
const carro = new Carro("Corolla 2020", 177, 16);
carro.ligar();
carro.descricao = "Carro mais foda do mercado!";
carro.desligar();
