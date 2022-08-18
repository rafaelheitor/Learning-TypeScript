import { ICelular } from "./interfaces/ICelular"
import { IEletronicos } from "./interfaces/IEletronicos"

class Eletronicos implements IEletronicos {
  private _tipo

  constructor(tipo: string) {
    this._tipo = tipo
  }

  public get tipo() {
    return this._tipo
  }

  public set tipo(value: string) {
    if (value.length <= 3) throw new Error("tipo inválido")
    this._tipo = value
  }

  ligar(): string {
    return `O dispositivo está sendo iniciado`
  }

  desligar(): string {
    return `O dispositivo está sendo desligado`
  }

  reiniciar(): string {
    return `Reiniciando dispositivo`
  }

  carregar(): string {
    return `Carregando dispositivo`
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

  telefonar(number: string): string {
    return `Telefonando para o número ${number}`
  }
}

const xiaomiMix = new Celular("Mi Mix 3", "Xiaomi", "Celular")

// console.log(Object.getPrototypeOf(xiaomiMix))

console.log(xiaomiMix.carregar())
