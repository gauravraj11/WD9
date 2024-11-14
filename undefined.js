// undefined is a special value automatically assigned to variables that have been declared but not initialized.

// Key Points:

// Default value for variables that haven’t been assigned a value.
// It indicates absence of a value or uninitialized state.

let a;
console.log(a); // Output: undefined

function test() {
  let b;
  return b;
}
console.log(test()); // Output: undefined
