
function VerificaPessoa(idade: number){
    
    // target -> o construtor da classe
    // key -> a propriedade do objeto
    // em metódos -> description que tipa como PropertyDescriptor
    return (target: any, key: string, description: PropertyDescriptor) =>{

        // salvando o metodo original
        const metodoOriginal = description.value

        // mudando o metod, vai sobreescrever, como é salvo na PropertDescriptor
        description.value = function(){
            if (idade < 18){
                console.log("Cadastrando menor de idade!")
            }
            else{
                console.log("Cadastrando pessoa adulta!")
                return metodoOriginal.apply(this)
            }
        }
    }
}

class Pessoa{

    nome: string;

    constructor(nome: string){
        this.nome = nome
    }

    // @VerificaPessoa(16)
    cadastrarPessoa(){
        console.log(`Bem vindo ao sistema, ${this.nome}`)
    }
}

const pessoa1 = new Pessoa("Matheus");

pessoa1.cadastrarPessoa()
