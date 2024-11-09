// problem 2

const removeDuplicates = (array: number[]): number[] => {
  let newArray: number[] = [];

  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 5]));
