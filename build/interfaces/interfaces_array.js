"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// seguindo o padrão da nossa interface
const projeto_PHP = {
    id: 1,
    projetos: ["Sistema de estoque", "Sistema de mensageria", "Sistema para restaurante"]
};
const { id, projetos } = projeto_PHP; // descontrução
for (let i = 0; i < projetos.length; i++) {
    console.log(id, projetos[i]);
}
const front_ends = {
    tecnologias: [
        {
            id: "1", nome: "React"
        },
        {
            id: "2", nome: "VueJS", descricao: "Framework WEB"
        }
    ]
};
console.log(front_ends.tecnologias);
