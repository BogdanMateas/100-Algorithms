function reverseAString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(reverseAString("hello"));
console.log(reverseAString("Howdy"));

function reverseAString1(str) {
  let reversedWord = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedWord += str[i];
  }

  return reversedWord;
}

console.log(reverseAString1("hello"));
console.log(reverseAString1("Howdy"));
