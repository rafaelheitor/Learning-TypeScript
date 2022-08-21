import { MyDataBaseFunction } from './db/my-db-functional'
import './module-a'

const db2 = MyDataBaseFunction

db2.add({ name: 'Silvana', age: 46 })
db2.add({ name: 'Paulo', age: 23 })
db2.add({ name: 'Everton', age: 29 })

db2.remove(1)

db2.show()
