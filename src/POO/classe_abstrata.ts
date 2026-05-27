
// definição de classe abstrata
abstract class Animal{
    nome: string;

    constructor(nome: string){
        this.nome = nome
    }

    // método abstrato que deve ser seguido
    abstract emitirSom(): void
}

type PropsDadosConta = {
    nome: string,
    numero: string,
    endereco: string
}

abstract class ContaBanco{
    
    // não podemos implementar, é nome(params): tipoDeRetorno
    abstract abrirConta(dados: PropsDadosConta): boolean;

}

class PessoaFisica extends ContaBanco{
    
    abrirConta(dados: PropsDadosConta): boolean{
        
        if(dados.nome.length === 0 ){
            return false
        }
        if(dados.endereco.length === 0){
            return false
        }
        if(dados.numero.length === 0){
            return false
        }

        console.log("Conta criado com sucesso!")
        
        return true
    }
}

const p = new PessoaFisica()

p.abrirConta({
    nome: 'Matheus',
    endereco: 'Rua antonia carlos costas',
    numero: '1023'
})