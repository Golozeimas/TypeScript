let loja: object;

// e se nós quisermos que sempre siga esse padrão, criamos a interface para isso
loja = {
 nome:"renner",
 objetos:"roupas",
 nivel:"nacional"   
}

interface LojaProps{
    nome:string,
    objetos: string,
    nivel:string
}

// colocamos como se fosse um tipo
const loja1: LojaProps = {
    nome: "renner",
    objetos:"roupas",
    nivel:"nacional"
}

console.log(loja1)

function exibeLoja({nome , nivel, objetos}:LojaProps): void{
    console.log(`Esse é nome da loja: ${nome}`);
    console.log(`Os objeto que são vendidos: ${objetos}`);
    console.log(`O nível dela no mundo: ${nivel}`);
} 

exibeLoja({nome: "Renner",nivel:"Nacional", objetos:"Roupas"})