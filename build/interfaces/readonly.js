"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produto1 = {
    id: 1,
    nome: "PS5",
    descricao: "Vídeogame da atual geração de consoles"
};
produto1.nome = "PS4";
// produto1.id = 10 // dá erro apontando que tem a propriedade readonly
console.log(produto1);
