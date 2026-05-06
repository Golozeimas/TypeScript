let valor: unknown;

valor = 20

if(typeof valor === 'number'){
	let salario: number = valor * 2
    console.log(salario)
}

// outro caso de uso
let valor2:unknown;

valor2 = 20

// let total:number = valor2 erro de tipagem, não podemos atribuir o unknown para qualquer 
// tipo, apenas para o tipo any

let total:any = valor2 // correto, ou se fosse unknown