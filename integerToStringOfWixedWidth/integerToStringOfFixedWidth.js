function integerToStringOfFixedWidth1(number, width) {
  let numStr = number.toString();
  let numWidth = numStr.length;
  let widthDiff = width - numWidth;
  let padStart = "";
  if (numWidth > width) {
    return padStart.concat(numStr.slice(numWidth - width));
  }
  for (let i = 0; i < widthDiff; ++i) {
    padStart = padStart.concat("0");
    return padStart.concat(numStr);
  }
  if (numWidth === width) {
    return numStr;
  }
}

console.log(integerToStringOfFixedWidth1(1234, 1));
console.log(integerToStringOfFixedWidth1(1234, 4));
console.log(integerToStringOfFixedWidth1(1234, 5));
