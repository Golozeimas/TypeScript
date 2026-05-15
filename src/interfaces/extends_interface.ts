/*
Vamos supor que tenhamos um jogo e nesse jogo tenha uma dlc
*/

interface JogoProps{
    readonly id: number,
    nome: string,
    descricao: string,
    plataforma: string[]
}


const CodBo2: JogoProps = {
    id: 1,
    nome:"Call of duty black ops 2",
    descricao:"Jogo de tiro em primeira pessoa",
    plataforma: ["PC", "PS3", "PS4", "XBOX 360"]
}

console.log(CodBo2)

interface DlcBo2Props extends JogoProps{
    jogo_original: JogoProps,
    duracao_em_horas: number
}

const CodBo2Dlc: DlcBo2Props = {
    id: 2,
    nome: "Call of duty zombies",
    descricao: "Modo de zombies no call of duty",
    plataforma: ["PC", "PS5", "PS4", "XBOX ONE X"],
    duracao_em_horas: 5,
    jogo_original: CodBo2
}


console.log(CodBo2Dlc)