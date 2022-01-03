// Function with Callback
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// Function as type
export type MutationFunction = (v: number) => number;

// Function params with params
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutateFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 20, 3], (v) => v * 10));

// Another function as a type
export type AdderFunction = (v: number) => number;
// Returning a function from a function
export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
