let apples: number = 5;

let speed: string = 'Fast';

let hasName: boolean = true;

let now: Date = new Date();

let nothing: undefined = undefined;

let nullNothing: any = null;
nullNothing = 5;
nullNothing = true;

// ARRAYS

let colors: string[] = ['red', 'blue', 'green'];

let nums: number[] = [5, 3, 4];

// CLASSES

class Cat { }

let cat: Cat = new Cat();

// OBJECT LITERAL

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// FUNCTION

const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

const add5: (num: number) => number = (num) => {
  return num + 5;
};
