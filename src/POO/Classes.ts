import { ICelular } from "./interfaces/ICelular"
import { IEletronicos } from "./interfaces/IEletronicos"

class Eletronicos implements IEletronicos {
  private _tipo
  private _nome
  private _marca

  constructor(tipo: string, nome: string, marca: string) {
    this._tipo = tipo
    this._nome = nome
    this._marca = marca
  }

  public get tipo() {
    return this._tipo
  }

  public set tipo(value: string) {
    if (value.length <= 3) throw new Error("tipo inválido")
    this._tipo = value
  }

  get specs() {
    return `${this._tipo} ${this._marca}, ${this._nome}`
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
  constructor(nome: string, marca: string, tipo: string) {
    super(tipo, nome, marca)
  }

  telefonar(number: string): string {
    return `Telefonando para o número ${number}`
  }
}

const xiaomiMix = new Celular("Mi Mix 3", "Xiaomi", "Celular")

// console.log(Object.getPrototypeOf(xiaomiMix))

console.log(xiaomiMix.specs)

class Notebook extends Eletronicos {
  private _armazenamento: Hd
  constructor(tipo: string, nome: string, marca: string) {
    super(tipo, nome, marca)
    this._armazenamento = new Hd("500GB")
  }

  get armazenamento(): string {
    return this._armazenamento.space
  }
}

class Hd {
  private size

  constructor(size: string) {
    this.size = size
  }
  get space() {
    return `HD size ${this.size}`
  }
}

const samsung = new Notebook("Book E35", "Samsung", "Notebook")

console.log(samsung.armazenamento)
