
interface CadastroProps{
    nome: string,
    email:string,
    senha: string,
    idade?: number // opcional
}

const novoUsuario: CadastroProps = {
    nome: "Matheus",
    email: "joaomatheus@gmail.com",
    senha:"2344332"
}

console.log(novoUsuario)