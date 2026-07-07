"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    // se criar assim métodos dentro do TypeScript
    criarLoja() {
        console.log(`Loja: ${this.nome}, estar na categoria: ${this.categoria}`);
    }
    static exibirLojas(...lojas) {
        if (lojas.length === 0) {
            console.log("Coloque para exibir alguma loja!");
            return false;
        }
        let nome;
        console.log("Lista de lojas: ");
        for (nome of lojas) {
            console.log(nome);
        }
        return true;
    }
    emitirPedidos(mesa) {
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            status = "FECHADO";
            return status;
        }
        else if (status === "FECHADO") {
            status = "ABERTO";
            return status;
        }
    }
}
const loja = new Loja("Renner", "loja de roupas");
const loja2 = new Loja("Centauro", "loja de variedades");
const loja3 = new Loja("Playstation", "Empresa de videogames");
loja.criarLoja();
console.log(loja.emitirPedidos(41));
loja2.criarLoja();
Loja.exibirLojas(loja.nome, loja2.nome, loja3.nome);
console.log(loja.mudarStatus("FECHADO"));
