class Pessoa{
	// atributos
	nome: string;
	idade: number;
	
		
		// construtor: ao instância definir valores iniciais para os atributos
        // inicializa junto com a classe esse método
		constructor(nome: string, idade: number){
			// this -> é usado para acessar atributos dentro da classe
            // instancia a própria classe
			this.nome = nome
			this.idade = idade
		}
	
	// método que fica dentro da classe, como uma função mas nesse caso n precisa
	// de nenhuma palavra reservada só o retorno
	apresentar(): void{
		console.log(`Meu nome é ${this.nome}`)
        console.log(`E eu tenho ${this.idade} anos de idade`)
	}

	verificaIdade(idade: number): boolean{
		if(idade < 18){
			return false
		}
		console.log("Maior de idade!")
		return true
	}
}

// fora da classe instanciando objetos
const pessoa1 = new Pessoa("Matheus", 20)

pessoa1.apresentar()

pessoa1