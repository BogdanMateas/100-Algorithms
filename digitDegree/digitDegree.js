function digitDegree(n) {
  let count = 0;
  let currentNumber = n;

  if (n < 10) {
    return count;
  } else {
    while (true) {
      count++;
      currentNumber = getDigit(currentNumber);

      if (currentNumber < 10) {
        break;
      }
    }
  }

  return count;
}

function getDigit(num) {
  const nums = num
    .toString()
    .split("")
    .map(element => parseInt(element));

  return nums.reduce((a, b) => {
    return a + b;
  });
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(99));
