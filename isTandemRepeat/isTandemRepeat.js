function isTandemRepeat(inputString) {
  return inputString.length % 2 !== 0
    ? false
    : inputString.slice(0, inputString.length / 2) ===
        inputString.slice(inputString.length / 2);
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));

function isTandemRepeat1(inputString) {
  const wordLength = inputString.length;
  if (wordLength % 2 === 0) {
    const firstHalf = inputString.slice(0, wordLength / 2);
    const secondHalf = inputString.slice(wordLength / 2, wordLength);

    return firstHalf === secondHalf;
  }

  return false;
}

console.log(isTandemRepeat1("tandemtandem"));
console.log(isTandemRepeat1("qqq"));
console.log(isTandemRepeat1("2w2ww"));
