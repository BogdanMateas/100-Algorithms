function circleOfNumbers(n, firstNumber) {
  const numberArr = [];
  const halfWay = n / 2;

  for (let i = 0; i < n; i++) {
    numberArr.push(i);
  }

  return firstNumber < halfWay
    ? numberArr[firstNumber + halfWay]
    : numberArr[firstNumber - halfWay];
}

console.log(circleOfNumbers(10, 2));
