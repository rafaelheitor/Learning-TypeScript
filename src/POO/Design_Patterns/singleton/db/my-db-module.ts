import { User } from '../interfaces/user'

const users: User[] = []

export const MyDataBaseModule = {
  add(user: User): void {
    users.push(user)
  },

  remove(index: number) {
    users.splice(index, 1)
  },

  show(): void {
    for (const user of users) {
      console.log(user)
    }
  },
}
