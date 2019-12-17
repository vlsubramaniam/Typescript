"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Sorter } from './Sorter';
var NumbersColletion_1 = require("./NumbersColletion");
var CharactersCollection_1 = require("./CharactersCollection");
/* Sort array of numbers */
// class Sorter {
//   constructor(public collection: number[]) {}
//   sort(): void {
//     const { length } = this.collection;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection[j] > this.collection[j + 1]) {
//           const leftPart = this.collection[j];
//           this.collection[j] = this.collection[j + 1];
//           this.collection[j + 1] = leftPart;
//         }
//       }
//     }
//     console.log(...this.collection);
//   }
// }
var numbersCollection = new NumbersColletion_1.NumbersCollection([5, 1, 9, 1, 0, -100, -1, -2]);
numbersCollection.sort();
console.log.apply(console, numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('ZAccB');
charactersCollection.sort();
console.log(charactersCollection.data);
