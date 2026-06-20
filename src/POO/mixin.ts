import { applyMixins } from "./mixin/ApplyMixin"

class Automovel{
    ligar(): void{
        console.log("Automóvel ligado com sucesso!")
    }

    desligar(): void{
        console.log("Automóvel desligado com sucesso!")
    }
}

class Especificao{
    descricao: string;

    constructor(descricao: string){
        this.descricao = descricao
    }
}

class Carro{
    nome: string;
    cavalaria: number;
    tamanho_da_roda: number;

    constructor(nome: string, cavalaria: number, tamanho_da_roda: number){
        this.nome = nome;
        this.cavalaria = cavalaria;
        this.tamanho_da_roda = tamanho_da_roda;
    }

}

// criamos uma interface para extendermos mais de uma classe
interface Carro extends Especificao, Automovel{}

// aplicamos o mixin, na classe que queremos que receba
// e nas classes que extendemos
applyMixins(Carro, [Especificao, Automovel])

const carro = new Carro("Corolla 2020", 177, 16);

carro.ligar();
carro.descricao = "Carro mais foda do mercado!";
carro.desligar();