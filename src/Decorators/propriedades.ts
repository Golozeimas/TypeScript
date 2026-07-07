
function validaNome(tamanho: number){
    
    // target -> construtor da nossa classe
    // key -> nossa propriedade no caso    
    return (target: any, key: string) => {
        let valor = target[key];

        const getter = () => valor

        const setter = (value: string) =>{
            if(value === ""){
                console.log("Não pode ser vazio, o nome do jogo!")
            }
            if(value.length < 5){
                console.log("Nome de jogo, muito curto!")
            }
            else{
                valor = value
            }

            Object.defineProperty(target, key, {
                get: getter,
                set: setter
            })
        }

    }
}


class Jogo{
    // @validaNome(5)
    nomeDoJogo: string;
    
    constructor(nomeDoJogo: string){
        this.nomeDoJogo = nomeDoJogo;
    }
}

const jogo1 = new Jogo("Left 4 dead 2");

console.log(jogo1.nomeDoJogo)

const jogo2 = new Jogo("");

console.log(jogo2.nomeDoJogo)