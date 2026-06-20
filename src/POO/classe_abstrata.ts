
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
            console.log("Falta o número da conta, inválido!")
            return false
        }

        console.log("Conta criado com sucesso!")
        console.log(`dados bancários, nome: ${dados.nome}, endereço: ${dados.endereco} e numero da rua: ${dados.numero}`)
        return true
    }
}

const p = new PessoaFisica()

p.abrirConta({
    nome: 'Matheus',
    endereco: 'Rua antonia carlos costas',
    numero: ''
})
