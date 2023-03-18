abstract class Chair {
  height!: number;
  width!: number;
  depth!: number;

  public getDimensions(): string {
    return `height: ${this.height}, width: ${this.width}, depth: ${this.depth},`;
  }
}

class SmallChair extends Chair {
  constructor() {
    super();
    this.height = 40;
    this.width = 40;
    this.depth = 40;
  }

  public getDimensions(): string {
    return `Small Chair: height: ${this.height}, width: ${this.width} and depth: ${this.depth}`;
  }
}

class MediumChair extends Chair {
  constructor() {
    super();
    this.height = 60;
    this.width = 60;
    this.depth = 60;
  }

  public getDimensions(): string {
    return `Medium Chair: height: ${this.height}, width: ${this.width} and depth: ${this.depth}`;
  }
}

class BigChair extends Chair {
  constructor() {
    super();
    this.height = 80;
    this.width = 80;
    this.depth = 80;
  }

  public getDimensions(): string {
    return `Big Chair: height: ${this.height}, width: ${this.width} and depth: ${this.depth}`;
  }
}

class ChairFactory {
  static getChair(chair: string): Chair {
    if (chair === "small") {
      return new SmallChair();
    } else if (chair === "medium") {
      return new MediumChair();
    } else {
      return new BigChair();
    }
  }
}

const smallChair = ChairFactory.getChair("small");
const mediumChair = ChairFactory.getChair("medium");
const bigChair = ChairFactory.getChair("big");

console.log(smallChair.getDimensions());
console.log(mediumChair.getDimensions());
console.log(bigChair.getDimensions());
