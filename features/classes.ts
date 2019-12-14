class Vehicle {
  // color: string
  constructor(public color: string) {
    console.log(`The parent color is ${color}`);
  }
  // private drive(): void {
  //   console.log(`Drive car carefully`);
  // }
  honk(): void {
    console.log(`beep beep!!!`);
  }
}

class Car extends Vehicle {
  constructor(
    public wheels: number,
    parentColor: string,
    public childColor: string
  ) {
    super(parentColor);
    console.log(`The parent color is ${this.childColor}`);
  }
  private drive(): void {
    console.log(`vroom vroooom!!!`);
  }

  startDriving(): void {
    this.drive();
  }
}

const car = new Car(4, 'red', 'blue');
// car.startDriving();
