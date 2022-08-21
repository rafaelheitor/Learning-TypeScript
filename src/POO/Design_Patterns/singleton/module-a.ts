import { MyDataBaseClassic } from './db/my-db-classic'

const db1 = MyDataBaseClassic.instance

db1.add({ name: 'Rafael', age: 30 })
db1.add({ name: 'João', age: 25 })
db1.add({ name: 'Jennifer', age: 32 })

export { MyDataBaseClassic }
