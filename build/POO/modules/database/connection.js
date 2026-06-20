"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectarNoBanco = conectarNoBanco;
function conectarNoBanco(info) {
    if (typeof info.ip === 'number') {
        console.log("Conexão não estabelecida!");
        return false;
    }
    console.log("Conectado com sucesso no banco de dados: ", info.name);
    return true;
}
