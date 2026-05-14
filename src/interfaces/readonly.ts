interface ProdutosProps{
    readonly id: number,
    nome: string,
    descricao: string
}

const produto1: ProdutosProps = {
    id: 1,
    nome: "PS5",
    descricao: "Vídeogame da atual geração de consoles"
}

produto1.nome = "PS4"

// produto1.id = 10 // dá erro apontando que tem a propriedade readonly

console.log(produto1)