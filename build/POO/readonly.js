"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    mostrarId() {
        console.log('ID do usuário: ' + this.id);
    }
}
const ana = new Pessoa('Ana carol', 20);
// corrijo isso com a propriedade 'readonly', permitido apenas leituras dos dados,
// sem sobreescrita deles, posso acessar com o objeto e com um método
// diferenciando do private
// ana.id = "1" // posso alterar o ID, não é recomendado 
console.log(ana);
ana.mostrarId();
console.log(ana.id);
