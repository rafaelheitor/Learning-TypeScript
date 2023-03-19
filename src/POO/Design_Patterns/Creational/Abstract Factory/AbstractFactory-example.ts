interface IChair {
  type: string;
  dimensions: dimensions;
  getDimensions(): string;
}

type dimensions = {
  width: number;
  height: number;
  length?: number;
  depth?: number;
};

interface ITable {
  type: string;
  dimensions: dimensions;
  getDimensions(): string;
  attachChair(chair: IChair): string;
}

interface AbstractKitchenFactory {
  createChair(): IChair;
  createTable(): ITable;
}

class ConcreteModernFactory implements AbstractKitchenFactory {
  public createChair(): IChair {
    return new ConcreteModernChair();
  }

  public createTable(): ITable {
    return new ConcreteModernTable();
  }
}

class ConcreteRusticFactory implements AbstractKitchenFactory {
  public createChair(): IChair {
    return new ConcreteRusticChair();
  }

  public createTable(): ITable {
    return new ConcreteRusticTable();
  }
}

class ConcreteModernChair implements IChair {
  public type: string;
  public dimensions: dimensions;

  constructor() {
    this.type = "Modern";
    this.dimensions = {
      height: 60,
      width: 60,
      depth: 60,
    };
  }
  public getDimensions(): string {
    return `Modern chair dimensions: ${JSON.stringify(this.dimensions)}`;
  }
}

class ConcreteModernTable implements ITable {
  public type: string;
  public dimensions: dimensions;

  constructor() {
    this.type = "Modern";
    this.dimensions = {
      height: 29,
      width: 30,
      length: 45.3,
    };
  }

  public getDimensions(): string {
    return `Modern table dimensions: ${JSON.stringify(this.dimensions)}`;
  }

  public attachChair(chair: IChair): string {
    return `${chair.type} chair was attached. You can sit on it`;
  }
}

class ConcreteRusticChair implements IChair {
  public type: string;
  public dimensions: dimensions;

  constructor() {
    this.type = "Rustic";
    this.dimensions = {
      height: 60,
      width: 60,
      depth: 60,
    };
  }
  public getDimensions(): string {
    return `Rustic chair dimensions: ${JSON.stringify(this.dimensions)}`;
  }
}

class ConcreteRusticTable implements ITable {
  public type: string;
  public dimensions: dimensions;

  constructor() {
    this.type = "Rustic";
    this.dimensions = {
      height: 29,
      width: 30,
      length: 45.3,
    };
  }

  public getDimensions(): string {
    return `Rustic table dimensions: ${JSON.stringify(this.dimensions)}`;
  }

  public attachChair(chair: IChair): string {
    return `${chair.type} chair was attached. You can sit on it`;
  }
}

function clientAbstractTableAndChairFactory(factory: AbstractKitchenFactory) {
  const chair = factory.createChair();
  const table = factory.createTable();

  console.log(chair.getDimensions());
  console.log(table.getDimensions());
  console.log(table.attachChair(chair));
}

clientAbstractTableAndChairFactory(new ConcreteModernFactory());
clientAbstractTableAndChairFactory(new ConcreteRusticFactory());
