"use strict";
/*
Vamos supor que tenhamos um jogo e nesse jogo tenha uma dlc
*/
Object.defineProperty(exports, "__esModule", { value: true });
const CodBo2 = {
    id: 1,
    nome: "Call of duty black ops 2",
    descricao: "Jogo de tiro em primeira pessoa",
    plataforma: ["PC", "PS3", "PS4", "XBOX 360"]
};
console.log(CodBo2);
const CodBo2Dlc = {
    id: 2,
    nome: "Call of duty zombies",
    descricao: "Modo de zombies no call of duty",
    plataforma: ["PC", "PS5", "PS4", "XBOX ONE X"],
    duracao_em_horas: 5,
    jogo_original: CodBo2
};
console.log(CodBo2Dlc);
