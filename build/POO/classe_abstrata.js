"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// definição de classe abstrata
class Animal {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        if (dados.nome.length === 0) {
            return false;
        }
        if (dados.endereco.length === 0) {
            return false;
        }
        if (dados.numero.length === 0) {
            return false;
        }
        console.log("Conta criado com sucesso!");
        return true;
    }
}
const p = new PessoaFisica();
p.abrirConta({
    nome: 'Matheus',
    endereco: 'Rua antonia carlos costas',
    numero: '1023'
});
