// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// // Sample Input:
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));
//[name,age,email]
// // Sample Output:
// true;

const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  let validate = false;
  keys.forEach((key) => {
    if (obj[key]) {
      validate = true;
    } else {
      validate = false;
    }
  });
  return validate;
};
const person = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(validateKeys(person, ["name", "age"]));
