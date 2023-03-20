interface PersonPrototype {
  clone(): Person;
}

class Person implements PersonPrototype {
  public name: string;
  public createdAt: Date;
  public address: Address;

  constructor(name: string, address: Address) {
    this.name = name;
    this.createdAt = new Date();
    this.address = address;
  }

  clone(): Person {
    const newPerson = new Person(this.name, this.address);
    return newPerson;
  }
}

class Address {
  public street: string;
  public number: number;

  constructor(street: string, number: number) {
    this.street = street;
    this.number = number;
  }
}

const addressPerson1 = new Address("Rua das margaridas", 114);
const person1 = new Person("João", addressPerson1);

const person2 = person1.clone();
// person1.name = "Tadeu";

console.log(person1.name === person2.name);
