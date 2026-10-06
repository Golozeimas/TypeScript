// esse arquivo mostra a diferença entre interface e type no TypeScript
// uma interface é uma forma de definir o formato de um objeto
// um type é uma forma de definir um tipo
// a diferença é que interface pode ser extendida e type não

interface PropsJogo{
    name: string
    plataforma: string
    preco: number
}

type PropsJogoType = {
    name: string
    plataforma: string
    preco: number
}

/**
 * A vantagem é que a extensão permite de forma mais natural
 * você adicionar novos atributos em um tipo já existente
 */
interface JogoDlc extends PropsJogo {
    tipo: string
    precoDlc: number
}


type JogoDlcType = PropsJogoType & {
    tipo: string
    precoDlc: number
}

let jogo: JogoDlcType = {
    name: "Cyberpunk 2077",
    plataforma: "PC",
    preco: 199.99,
    tipo:"DLC",
    precoDlc: 99.99
}

console.log(jogo)

let jogoDlc:JogoDlc = {
    name: "Cyberpunk 2077",
    plataforma: "PC",
    preco: 199.99,
    tipo: "DLC",
    precoDlc: 99.99
}

console.log(jogoDlc)

// outra diferença é que type pode ser usado para criar tipos que não são objetos
// como por exemplo, um tipo que é um número

type Idade = number

interface IdadeInterface {
    idade: number    
}

let idade: Idade = 25
let idadeInterface: IdadeInterface = {idade: 25}

console.log(idade)
console.log(idadeInterface)

// os dois são a mesma coisa
// mas uma coisa que a interface não faz e o type faz é criar um tipo que é um número


// melhor utilização do type
type union = "Fácil" | "Médio" | "Difícil"

let dificuldade: union = "Fácil"

console.log(dificuldade)

