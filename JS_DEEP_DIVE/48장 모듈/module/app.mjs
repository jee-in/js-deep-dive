import { pi, square, Person } from "./lib.mjs";

console.log(pi);
console.log(square(10));
console.log(new Person("Lee"));

// 또는
// import * as lib from "./lib.mjs";

// console.log(lib.pi);
// console.group(lib.square(10));
// console.log(new lib.Person("Lee"));

// 또는
import { pi as PI, square as sq, Person as P } from "./lib.mjs";

console.log(PI);
console.log(sq(2));
console.log(new P("Kim"));
