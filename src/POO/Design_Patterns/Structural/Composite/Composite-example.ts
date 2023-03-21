let indexHelper = 1;

abstract class Employee {
  protected supervisor!: Employee | null;

  public setSupervisor(parent: Employee | null) {
    this.supervisor = parent;
  }

  getSupervisor(): Employee | null {
    return this.supervisor;
  }

  public add(employee: Employee): void {}
  public remove(employee: Employee): void {}
  public abstract operation(): string;
}

class Developer extends Employee {
  public id: number;
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
    this.id = indexHelper++;
  }

  public operation(): string {
    return `Employee ${this.id} name: ${this.name}`;
  }
}

class Manager extends Employee {
  public subordinate: Employee[] = [];
  public id: number;
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
    this.id = indexHelper++;
  }

  public add(employee: Employee): void {
    this.subordinate.push(employee);
    employee.setSupervisor(this);
  }

  public remove(employee: Employee): void {
    const employeeIndex = this.subordinate.indexOf(employee);
    this.subordinate.splice(employeeIndex, 1);
    employee.setSupervisor(null);
  }

  public operation(): string {
    const results = [];
    for (const employee of this.subordinate) {
      results.push(employee.operation());
    }
    return `Manager ${this.name} has subordinate: \n ${results.join(", ")}`;
  }
}

class Cto extends Employee {
  protected subordinate: Employee[] = [];
  public id: number;
  public name: string;

  constructor(name: string) {
    super();
    this.name = name;
    this.id = indexHelper++;
  }
  public add(employee: Employee): void {
    this.subordinate.push(employee);
    employee.setSupervisor(this);
  }

  public remove(employee: Employee): void {
    const employeeIndex = this.subordinate.indexOf(employee);
    this.subordinate.splice(employeeIndex, 1);
    employee.setSupervisor(null);
  }

  public operation(): string {
    const results = [];
    for (const employee of this.subordinate) {
      results.push(employee.operation());
    }
    return `CTO ${this.name} has subordinate: \n ${results.join(", ")}`;
  }
}

function employeeClientCode(employee: Employee) {
  console.log(employee.operation());
}

const dev1 = new Developer("João");
const dev2 = new Developer("Gabriel");
const dev3 = new Developer("Rafael");
const manager = new Manager("Batista");
const cto = new Cto("Oliveira");

employeeClientCode(dev1);
employeeClientCode(manager);
employeeClientCode(cto);

manager.add(dev1);
manager.add(dev2);
manager.add(dev3);
cto.add(manager);

employeeClientCode(manager);
employeeClientCode(cto);
