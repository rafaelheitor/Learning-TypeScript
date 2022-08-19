import { ICelular } from "./interfaces/ICelular"
import { IEletronicos } from "./interfaces/IEletronicos"

export class Eletronicos implements IEletronicos {
  private _tipo
  public nome
  public marca

  constructor() {
    this._tipo = ""
    this.nome = ""
    this.marca = ""
  }

  public get tipo() {
    return this._tipo
  }

  public set tipo(value: string) {
    if (value.length <= 3) throw new Error("tipo inválido")
    this._tipo = value
  }

  get specs() {
    return `${this._tipo} ${this.marca}, ${this.nome}`
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

export class Celular extends Eletronicos implements ICelular {
  constructor() {
    super()
    this.nome = "Mi mix 3"
    this.tipo = "Celular"
    this.marca = "Xiaomi"
  }

  telefonar(number: string): string {
    return `Telefonando para o número ${number}`
  }
}

const xiaomiMix = new Celular()

// console.log(Object.getPrototypeOf(xiaomiMix))

console.log(xiaomiMix.specs)

export class Notebook extends Eletronicos {
  private _armazenamento
  private _ram

  constructor() {
    super()
    this._armazenamento = new Hd("500GB")
    this._ram = new Memoria("8GB", "1333 MHz", "DDR4", "Corsair")
    this.tipo = "Notebook"
    this.marca = "Samsung"
    this.nome = "Samsung Book E35"
  }

  get storage(): string {
    return this._armazenamento.space
  }

  get ramSpecs() {
    return this._ram.ramSpecs
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

class Memoria {
  private size
  private frequency
  private slot
  private manufacturer

  constructor(
    size: string,
    frequency: string,
    slot: string,
    manufacturer: string
  ) {
    this.size = size
    this.frequency = frequency
    this.slot = slot
    this.manufacturer = manufacturer
  }
  get ramSpecs() {
    return `Memoria Ram ${this.manufacturer} ${this.slot} ${this.size}, ${this.frequency}`
  }
}

const hd = new Hd("500GB")
const memoria = new Memoria("8GB", "1333 MHz", "DDR4", "Corsair")

// const samsung = new Notebook("Book E35", "Samsung", "Notebook", memoria, hd)

// console.log(samsung.ramSpecs)

class Creator {
  static createObject(someProperty: string): IEletronicos {
    if (someProperty === "notebook") {
      return new Notebook()
    } else if (someProperty === "celular") {
      return new Celular()
    } else {
      return new Eletronicos()
    }
  }
}

const celular = Creator.createObject("celular")
