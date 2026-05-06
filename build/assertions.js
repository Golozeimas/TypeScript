"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let query = "pizza";
// nesse caso, eu afirmo que estou recebendo uma string
let searchTerm = query;
console.log('Search TERM: ' + searchTerm);
// é interessante para utilização mas o guard type se sai melhor
if (typeof query === 'string') {
    console.log('Search TERM: ' + query);
}
