
// Heranca -> classe filha que herda de outra classe pai
// Classe pai tem seus atributos e métodos e a classe filha terá esses atributos
// e métodos mas com seus próprios também

class Usuario{
    nome: string;
    email: string;

    constructor(nome: string, email: string){
        this.nome = nome
        this.email = email
    }

    mostrarNivel(): void{
        console.log("Esse é o seu nome: " + this.nome)
    }

}

class Admin extends Usuario{
    cargo: string;
    nivel: number;
    
    constructor(nome: string, email: string, cargo: string, nivel: number){
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }

}

const adm1 = new Admin("Matheus", "Joao@matheus.com", "Programador WEB",  0)

console.log(adm1.mostrarNivel())