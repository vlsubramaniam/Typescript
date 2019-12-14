/* Type Annotation
====================== */
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// any type
let coordinates: any;
coordinates = JSON.parse('{ "x" : "10", "y": 20 }');
console.log(coordinates);

// Built in Objects
let now: Date = new Date();

// Array
let colors: string[] = ['Red', 'Green', 'Blue'];
let myNumbers: number[] = [0, 1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, false, true];

// Classes
class Cars {}
let jaguar: Cars = new Cars();

// Object literal
let point: { x: number; y: number; z: number } = {
  x: 10,
  y: 20,
  z: -180,
};

// Function
const logNumber: (num: number) => void = (i: number) => {
  console.log('The number passed is ', i);
};
logNumber(10);

// Variables whose type cannot be inferred correctly
let numbers = [-10, 12, -180];
let numsAboveZero: number | boolean = true;

for (let i of numbers) {
  if (i > 0) {
    numsAboveZero = numbers[i];
  } else {
    numsAboveZero = false;
  }
}

/* Type Inference
====================== */
let oranges = 5; // If declaration and initialization are on the same line, Typescript will figure out the the type of 'oranges'
