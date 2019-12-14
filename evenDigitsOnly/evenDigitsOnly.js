function evenDigitsOnly(n) {
  const digits = n.toString().split("");

  return digits.every(digit => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));

function evenDigitsOnly1(n) {
  const digits = n.toString();

  for (let i = 0; i < digits.length; i++) {
    if (parseInt(digits[i]) % 2 !== 0) {
      return false;
    }
  }

  return true;
}

console.log(evenDigitsOnly1(248622));
console.log(evenDigitsOnly1(642386));
