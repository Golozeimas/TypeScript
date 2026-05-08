"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let loja;
// e se nós quisermos que sempre siga esse padrão, criamos a interface para isso
loja = {
    nome: "renner",
    objetos: "roupas",
    nivel: "nacional"
};
// colocamos como se fosse um tipo
const loja1 = {
    nome: "renner",
    objetos: "roupas",
    nivel: "nacional"
};
console.log(loja1);
function exibeLoja({ nome, nivel, objetos }) {
    console.log(`Esse é nome da loja: ${nome}`);
    console.log(`Os objeto que são vendidos: ${objetos}`);
    console.log(`O nível dela no mundo: ${nivel}`);
}
exibeLoja({ nome: "Renner", nivel: "Nacional", objetos: "Roupas" });
