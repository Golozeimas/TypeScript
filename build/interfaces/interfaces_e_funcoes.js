"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarPromocao(preco) {
    console.log(`Promoção por apenas: R$${preco.toFixed(2)}`);
}
let curso2 = {
    id: "123",
    nome: "Engenharia de software",
    preco: 1400,
    promocao: mostrarPromocao
};
console.log(curso2.promocao(2));
const soma = (v1, v2) => {
    return v1 + v2;
};
console.log(soma(10, 2));
