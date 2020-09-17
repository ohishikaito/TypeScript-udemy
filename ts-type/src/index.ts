let hasValue: boolean = true;
let count: number = 1;
let single: string = "hello";

// let hello: string;
//
const person: {
  name: string;
  age: number;
} = {
  name: "jack",
  age: 21,
};

const fruits: string[] = ["a", "b", "c"];
const fruit = fruits[0];

const book: [string, number, boolean] = ["buz", 100, false];

enum CoffeeSize {
  a,
  b,
  c,
}
const coffee = {
  hot: true,
  size: CoffeeSize.a,
};
coffee.size = CoffeeSize.a;

// const coffeeSize = {
//   A: "A",
//   B: "B",
// };
// console.log(coffeeSize.B);
// coffeeSize.C = "hi";
// console.log(coffeeSize);

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, "hi"];
unionType.valueOf;
unionType = "hi";
unionType.toLocaleLowerCase;
// let clothSize: "small" | "midium" | "large" = "large";
type ClothSize = "small" | "midium" | "large";
let clothSize: ClothSize = "large";
const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: "small",
};

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(1, 2);

const aaa = function sayHello() {
  console.log("hiuuuuuuuu");
};
// console.log(aaa());
// const anotherAdd = add;
const anotherAdd1: (n1: number, n2: number) => number = add;
const anotherAdd2: (n1: number, n2: number) => number = function (num1, num2) {
  return num1 + num2;
};
const doubleNumber: (num: number) => number = (number) => number * 2;

function doubleAndHanble(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHanble(21, (doubleNum) => {
  return doubleNum;
});

function error(message: string): never {
  throw new Error(message);
}
console.log(error("addr error"));
