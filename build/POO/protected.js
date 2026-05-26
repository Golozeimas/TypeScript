"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    mostrarAtributos() {
        console.log(`Esse é o meu nome: ${this.nome} 
e essa é minha idade: ${this.idade}`);
    }
    mostrandoAtributos() {
        this.mostrarAtributos();
    }
}
class Cachorro extends Animal {
    mostrarNome() {
        console.log(this.nome); // permitido
    }
}
const dog = new Cachorro("Rex", 20);
dog.mostrarNome();
dog.mostrandoAtributos();
// erro:
// console.log(dog.nome);
