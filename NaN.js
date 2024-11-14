// NaN is a special value that indicates an invalid number or an operation that failed to produce a valid number.

console.log(0 / 0); // Output: NaN
console.log("abc" * 2); // Output: NaN
console.log(typeof NaN); // Output: number



console.log(isNaN("abc")); // Output: true
console.log(Number.isNaN(123)); // Output: false
