import { MyDataBaseClassic } from "./my-db-classic"

describe("Test if the class is passing only one object", () => {
  it("Should pass only an object through the class", () => {
    const db1 = MyDataBaseClassic.instance
    const db2 = MyDataBaseClassic.instance

    expect(db1).toBe(db2)
  })
})
