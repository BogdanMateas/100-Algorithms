function convertString(s, t) {
  let word = "";
  let tIndex = 0;
  const sChars = s.split("");

  for (let i = 0; i < s.lenght; i++) {
    if (s[i] === t[tIndex]) {
      word = word.concat(s[i]);
      tIndex++;

      if (word === t) {
        return true;
      }
    }
  }

  return false;
}

console.log(convertString("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString("addbyca", "abcd"));

function convertString1(s, t) {
  const newS = s.split("");
  const newT = t.split("");

  const filteredS = newS.filter((char, i) => {
    return char === newT[i];
  });

  console.log(filteredS);
}

console.log(convertString1("ceoydefthf5iyg5h5yts", "codefights"));
console.log(convertString1("addbyca", "abcd"));
