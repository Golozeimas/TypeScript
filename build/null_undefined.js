"use strict";
// casos onde o retorno é undefined
Object.defineProperty(exports, "__esModule", { value: true });
let x; // inicializou sem nada
console.log(x);
function funcao_que_nao_retorna_nada() {
}
console.log(funcao_que_nao_retorna_nada());
const obj = {};
console.log(obj.nome); // não existe esse atributo
// casos onde se retorna nulo ou null
let nome; // é manual, nesse caso nome pode ser uma string ou null (vazio)
nome = "matheus";
nome = null;
console.log(nome);
