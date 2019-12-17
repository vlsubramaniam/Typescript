// import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersColletion';
import { CharactersCollection } from './CharactersCollection';

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

const numbersCollection = new NumbersCollection([5, 1, 9, 1, 0, -100, -1, -2]);
numbersCollection.sort();
console.log(...numbersCollection.data);

const charactersCollection = new CharactersCollection('ZAccB');
charactersCollection.sort();
console.log(charactersCollection.data);
