//problem 3
const countWordOccurences = (sentence: string, word: string): number => {
  const sentenceWordArray = sentence.split(" ");
  //   console.log(sentenceWordArray);
  let occurCount = 0;
  for (let i = 0; i < sentenceWordArray.length; i++) {
    if (sentenceWordArray[i] === word) {
      occurCount = occurCount + 1;
    }
  }
  return occurCount;
};

console.log(countWordOccurences("i love typescript", "typescript"));
