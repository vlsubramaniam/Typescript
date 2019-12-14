const carMakers = ['ford', 'toyoto', 'chevy']; // carMakers: string[]
const dates = [new Date(), new Date()]; // dates: Date[]

// const carsByMake = [(carMakers)]; // carsByMake: string[][]
const carsByMake: string[][] = [['bmw', 'maruti', 'hyundai']];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('bmw');
// carMakers.push(100); This will not be allowed

// Help with Map
carMakers.map((car: string): string => car.toUpperCase());

// Multiple types in arrays
const importantDates: (Date | string)[] = [new Date(), '22-11-2019'];
importantDates.push('21-11-2019');
