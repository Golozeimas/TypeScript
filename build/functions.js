"use strict";
// sintaxe básica de uma função
Object.defineProperty(exports, "__esModule", { value: true });
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(5, 5));
// inferência de retorno, o TypeScript indetifica automaticamente o tipo de retorno
function dividir(n1, n2) {
    if (n2 === 0) {
        console.log("não pode dividir por zero, magrão!");
        return;
    }
    // automaticamente defini o retorno como number
    return n1 / n2;
}
console.log(dividir(2, 10));
// arrow functions
const multiplicar = (a, b) => {
    return a * b;
};
console.log(multiplicar(10, 3));
// versão reduzida, como fazemos no filter quando o código pode ser feito em uma linha
const dobrar = (n) => n * 2;
console.log(dobrar(100));
// função void sem retorno
function exibeNome(nome) {
    console.log(`Este é o seu nome: ${nome}`);
}
exibeNome("Matheus");
// valor padrão de uma função
function potencia(n, pot = 2) {
    return n ** pot;
}
console.log(potencia(5));
// rest parametros
function somarTudo(...numeros) {
    return numeros.reduce((a, b) => a + b);
}
console.log(somarTudo(3, 3, 29, 10, 2, 3, 4, 3, 34));
// valor opcional de uma função, não necessário mas pode ter
function login(email, senha, user) {
    let data = { email: email, senha: senha, user: user };
    return data;
}
// não passei nenhum user como argumento, logo vazio, então undefined (automático)
console.log(login("joao@gmail.com", "1234"));
function somaVendas(...vendas) {
    const quantidade_de_vendas = vendas.length;
    console.log("Essa é a quantidade de vendas totais: " + quantidade_de_vendas);
    const soma_da_vendas = vendas.reduce((a, b) => a + b);
    return soma_da_vendas;
}
const array = [10, 20, 50, 30, 40];
// spread operator combina bem com rest operator
console.log("Essa é a soma de vendas dos produtos: " + somaVendas(...array));
