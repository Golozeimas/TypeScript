type Connection = {
    host: string,
    ip: number | string,
    name: string
}

export function conectarNoBanco(info: Connection): boolean{
    if(typeof info.ip === 'number'){
        console.log("Conexão não estabelecida!")
        return false
    }
    console.log("Conectado com sucesso no banco de dados: ",  info.name)
    return true
}