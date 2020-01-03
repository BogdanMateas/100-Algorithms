function largestNumber(n) {
  let word = "";

  for (let i = 0; i < n; i++) {
    word = word.concat("9");
  }

  return parseInt(word);
}

console.log(largestNumber(10));

function largestNumber1(n) {
  let word = "9".repeat(n);

  return parseInt(word);
}

console.log(largestNumber1(10));
