"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let valor;
valor = 20;
if (typeof valor === 'number') {
    let salario = valor * 2;
    console.log(salario);
}
// outro caso de uso
let valor2;
valor2 = 20;
// let total:number = valor2 erro de tipagem, não podemos atribuir o unknown para qualquer 
// tipo, apenas para o tipo any
let total = valor2; // correto, ou se fosse unknown
