function characterParity(symbol) {
  const result = parseInt(symbol);

  return isNaN(result) ? "not a digit" : result % 2 === 0 ? "even" : "odd";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
console.log(characterParity("111"));

function characterParity1(symbol) {
  const result = parseInt(symbol);
  if (isNaN(result)) return "not a digit";
  return result % 2 === 0 ? "even" : "odd";
}

console.log(characterParity1("5"));
console.log(characterParity1("8"));
console.log(characterParity1("q"));
console.log(characterParity1("111"));
