interface CursoProps{
    id: string,
    nome: string,
    preco: number
    // podemos utilizar a função anonima para colocar 
    // função dentro de uma interface
    promocao: (preco: number) => void;
}


function mostrarPromocao(preco: number): void{
    console.log(`Promoção por apenas: R$${preco.toFixed(2)}`)
}

let curso2: CursoProps = {
    id: "123",
    nome: "Engenharia de software",
    preco: 1400,
    promocao: mostrarPromocao
}

console.log(curso2.promocao(2))

interface SomaProps{
    (valor1: number, valor2: number): number;
}

const soma: SomaProps = (v1: number, v2: number): number => {
    return v1 + v2
}

console.log(soma(10, 2))