function copy<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  // let user: T;
  value[key];
  console.log(value[key]);
  console.log(key);
  return value;
}
// console.log(copy<string>("tintin"));
console.log(copy({ name: "unko", age: 38 }, "age"));
// type K = keyof { name: string; age: number };

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}

const stringLightDatabase = new LightDatabase();
// const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add("Apple");
// stringLightDatabase.add(1);
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase);

// type TmpDatabase<T> = {
interface TmpDatabase<T> {
  id: number;
  data: T[];
}

const tempDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

interface Todo {
  title: string;
  text: string;
}
type Todoalbe = Partial<Todo>;
type ReadTodo = Readonly<Todo>;

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});

fetchData.then((data) => {
  data.toUpperCase();
});
const vegetables: Array<string> = ["a", "b", "c"];

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp2: ResponseData;
interface Vegetables {
  readonly tomato: string;
  pumpkin: string;
}
let tmp3: keyof Vegetables;
type MappedTypes = {
  -readonly [P in "tomato1" | "pumpkin1"]?: string;
};
// type MappedTypes2 = {
//   [P in keyof Vegetables]: string;
// };
type ConditionalTypes = "tomato" extends string ? number : boolean;
{
}
type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
  ? R
  : boolean;

type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
let tmp4: DistributiveConditionalTypes<"tomato" | "pumpkin">;
let tmp5: NonNullable<string | null>;
