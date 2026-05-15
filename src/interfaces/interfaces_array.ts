interface ProjetosProp{
    id: unknown,
    projetos: string[]
}

// seguindo o padrão da nossa interface
const projeto_PHP: ProjetosProp = {
    id: 1,
    projetos: ["Sistema de estoque", "Sistema de mensageria", "Sistema para restaurante"]
}

let {id, projetos} = projeto_PHP // desconstrução

if(typeof id === "number"){
    for(let i: number = 0; i < projetos.length; i++){
    console.log(id,"-",projetos[i])
    id += 1
    }
}


interface TecnologiasProps{
    id: string,
    nome: string,
    descricao?:string
}

// uso de uma interface herdando outra e passando a outra como array
// um array que deve seguir o padrão do objetos com id e nome
interface NomesProps{
    tecnologias: TecnologiasProps[];
}

const front_ends: NomesProps = {
    tecnologias:[
        {
            id: "1", nome:"React"
        },
        {
            id: "2", nome:"VueJS", descricao:"Framework WEB"
        }
    ]
}

console.log(front_ends.tecnologias)