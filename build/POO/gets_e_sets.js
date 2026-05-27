"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    _nome_do_jogo;
    _ip_do_jogo;
    constructor(_nome_do_jogo, _ip_do_jogo) {
        this._nome_do_jogo = _nome_do_jogo;
        this._ip_do_jogo = _ip_do_jogo;
    }
    get nome_do_jogo() {
        return this._nome_do_jogo;
    }
    set nome_do_jogo(valor) {
        if (valor.length > 0 && valor !== undefined) {
            this._nome_do_jogo = valor;
        }
    }
    get ip_do_jogo() {
        return this._ip_do_jogo;
    }
    set ip_do_jogo(valor_do_ip) {
        if (valor_do_ip.length === 4) {
            this._ip_do_jogo = valor_do_ip;
        }
    }
}
const fortnite = new Game("Fortnite", "1234");
console.log(fortnite);
fortnite.nome_do_jogo = "fortnite";
fortnite.ip_do_jogo = "4321";
console.log(fortnite.nome_do_jogo);
console.log(fortnite.ip_do_jogo);
