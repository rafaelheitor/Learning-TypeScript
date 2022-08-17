import { IEletronicos } from "./interfaces/IEletronicos"
import { ICelular } from "./interfaces/ICelular"

class Eletronicos {
  private _tipo

  constructor(tipo: string) {
    this["_tipo"] = tipo
  }

  public set tipo(value: string) {
    if (value.length <= 3) throw new Error("tipo inválido")
    this["_tipo"] = value
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

console.log(xiaomiMix)

xiaomiMix.tipo = "TV"
