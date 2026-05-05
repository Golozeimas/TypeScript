let numeros: number[];

numeros = [1,2,3,4,5,6,7,8,9,10];


// numeros = ["a"] // erro


// outra forma de fazer com generics
let array_diferenciado: Array<string | number>

array_diferenciado = ["matheus", 10, 3.4]

console.log(array_diferenciado)