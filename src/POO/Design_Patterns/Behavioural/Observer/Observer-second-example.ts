interface SecondSubject {
  attach(observer: SecondObserver): void;

  detach(observer: SecondObserver): void;

  notify(): void;
}

interface SecondObserver {
  update(subject: SecondSubject): void;
}

class ConcreteSubject implements SecondSubject {
  public state!: number;

  private observers: SecondObserver[] = [];

  public attach(observer: SecondObserver): void {
    const alreadyExists: boolean = this.observers.includes(observer);

    if (alreadyExists) {
      return console.log("Subject: Observer has been attached already.");
    }

    console.log("Subject: Attached an observer.");
    this.observers.push(observer);
  }

  public detach(observer: SecondObserver): void {
    const observerIndex: number = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer");
  }

  public notify(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log("\nSubject: I'm doing something important.");
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}

class ConcreteObserverA implements SecondObserver {
  public update(subject: SecondSubject): void {
    if (subject instanceof ConcreteSubject && subject.state !== null) {
      console.log("ConcreteObserverA: Reacted to the event.");
    }
  }
}

class ConcreteObserverB implements SecondObserver {
  public update(subject: SecondSubject): void {
    if (subject instanceof ConcreteSubject && subject.state !== null) {
      console.log("ConcreteObserverB: Reacted to the event.");
    }
  }
}

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);
subject.detach(observer2);

subject.someBusinessLogic();
