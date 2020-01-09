function properNounCorrection(noun) {
  const firstChar = noun[0].toUpperCase();
  const restOfWord = noun.slice(1, noun.length).toLowerCase();

  return firstChar.concat(restOfWord);
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));
