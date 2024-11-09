//problem 5
const getProperty = <T, Q extends keyof T>(obj: T, property: Q): T[Q] => {
  return obj[property];
};
console.log(getProperty({ name: "sayid", age: 24 }, "name"));
