const addTwoDigits1 = num => {
  const numbers = num.toString().split("");
  console.log(numbers);

  return numbers.reduce((num1, num2) => {
    return parseInt(num1) + parseInt(num2);
  });
};

console.log(addTwoDigits1(12));

const addTwoDigits2 = num => {
  const numbers = num.toString().split("");
  console.log(numbers);
  return parseInt(numbers[0]) + parseInt(numbers[1]);
};

console.log(addTwoDigits2(22));
