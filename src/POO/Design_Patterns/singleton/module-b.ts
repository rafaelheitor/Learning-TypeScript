import { MyDataBaseClassic } from './db/my-db-classic'
import './module-a'

const db2 = MyDataBaseClassic.instance

db2.add({ name: 'Silvana', age: 46 })
db2.add({ name: 'Paulo', age: 23 })
db2.add({ name: 'Everton', age: 29 })

export { MyDataBaseClassic }

db2.remove(1)

db2.show()
