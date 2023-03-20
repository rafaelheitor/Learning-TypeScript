interface HouseBuilder {
  buildWalls(): void;
  buildDoors(): void;
  buildWindows(): void;
  buildRoof(): void;
  buildGarage(): void;
}

class ConcreteHouseBuilder implements HouseBuilder {
  private house!: House;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.house = new House();
  }

  public buildWalls(): void {
    this.house.parts.push("Walls");
  }

  public buildDoors(): void {
    this.house.parts.push("Doors");
  }

  public buildWindows(): void {
    this.house.parts.push("Windows");
  }

  public buildRoof(): void {
    this.house.parts.push("Roof");
  }

  public buildGarage(): void {
    this.house.parts.push("Garage");
  }

  public getHouse(): House {
    const house = this.house;
    this.reset();
    return house;
  }
}

class House {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`House parts: ${this.parts.join(", ")}\n`);
  }
}

class HouseDirector {
  private builder!: HouseBuilder;

  public setBuilder(builder: HouseBuilder): void {
    this.builder = builder;
  }

  public buildMinimalViableHouse(): void {
    this.builder.buildWalls();
    this.builder.buildRoof();
    this.builder.buildDoors();
  }

  public buildFullFeaturedHouse(): void {
    this.builder.buildWalls();
    this.builder.buildRoof();
    this.builder.buildDoors();
    this.builder.buildWindows();
    this.builder.buildGarage();
  }
}

function builderExampleClientCode(director: HouseDirector) {
  const builder = new ConcreteHouseBuilder();

  director.setBuilder(builder);

  console.log("Minimal viable house");
  director.buildMinimalViableHouse();
  builder.getHouse().listParts();

  console.log("Full featured house");
  director.buildFullFeaturedHouse();
  builder.getHouse().listParts();

  console.log("Custom house");
  builder.buildWalls();
  builder.buildRoof();
  builder.getHouse().listParts();
}

const houseDirector = new HouseDirector();
builderExampleClientCode(houseDirector);
