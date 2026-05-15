
type UUID = string | number | null

function acessar(uuid: UUID, nome: string): void{
    console.log(`Id do usuário: ${uuid} e seu nome: ${nome}`);
}

function log_do_usuario(uuid: UUID){
    console.log(`O seu id é ${uuid}`);
}

acessar("123", "Matheus");

acessar(123, "Lucas");

log_do_usuario(123);

log_do_usuario("123")

type Moedas = "BRL" | "EUR" | "DOL"

function comprarItem(moeda: Moedas, preco: number){
    console.log(`Sua moeda é ${moeda}, e o preço fica ${moeda}-${preco}`)
}

// comprarItem("BL", 120); ocorre erro por não seguir o padrão do type alias

comprarItem("BRL", 139.99)