export default abstract class Funcionario {
  public nome: string;
  public matricula: string;
  private SalarioInicial: number;
  private NovoSalario: number;

  constructor(nome: string, matricula: string, salarioInicial: number) {
    this.nome = nome;
    this.matricula = matricula;
    this.SalarioInicial = salarioInicial;
    this.NovoSalario = salarioInicial;
  }

  public get salario(): number {
    return this.NovoSalario;
  }

  public atualizarSalario(novoSalario: number): void {
    if (this.SalarioInicial <= 0) {
      throw new Error("Erro: O salário deve ser maior que zero.");
    }
    if (novoSalario < this.SalarioInicial) {
      throw new Error("Erro: O novo salário não pode ser menor que o atual.");
    }
    this.SalarioInicial = novoSalario;
    this.NovoSalario = novoSalario;
  }

  abstract calcularBonus(): number;
}
