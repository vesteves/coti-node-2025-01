"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aluno_controller_1 = __importDefault(require("./aluno/aluno.controller"));
const app = (0, express_1.default)();
// responsável em fazer com que o projeto entenda body requisition com json
app.use(express_1.default.json());
app.use(aluno_controller_1.default);
app.listen(8000, () => {
    console.log('Server on');
});
