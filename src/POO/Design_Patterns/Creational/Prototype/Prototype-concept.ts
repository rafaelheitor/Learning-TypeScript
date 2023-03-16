//interface with clone method
interface IPrototype {
  //The clone can be deep or shallow
  //It is up to you
  //The details is in your concrete class
  clone(): this;
}

class MyClass implements IPrototype {
  field: number[];

  constructor(field: number[]) {
    this.field = field;
  }

  clone(): this {
    // return Object.assign({}, this); //Shallow copy
    return JSON.parse(JSON.stringify(this)); //Deep copy
  }
}

const firstObject = new MyClass([1, 2, 3, 4]);
console.log(`First Object ${JSON.stringify(firstObject)}`);

const secondObject = firstObject.clone();
console.log(`Second Object ${JSON.stringify(secondObject)}`);

// Change the value of one of the array elements in secondObject
// Depending on your clone method, either a shallow or deep copy
// was performed
secondObject.field[1] = 101;

console.log(`First Object ${JSON.stringify(firstObject)}`);
console.log(`Second Object ${JSON.stringify(secondObject)}`);
