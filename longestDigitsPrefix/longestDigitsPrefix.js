function longestDigitsPrefix(inputString) {
  const result = inputString.match(/^\d*/);
  if (result !== null) return result[0];
  return "";
}

console.log(longestDigitsPrefix("123aa1"));

function longestDigitsPrefix1(str) {
  let prefix = str.replace(/[a-zA-Z]/g, "@");
  let nonDigit = prefix.indexOf("@");
  return prefix.slice(0, nonDigit);
}

console.log(longestDigitsPrefix1("123aa1"));

function longestDigitsPrefix2(str) {
  let prefix = "";

  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i])) {
      prefix += str[i];
    } else {
      break;
    }
  }

  return prefix;
}

console.log(longestDigitsPrefix2("123aa1"));
