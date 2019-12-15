function factorializeANumber(num) {
  let factorializedNumber = 1;
  for (let i = 1; i <= num; i++) {
    factorializedNumber *= i;
  }
  return factorializedNumber;
}

console.log(factorializeANumber(6));
console.log(factorializeANumber(10));

function factorializeANumber1(num) {
  return num === 1 ? 1 : num * factorializeANumber1(num - 1);
}

console.log(factorializeANumber1(5));
console.log(factorializeANumber1(10));
