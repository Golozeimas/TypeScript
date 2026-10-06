"use strict";
// esse arquivo mostra a diferença entre interface e type no TypeScript
// uma interface é uma forma de definir o formato de um objeto
// um type é uma forma de definir um tipo
// a diferença é que interface pode ser extendida e type não
Object.defineProperty(exports, "__esModule", { value: true });
let jogo = {
    name: "Cyberpunk 2077",
    plataforma: "PC",
    preco: 199.99,
    tipo: "DLC",
    precoDlc: 99.99
};
console.log(jogo);
let jogoDlc = {
    name: "Cyberpunk 2077",
    plataforma: "PC",
    preco: 199.99,
    tipo: "DLC",
    precoDlc: 99.99
};
console.log(jogoDlc);
let idade = 25;
let idadeInterface = { idade: 25 };
console.log(idade);
console.log(idadeInterface);
let dificuldade = "Fácil";
console.log(dificuldade);
