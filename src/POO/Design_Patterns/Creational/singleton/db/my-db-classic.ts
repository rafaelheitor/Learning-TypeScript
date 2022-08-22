import { User } from "../interfaces/user"

// A classe MyDataBaseClassic define o getter `instance` que permite
// clientes acessar a mesma instância de uma conexão a base de
// dados através do programa.
export class MyDataBaseClassic {
  // O campo para armazenar a instância singleton deve ser
  // declarado como estático.
  private static _instance: MyDataBaseClassic | null = null
  private users: User[] = []

  // O construtor do singleton devem sempre ser privado para
  // prevenir chamadas diretas de construção com o operador
  // `new`.
  private constructor() {
    // Algum código de inicialização, tal como uma conexão
    // com um servidor de base de dados.
    // ...
  }

  // O método estático que controla acesso à instância do
  // singleton
  static get instance(): MyDataBaseClassic {
    if (MyDataBaseClassic._instance === null) {
      // Certifique que a instância ainda não foi
      // inicializada
      MyDataBaseClassic._instance = new MyDataBaseClassic()
    }

    return MyDataBaseClassic._instance
  }

  // Finalmente, qualquer singleton deve definir alguma lógica
  // de negócio que deve ser executada em sua instância.

  add(user: User): void {
    this.users.push(user)
  }

  remove(index: number) {
    this.users.splice(index, 1)
  }

  show(): void {
    for (const user of this.users) {
      console.log(user)
    }
  }
}
