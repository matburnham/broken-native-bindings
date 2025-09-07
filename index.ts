import { foo, bar } from "./index.js";
import { bar } from "./index.js";

export const foo = 123;
export const bar = "abc";

bar = foo;
