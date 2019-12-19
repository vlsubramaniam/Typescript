class printAnything<T> {
  constructor (public collection: T[]) {}

  get (index: number): void {
    console.log(this.collection[index])
  }
}

interface Printable {
  print(): void
}

function printReference<T extends Printable> (arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

class Bikes {
  print (): void {
    console.log('Bikes')
  }
}
