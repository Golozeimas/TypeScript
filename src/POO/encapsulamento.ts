/* 

Existem 4 modificadores:

public -> todos podem acessar de qualquer classe ou pacote

readonly -> tipo de modificador especial do atributos, você apenas pode ver
não posso modificar

private -> só pode ser acessado e modificado pela a classe que criou

protectd -> pode ser acessado dentro da classe que criou e das suas filhas

*/

class Usuario{
    nome: string;
    private saldo: number
    constructor(nome: string, saldo: number){
        this.nome = nome
        this.saldo = saldo
    }

    mostrarNome(): void{
        console.log("Esse é meu nome: " + this.nome)
    }

    mostrarSaldo(){
        console.log("Esse é meu saldo: " + this.saldo)
    }
}

const user = new Usuario("Rafael", 1800);

user.nome = "Matheus" // modificação por ser público

// user.saldo -> ocorre um erro por ser privado o atributo 'saldo'

user.mostrarNome()


class Produto{
    private _preco: number;

    constructor(preco: number){
        this._preco = preco
    }

    get preco(){
       return this._preco; 
    }

    set preco(valor: number){
        if(valor < 0){
            console.log("Valor negativo")
            return
        }
        this._preco = valor;
    }
}

const p = new Produto(0);

console.log("Antes do SET: ")
console.log(p.preco)

console.log("Depois do SET: ")
// acessa diretamente o SET, o GET é usado normalmente como se fosse o atributo
p.preco = 1000
console.log(p.preco)

