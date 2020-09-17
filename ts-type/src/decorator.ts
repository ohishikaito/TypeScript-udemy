function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

function Component(template: string, selector: string) {
  console.log("cf");
  return function <
    T extends {
      new (...args: any[]): { name: string; age: number };
    }
  >(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const moutedElement = document.querySelector(selector);
        console.log("start");
        const instance = new constructor();
        if (moutedElement) {
          moutedElement.innerHTML = template;
          moutedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}
function PropertyLogging(target: any, propertyKey: string) {
  console.log("propertyLogging");
  console.log(target);
  console.log(propertyKey);
}

function MethodLogging(
  target: any,
  propertyKey: string,
  descripor: PropertyDescriptor
) {
  console.log("MethodLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descripor);
}
function enumerable(isENumerable: boolean) {
  return function (
    _target: any,
    _propertyKey: string,
    _descripor: PropertyDescriptor
  ) {
    return {
      enumerable: isENumerable,
    };
  };
}
function AccessorLogging(
  target: any,
  propertyKey: string,
  descripor: PropertyDescriptor
) {
  console.log("AccessorLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descripor);
}
function ParameterLogging(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("ParameterLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

@Logging("logging")
@Component("<h1>{{ name }}</h1>", "#app")
class User {
  @PropertyLogging
  // static name2 = "Quill22";
  name = "Quill22";
  constructor(private _age: number) {
    console.log("User was created!");
  }
  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  @enumerable(false)
  @MethodLogging
  greeting(fa: string, @ParameterLogging message: string) {
    console.log(message);
  }
}
const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);
