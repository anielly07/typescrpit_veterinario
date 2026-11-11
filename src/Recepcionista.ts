import Animal from "./Animal";
import Funcionario from "./Funcionario";

export default class Recepcionista extends Funcionario {
  private agendamentosConfirmados: number = 0;
  private readonly VALOR_BONUS_AGENDAMENTO = 15;

  agendarAtendimento(animal: Animal, data: Date): void {
    this.agendamentosConfirmados++;
    console.log(
      ` Agendamento confirmado por ${this.nome} para ${animal.nome} em ${data.toLocaleDateString("pt-BR")}.`
    );
  }

  calcularBonus(): number {
    return this.agendamentosConfirmados * this.VALOR_BONUS_AGENDAMENTO;
  }
}
