/*

Decorators -> são usados em classes, propriedade, métodos e parâmetros (bem pouco usado), GETTERS OU SETTERS

Ele adiciona recursos a uma classe, propriedade e etc, atráves de metaprogramação, definem rotas, 
controllers e injeção de dependências, lendo as informações em um framework

*/

// target = recebe a informação do construtor
// padrão factory -> função que irá retornar a criação do decorator
function logInfo(mensagem: string){
    return (target: any) =>{
        console.log(`${mensagem}`)
        let t = target
    }
}   

@logInfo("Sistema online")
class Sistema{

}


// Praticando ainda mais afundo

function SetIpServidor(novoIp: string){
    
    return (construtor: any) =>{
        return class extends construtor{
            Ip = novoIp
        }
    }

}

@SetIpServidor("192.123.123")
class Conexao{

}

const servidor1 = new Conexao();

console.log(servidor1)