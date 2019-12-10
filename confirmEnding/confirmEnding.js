function confirmEnding(str, target) {
  const start = str.length - target.length;
  console.log(start);

  return str.substr(start) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));

function confirmEnding1(str, target) {
  return str.endsWith(target);
}
console.log(confirmEnding1("Hello", "ello"));
