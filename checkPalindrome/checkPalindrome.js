function checkPalindrome(inputString) {
  const givenString = inputString.toLowerCase();
  const reversedString = givenString
    .split("")
    .reverse()
    .join("");
  return givenString === reversedString;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
