"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    // construtor: ao instância definir valores iniciais para os atributos
    // inicializa junto com a classe esse método
    constructor(nome, idade) {
        // this -> é usado para acessar atributos dentro da classe
        // instancia a própria classe
        this.nome = nome;
        this.idade = idade;
    }
    // método que fica dentro da classe, como uma função mas nesse caso n precisa
    // de nenhuma palavra reservada só o retorno
    apresentar() {
        console.log(`Meu nome é ${this.nome}`);
        console.log(`E eu tenho ${this.idade} anos de idade`);
    }
    verificaIdade(idade) {
        if (idade < 18) {
            return false;
        }
        console.log("Maior de idade!");
        return true;
    }
}
// fora da classe instanciando objetos
const pessoa1 = new Pessoa("Matheus", 20);
pessoa1.apresentar();
pessoa1;
