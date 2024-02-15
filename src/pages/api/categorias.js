"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recepts = [
    {
        id: 1,
        name: 'Arroz',
    },
    {
        id: 2,
        name: 'Feijão',
    },
    {
        id: 3,
        name: 'Macarrao',
    },
    {
        id: 4,
        name: 'Torta',
    },
    {
        id: 5,
        name: 'Bolo',
    },
    {
        id: 6,
        name: 'Chá',
    },
];
var categorias = [
    { id: 1, nome: "Categoria 1" },
    { id: 2, nome: "Categoria 2" },
    { id: 3, nome: "Categoria 3" },
];
function handler(req, res) {
    res.status(200).json(recepts);
}
exports.default = handler;
