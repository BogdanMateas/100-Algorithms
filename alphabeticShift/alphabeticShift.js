function alphabeticShift1(str) {
  return str
    .split("")
    .map(chCode => chCode.charCodeAt(0) + 1)
    .map(codeChar => String.fromCharCode(codeChar))
    .join("")
    .replace(/{/g, "a");
}

console.log(alphabeticShift1("zabc"));

function alphabeticShift2(str) {
  const arrayOfChars = str.split("");
  const shiftedCharCode = arrayOfChars.map(char => char.charCodeAt(0) + 1);
  console.log(shiftedCharCode);
  const newChars = shiftedCharCode.map(chCode => String.fromCharCode(chCode));
  console.log(newChars);
  const newStr = newChars.join("");
  console.log(newStr);
  const finalProduct = newStr.replace(/{/g, "a");
  console.log(finalProduct);
  return finalProduct;
}
console.log(alphabeticShift2("zabc"));
