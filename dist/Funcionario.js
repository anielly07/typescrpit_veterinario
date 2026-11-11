"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, matricula, salarioInicial) {
        this.nome = nome;
        this.matricula = matricula;
        this.SalarioInicial = salarioInicial;
        this.NovoSalario = salarioInicial;
    }
    get salario() {
        return this.NovoSalario;
    }
    atualizarSalario(novoSalario) {
        if (this.SalarioInicial <= 0) {
            throw new Error("Erro: O salário deve ser maior que zero.");
        }
        if (novoSalario < this.SalarioInicial) {
            throw new Error("Erro: O novo salário não pode ser menor que o atual.");
        }
        this.SalarioInicial = novoSalario;
        this.NovoSalario = novoSalario;
    }
}
exports.default = Funcionario;
