import Animal from "./Animal";
import Veterinario from "./Veterinario";

export default class Consulta {
  constructor(
    public  animal: Animal,
    public  veterinario: Veterinario,
    public  data: Date,
    public observacoes = ""
  ) {
    if (!animal || !veterinario) {
      throw new Error("Uma consulta não pode existir sem um animal e um veterinário.");
    }
    this.veterinario.realizarConsulta(this.animal);
  }
}
