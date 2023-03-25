export {};

interface Car {
  assemble(): string;
}

class BasicCar implements Car {
  public assemble(): string {
    return "Basic Car.";
  }
}

class CarDecorator implements Car {
  protected car: Car;

  constructor(car: Car) {
    this.car = car;
  }

  public assemble(): string {
    return this.car.assemble();
  }
}

class SportCar extends CarDecorator {
  public assemble(): string {
    return `Adding features of sports Car on ${super.assemble()}`;
  }
}

class LuxuryCar extends CarDecorator {
  public assemble(): string {
    return `Adding features of luxury car on ${super.assemble()}`;
  }
}

function clientCode(car: Car) {
  console.log(car.assemble());
}

const basicCar = new BasicCar();
const sportCar = new SportCar(basicCar);
const luxuryCar = new LuxuryCar(sportCar);

clientCode(basicCar);
clientCode(sportCar);
clientCode(luxuryCar);
