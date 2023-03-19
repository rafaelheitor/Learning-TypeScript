interface ICubeA {
  manufacture(width: number, height: number, depth: number): boolean;
}

class CubeA implements ICubeA {
  static lastTime = Date.now();
  manufacture(width: number, height: number, depth: number): boolean {
    const now = Date.now();
    if (now > CubeA.lastTime + 1500) {
      console.log(
        `Company A built Cube with dimensions ${width}x${height}x${depth}`
      );
      CubeA.lastTime = now;
      return true;
    }
    return false;
  }
}

export interface ICubeB {
  create(
    top_left_front: [number, number, number],
    bottom_right_back: [number, number, number]
  ): boolean;
}

class CubeB implements ICubeB {
  static last_time = Date.now();

  create(
    top_left_front: [number, number, number],
    bottom_right_back: [number, number, number]
  ): boolean {
    // if not busy, then manufacture a cube with coords
    const now = Date.now();
    if (now > CubeB.last_time + 3000) {
      console.log(
        `Company B built Cube with coords [${top_left_front[0]},${top_left_front[1]},${top_left_front[2]}],[${bottom_right_back[0]},${bottom_right_back[1]},${bottom_right_back[2]}]`
      );
      CubeB.last_time = now;
      return true;
    } else {
      return false; // busy
    }
  }
}

class CubeBAdapter implements ICubeA {
  private cube: CubeB;

  constructor() {
    this.cube = new CubeB();
  }

  manufacture(width: number, height: number, depth: number): boolean {
    const success = this.cube.create(
      [0 - width / 2, 0 - height / 2, 0 - depth / 2],
      [0 + width / 2, 0 + height / 2, 0 + depth / 2]
    );
    return success;
  }
}

const totalCubes = 5;
let counter = 0;

const manufactureCube = () => {
  // produce 5 cubes from which ever supplier can manufacture it first
  const width = Math.floor(Math.random() * 10) + 1;
  const height = Math.floor(Math.random() * 10) + 1;
  const depth = Math.floor(Math.random() * 10) + 1;
  let cube = new CubeA();
  let success = cube.manufacture(width, height, depth);
  if (success) {
    counter = counter + 1;
  } else {
    // try other manufacturer
    console.log("Company A was busy, so trying company B");
    cube = new CubeBAdapter();
    success = cube.manufacture(width, height, depth);
    if (success) {
      counter = counter + 1;
    } else {
      console.log("Company B was busy, so trying company A");
    }
  }
};

const interval = setInterval(() => {
  manufactureCube();
  if (counter >= totalCubes) {
    clearInterval(interval);
    console.log(`${totalCubes} cubes have been manufactured`);
  }
}, 1000);
