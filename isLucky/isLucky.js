function isLucky(n) {
  const luckyN = n.toString();
  const half = luckyN.length / 2;

  const firstHalf = getTotal(luckyN.substring(0, half));
  const secondHalf = getTotal(luckyN.substring(half, luckyN.length));

  return firstHalf === secondHalf;
}

function getTotal(n) {
  return n
    .split("")
    .map(char => parseInt(char))
    .reduce((num1, num2) => num1 + num2);
}

console.log(isLucky(1230));
console.log(isLucky(239017));

function isLucky1(num) {
  let firstHalfSum = 0,
    secondHalfSum = 0,
    strNum = num.toString();

  for (let i = 0; i < strNum.length; i++) {
    i < strNum.length / 2
      ? (firstHalfSum += parseInt(strNum[i]))
      : (secondHalfSum += parseInt(strNum[i]));
  }

  return firstHalfSum === secondHalfSum;
}

console.log(isLucky1(1230));
console.log(isLucky1(239017));
