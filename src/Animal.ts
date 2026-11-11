export default abstract class Animal {
  public nome: string;
  public idade: number;
  public tutor: string;

  constructor(nome: string, idade: number, tutor: string) {
    this.nome = nome;
    this.idade = idade;
    this.tutor = tutor;
  }
 
 public getnome() : string {
  return this.nome
 }

 public setnome(nome) {
  this.nome = nome;
 }

 public getidade() : number{
  return this.idade
 }

  public setidade(idade){
    this.idade=idade
  }

  public gettutor():string{
    retutrn this.tutor
  }

  public settutor(tutor){
    this.tutor=tutor 
  }
 
  abstract emitirSom(): string;

  abstract descreverCuidados(): string;
}
