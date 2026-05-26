"use strict";
// Heranca -> classe filha que herda de outra classe pai
// Classe pai tem seus atributos e métodos e a classe filha terá esses atributos
// e métodos mas com seus próprios também
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    mostrarNivel() {
        console.log("Esse é o seu nome: " + this.nome);
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    constructor(nome, email, cargo, nivel) {
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const adm1 = new Admin("Matheus", "Joao@matheus.com", "Programador WEB", 0);
console.log(adm1.mostrarNivel());
