// Definition:
// A Symbol is a unique and immutable primitive value used as the key for object properties.

let id = Symbol("id");
let obj = { [id]: 123 };
console.log(obj[id]); // Output: 123
