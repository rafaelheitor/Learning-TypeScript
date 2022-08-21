import { MyDataBaseFunction } from './db/my-db-functional'

const db1 = MyDataBaseFunction

db1.add({ name: 'Rafael', age: 30 })
db1.add({ name: 'João', age: 25 })
db1.add({ name: 'Jennifer', age: 32 })

export { MyDataBaseFunction }
