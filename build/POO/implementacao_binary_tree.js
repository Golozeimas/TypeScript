"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArvoreBinariaVetor {
    constructor(elementos) {
        this.arvore = elementos;
    }
    // Retorna o índice do filho esquerdo (2i + 1)
    getIndiceEsquerdo(i) {
        return 2 * i + 1;
    }
    // Retorna o índice do filho direito (2i + 2)
    getIndiceDireito(i) {
        return 2 * i + 2;
    }
    // Mostra o pai e seus respectivos filhos
    mostrarFilhos(i) {
        const pai = this.arvore[i]; // pega o pai
        if (pai === undefined) {
            console.log(`Índice ${i} está vazio.`);
            return;
        }
        const idxEsq = this.getIndiceEsquerdo(i); // passa o indice do pai -> 0 + 1 = 1
        const idxDir = this.getIndiceDireito(i); // passa o indice do pai -> 0 + 2 = 2
        // Garante um retorno legível caso o filho não exista no vetor
        const filhoEsq = this.arvore[idxEsq] !== undefined ? this.arvore[idxEsq] : "Nenhum";
        const filhoDir = this.arvore[idxDir] !== undefined ? this.arvore[idxDir] : "Nenhum";
        console.log(`Nó Pai [${i}]: ${pai}`);
        console.log(`  -> Filho Esquerdo [${idxEsq}]: ${filhoEsq}`);
        console.log(`  -> Filho Direito [${idxDir}]: ${filhoDir}\n`);
    }
}
// --- Testando a implementação ---
// O TypeScript infere o tipo genérico como string[]
const dados = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const minhaArvore = new ArvoreBinariaVetor(dados);
// Testes
minhaArvore.mostrarFilhos(0); // Raiz 'A'
