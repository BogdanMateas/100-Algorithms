function firstDigit(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    let charCode = inputString.charCodeAt(i);

    if (charCode >= 48 && charCode <= 57) {
      return inputString[i];
    }
  }
}

console.log(firstDigit("var_1__Int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));
