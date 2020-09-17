import axios from "axios";
import _ from "lodash";
// console.log(_.shuffle([1, 2, 3, 4]));
_.hello;
namespace myApp {
  const hello = "namespace";
  export const name = "quill";
  export interface Nameable {
    name: string;
  }
}
const hello = myApp.name;
let nameable: myApp.Nameable;

// let name: string;
// function name() {}
// enum name {}
// class name {}
// interface name {}
// type name = {};
namespace name {
  const first: string = "Peter";
}
