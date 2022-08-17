import { IEletronicos } from "./interfaces/IEletronicos"
import { ICelular } from "./interfaces/ICelular"

class Eletronicos implements IEletronicos {
  tipo

  constructor(tipo: string) {
    this.tipo = tipo
  }

  getTipo(): string {
    return this.tipo
  }
}

class Celular extends Eletronicos implements ICelular {
  public nome
  public marca

  constructor(nome: string, marca: string, tipo: string) {
    super(tipo)
    this.nome = nome
    this.marca = marca
  }

  static telefonar(number: string): string {
    return `Telefonando para o número ${number}`
  }
}

const xiaomiMix = new Celular("Mi Mix 3", "Xiaomi", "Celular")

console.log(Celular.telefonar("75981961589"))
