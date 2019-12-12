function differentSymbolsNaive(s) {
  const sArr = [...s];
  console.log(sArr);
  let uniqueCharsArr = [];

  sArr.forEach(char => {
    if (uniqueCharsArr.indexOf(char) === -1) {
      uniqueCharsArr.push(char);
    }
  });

  return uniqueCharsArr.length;
}

console.log(differentSymbolsNaive("cabca"));

function differentSymbolsNaive1(s) {
  const sArr = [...s];
  let uniqueCharsArr = [];

  sArr.forEach(char => {
    if (!uniqueCharsArr.includes(char)) {
      uniqueCharsArr.push(char);
    }
  });

  return uniqueCharsArr.length;
}

console.log(differentSymbolsNaive1("cabca"));

// with set

function differentSymbolsNaive2(s) {
  const sArr = [...s];
  const uniqueCharsArr = new Set();

  sArr.forEach(char => {
    uniqueCharsArr.add(char);
  });

  return uniqueCharsArr.size;
}

console.log(differentSymbolsNaive2("cabca"));

// with object

function differentSymbolsNaive3(s) {
  const sArr = [...s];
  const uniqueCharsArr = {};

  sArr.forEach(char => {
    uniqueCharsArr[char] = 1;
  });

  return Object.keys(uniqueCharsArr).length;
}

console.log(differentSymbolsNaive3("cabca"));
