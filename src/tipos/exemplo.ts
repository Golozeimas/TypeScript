type Produto = {
  nome: string
  preco: number
}

const produtos: Produto[] = [
  { nome: "Pizza de mussarela", preco: 40 },
  { nome: "Pizza de calabresa", preco: 35 },
  { nome: "Pizza doce", preco: 45 },
  { nome: "Pizza vegetariana", preco: 38 },
  { nome: "Pizza de frango", preco: 42 },
  { nome: "Pizza napolitana", preco: 39 },
  { nome: "Pizza marguerita", preco: 41 },
  { nome: "Pizza portuguesa", preco: 44 },
  { nome: "Pizza de pepperoni", preco: 50 },
  { nome: "Pizza de atum", preco: 37 },
]

let produtos_acima_de_40: Produto[] = []


for(let i: number = 0; i < produtos.length; i++){
    if(produtos[i]!.preco > 40){
        produtos_acima_de_40.push(produtos[i]!) // eu sei que não é undefined então coloco '!'
    }
}

console.log(produtos_acima_de_40)

const produtos_abaixo_de_40:Produto[] = produtos.filter((item)=> item.preco < 40)

console.log(produtos_abaixo_de_40)