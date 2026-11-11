export default abstract class Animal {
  public nome: string;
  public idade: number;
  public tutor: string;

  constructor(nome: string, idade: number, tutor: string) {
    this.nome = nome;
    this.idade = idade;
    this.tutor = tutor;
  }

  abstract emitirSom(): string;

  abstract descreverCuidados(): string;
}
