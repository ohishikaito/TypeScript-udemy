abstract class Person {
  static species = "Homo";
  static isAdult(age: number) {
    if (age > 17) {
      return true;
    } else {
      return false;
    }
  }
  // name: string;
  // private age: number;
  constructor(readonly name: string, protected age: number) {
    // this.name = initName;
    // this.age = initAge;
  }

  incrementAge() {
    this.age += 1;
  }
  // greeting(this: { name: string }) {
  greeting(this: Person) {
    console.log(`name: ${this.name} age:${this.age}`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

class Teacher extends Person {
  private static instance: Teacher;
  explainJob() {
    console.log(`sub: ${this.subject}`);
  }
  get subject(): string {
    // if (!this._subject) {
    //   throw new Error("sub-era-");
    // }
    // console.log(this._subject);
    return this._subject;
  }
  set subject(value) {
    this._subject = value;
  }
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  // greeting() {
  //   console.log(`name: ${this.name} age:${this.age} sub:${this.subject}`);
  // }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("Hiro", 38, "Eng");
    return Teacher.instance;
  }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
// const teacher = new Teacher("Hiro", 38, "Eng");
// teacher.incrementAge();
// teacher.subject = "";
// console.log(teacher.subject);
// teacher.greeting();

// console.log(Teacher.species);
// console.log(Teacher.isAdult(17.01));

// let person2: Person;
// const quill = new Person("Quill", 38);
// // console.log(quill);
// quill.incrementAge();
// quill.greeting();

// const anotherQuill = {
//   name: "anaza-sukai",
// greeting() {},
// anotherGreeting: quill.greeting,
//   greeting: quill.greeting,
// };
// anotherQuill.greeting();
// anotherQuill.anotherGreeting();
