// casos onde o retorno é undefined

let x:string; // inicializou sem nada

console.log(x)

function funcao_que_nao_retorna_nada (){ // não retornou nada
}

console.log(funcao_que_nao_retorna_nada())

const obj = {};
console.log(obj.nome); // não existe esse atributo

// casos onde se retorna nulo ou null

let nome: string | null; // é manual, nesse caso nome pode ser uma string ou null (vazio)

nome = "matheus";

nome = null;

console.log(nome)