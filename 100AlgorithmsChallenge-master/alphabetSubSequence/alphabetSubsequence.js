function alphabetSubsequence(s) {
  arrayOfS = s.split("");
  console.log(tempS);
  console.log("e".charCodeAt());
  for (let i = 0; i < arrayOfS.length - 1; i++) {
    if (arrayOfS[i].charCodeAt() >= arrayOfS[i + 1].charCodeAt()) {
      return false;
    }
  }
  return true;
}

console.log(alphabetSubsequence("abc"));
console.log(alphabetSubsequence("accac"));
console.log(alphabetSubsequence("abcefga"));
