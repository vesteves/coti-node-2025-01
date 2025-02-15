"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
let alunos = [];
exports.router.get('/alunos', (req, res) => {
    res.json({
        msg: 'GET Alunos',
        data: alunos,
    });
});
exports.router.get('/alunos/:id', (req, res) => {
    const aluno = alunos.find(aluno => aluno.id === Number(req.params.id));
    res.json({
        msg: 'GET Alunos',
        data: aluno,
    });
});
exports.router.post('/alunos', (req, res) => {
    alunos.push(req.body);
    res.json({
        msg: 'POST Alunos'
    });
});
exports.router.put('/alunos/:id', (req, res) => {
    alunos = alunos.map((aluno) => {
        if (Number(req.params.id) === aluno.id) {
            return Object.assign(Object.assign({}, aluno), req.body);
        }
        return aluno;
    });
    res.json({
        msg: 'PUT Alunos'
    });
});
exports.router.delete('/alunos/:id', (req, res) => {
    alunos = alunos.filter((aluno) => Number(req.params.id) !== aluno.id);
    res.json({
        msg: 'DELETE Alunos'
    });
});
exports.default = exports.router;
