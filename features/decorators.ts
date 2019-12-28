@classDecorator
class Boat {
  color: string = 'red';

  getFormattedColor(): string {
    return `The Boat's color is ${this.color}`;
  }

  @logError('Pilot was injured!!!')
  pilot(): void {
    throw new Error();
    console.log('Swistsh!!!');
  }

  Crew(
    @parameterDecorator member: string,
    @parameterDecorator generateWake: boolean
  ): void {
    console.log("I'm a crew member!");
  }
}

// function logError(target: any, key: string, desc: PropertyDescriptor) {
//   const method = desc.value;
//   desc.value = function() {
//     try {
//       method();
//     } catch (e) {
//       console.log('Boat was sunk in the ocean');
//     }
//   };
// }

function logError(errorMsg: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log(errorMsg);
      }
    };
  };
}

function parameterDecorator(targer: any, key: string, index: number) {
  console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
// new Boat().pilot();
