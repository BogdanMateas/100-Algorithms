function pagesNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits >= current.toString().length) {
    numberOfDigits -= current.toString().length;

    if (numberOfDigits >= current.toString().length) {
      current++;
    }
  }
  return current;
}

console.log(pagesNumberingWithInk(1, 15));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));