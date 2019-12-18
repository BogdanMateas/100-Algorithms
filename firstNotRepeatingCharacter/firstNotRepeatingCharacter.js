function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i && s.lastIndexOf(s[i]) === i) {
      return s[i];
    }
  }

  return "_";
}

console.log(firstNotRepeatingCharacter("abacabadc"));
console.log(firstNotRepeatingCharacter("abacabaabacaba"));

function firstNotRepeatingCharacter1(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj.hasOwnProperty(str[i]) ? obj[str[i]] + 1 : 0;
  }

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 0) return str[i];
  }
  return "_";
}

console.log(firstNotRepeatingCharacter1("abacaba"));
console.log(firstNotRepeatingCharacter1("abacabaabacaba"));
