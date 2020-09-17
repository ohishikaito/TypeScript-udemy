type Engineer = {
  name: string;
  role: string;
};
type Blogger = {
  name: string;
  follower: number;
};
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}
const quill: EngineerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};
// type tmp = string & number;

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}
// const upperHello = toUpperCase;
// upperHello("hi");

interface TempFunc {
  (x: string): number;
  (x: number): number;
}
const upperHello: TempFunc = function (x: string | number) {
  return 0;
};
interface FuncA {
  (a: number): number;
}
interface FuncB {
  (a: string): string;
}
// unionFunc = function (a: number | string, b?: number | string) {
//   return 0;
// };
// let unionFunc: FuncA & FuncB;
// unionFunc();
function advancedFn(...args: [number, string, boolean, ...number[]]) {
  //
}
advancedFn(0, "a", true);

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}
class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("speak-dog");
  }
}
class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet(bird.speak)");
  }
  fly() {
    console.log("flutter(bird.fly)");
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case "bird":
      pet.fly();
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

// const input = <HTMLInputElement> document.getElementById("input");
// const input = document.getElementById("input") as HTMLInputElement;
// const input2 = document.getElementById("input")!;
// const input3 = document.getElementById("input");
// input.value = "initial input value";

interface Designer {
  name: string;
  // [index: string]: string;
  [index: number]: string;
}
const designer: Designer = {
  name: "Quill",
  1: "a",
};

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}
const downloadedData: DownloadedData = {
  id: 1,
};
console.log(downloadedData.user?.name?.first);
const userData = downloadedData.user ?? "no-user"; // undifとnullだけ右側が反応する
type id = DownloadedData["id" | "user"];
enum Color {
  RED,
  BlUE,
}
// let target = Color.RED;
// let source = 10;
// target = source;
// let target = function (a: string, b: string) {};
// let source = function (a: string) {};
class AdvancedPerson {
  name: string = "Peter";
  private age: number = 35;
}
class AdvancedCar {
  name: string = "Prius";
  age: number = 5;
}
let target = new AdvancedPerson();
let source = new AdvancedCar();
// target = source;
// target("hi", "hello");

// advancedFn(0, 1);
let milk = "milk" as const;
let drink = milk;
const ar = [1, 2] as const;
const peter = {
  name: "peter",
  age: 69,
} as const;
type PeterType = typeof peter;
