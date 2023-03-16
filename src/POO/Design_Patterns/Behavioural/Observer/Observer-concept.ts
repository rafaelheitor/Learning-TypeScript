//The subscribe Interface
interface IObservable {
  //The subscribe method
  subscribe(observer: IObserver): void;

  //The unsubscribe method
  unsubscribe(observer: IObserver): void;

  //The notify method
  notify(...args: unknown[]): void;
}

class Subject implements IObservable {
  #Observers: Set<IObserver>;

  constructor() {
    this.#Observers = new Set();
  }

  subscribe(observer: IObserver): void {
    this.#Observers.add(observer);
  }

  unsubscribe(observer: IObserver): void {
    this.#Observers.delete(observer);
  }

  notify(...args: unknown[]): void {
    this.#Observers.forEach((observer) => {
      observer.notify(...args);
    });
  }
}

interface IObserver {
  //A method for the Observer to implement

  notify(...args: unknown[]): void;
  //Receive notifications
}

let COUNTER = 1;

//The Concrete Observer
class Observer implements IObserver {
  #id: number;

  constructor(observable: IObservable) {
    this.#id = COUNTER++;
    observable.subscribe(this);
  }

  notify(...args: unknown[]): void {
    console.log(`OBSERVER ${this.#id} received ${JSON.stringify(args)}`);
  }
}

const SUBJECT = new Subject();
const firstObserver = new Observer(SUBJECT);
const secondObserver = new Observer(SUBJECT);

SUBJECT.notify("First Notification", [1, 2, 3]);
SUBJECT.unsubscribe(secondObserver);
SUBJECT.notify("Second notification", { A: 1, B: 2, C: 3 });
