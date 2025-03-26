import { name, age, greet } from "./modules/01_named_export.js";

console.log(name);
console.log(age);
console.log(greet());

import * as utils from "./modules/01_named_export.js";

console.log(utils.name);

import {
  name as myName,
  age as myAge,
  greet as myGreet,
} from "./modules/01_named_export";

//defualt export

import addFunction from "./modules/02_default_export.js";

console.log(addFunction(1, 2)); // 3

import { name, age, greet } from "./modules/03_exports.js";
console.log(name);
console.log(age);
console.log(greet());
