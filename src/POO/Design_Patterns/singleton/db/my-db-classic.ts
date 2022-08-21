import { User } from '../interfaces/user'

export class MyDataBaseClassic {
  private static _instance: MyDataBaseClassic | null = null
  private users: User[] = []

  private constructor() {}

  static get instance(): MyDataBaseClassic {
    if (MyDataBaseClassic._instance === null) {
      MyDataBaseClassic._instance = new MyDataBaseClassic()
    }

    return MyDataBaseClassic._instance
  }

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
