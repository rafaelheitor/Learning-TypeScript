interface PersonPrototype {
  clone(): Person;
}
interface AddressPrototype {
  clone(): Address;
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
    const newPerson = new Person(this.name, this.address.clone());
    return newPerson;
  }
}

class Address implements AddressPrototype {
  public street: string;
  public number: number;

  constructor(street: string, number: number) {
    this.street = street;
    this.number = number;
  }

  public clone(): Address {
    const result = new Address(this.street, this.number);
    return result;
  }
}

const addressPerson1 = new Address("Rua das margaridas", 114);
const person1 = new Person("João", addressPerson1);

const person2 = person1.clone();
person1.name = "Tadeu";
person1.address.street = "Any street";

console.log(person1, person2);
console.log(person1.address, person2.address);
