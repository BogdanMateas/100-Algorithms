function checkInsensitivePalindrome(inputString) {
  const givenString = inputString.toLowerCase();
  const reversedString = givenString
    .split("")
    .reverse()
    .join("");
  return givenString === reversedString;
}

console.log(checkInsensitivePalindrome("aabaa"));
console.log(checkInsensitivePalindrome("abac"));
console.log(checkInsensitivePalindrome("a"));
