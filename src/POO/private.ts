class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public verSaldo(): number {
    return this.saldo;
  }

  solicitarAumento(estarAuth: boolean, nova_quantidade: number){
    if(nova_quantidade > this.saldo){
        if(estarAuth){
            this.saldo = nova_quantidade
            console.log("Esse é o novo saldo: " + this.saldo)
        }else{
            console.log("Não estar autenticado")
        }
    }
  }
}

const conta = new ContaBancaria(1000);

console.log(conta.verSaldo()); // 1000

// Erro:
// console.log(conta.saldo);

conta.solicitarAumento(true, 1200)