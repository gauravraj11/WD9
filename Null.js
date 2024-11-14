// Definition:
// null is an intentional absence of any object value. It’s used when you want to explicitly indicate that a variable is empty.

// Key Points:

// You, as a developer, assign null when you intentionally want to represent "no value."


let user = null;
console.log(user); // Output: null

let userDetails = { name: null }; // Name is intentionally set to null
console.log(userDetails.name); // Output: null


// Difference between null and undefined:

let x; // x is declared but not initialized
console.log(x); // Output: undefined

let y = null; // y is explicitly set to null
console.log(y); // Output: null
