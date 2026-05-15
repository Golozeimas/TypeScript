"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interessante uso do type 
// mas dar pra fazer a mesma coisa com interface
// mas é melhor com type!
const admin = {
    email: "admin@email.com",
    permissoes: ["criar", "editar"]
};
console.log(admin);
/*
// com interface
interface Usuario = {
    email: string
}

interface Admin = {
    permissoes: string []
}

// usa type para 'juntar'
type AdminUsuario = Usuario & Admin;
*/ 
