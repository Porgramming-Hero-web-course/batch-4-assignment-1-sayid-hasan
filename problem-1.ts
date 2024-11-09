const sumArray = (array: number[]): number => {
  const initialValue: number = 0;
  return array.reduce(
    (accumulator: number, currentValue: number): number =>
      accumulator + currentValue,
    initialValue
  );
};

console.log(sumArray([1, 2, 3, 4, 5]));
