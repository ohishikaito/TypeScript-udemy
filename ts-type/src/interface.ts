// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Nameable {
  name?: string;
  nickName?: string;
}
const nameable: Nameable = {
  name: "kiita",
  nickName: "qew",
};
interface Human extends Nameable {
  age: number;
  // greeting: (message: string) => void;
  greeting(message: string): void;
}

class Developer implements Human {
  name?: string;
  constructor(
    // public name: string,
    public age: number,
    public experience: number,
    initName?: string
  ) {
    if (initName) {
      this.name = initName;
    }
  }
  // greeting(message: string = "hi") {
  // if (message) {
  //   message = message.toUpperCase();
  // }
  greeting(message: string) {
    console.log(message);
  }
}
// const tmpDeveloper = {
//   name: "quill",
//   age: 38,
//   experience: 3,
//   greeting(message: string) {
//     console.log(message);
//   },
// };
// const user: Human = new Developer("Quill", 38, 3);
// const user: Human = tmpDeveloper;
// user.greeting("a");
// const user2 = new Developer("AHO", 1, 2);
// user2.greeting("aaaa");

// const human = {
//   // const human: Human = {
//   name: "Quill",
//   age: 38,
//   greeting(message: string) {
//     console.log(message);
//   },
// };
