import _ from "lodash";
declare module "lodash" {
  interface LoDashStatic {
    hello: string;
  }
}

// // interface Lodash {
// //   shuffle(arr: T[]): T[];
// // }

// // declare namespace _ {
// //   function shuffle<T>(arr: T[]): T[];
// // }
