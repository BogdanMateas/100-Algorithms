function chunkyMonkey(arr, size) {
  let bigArray = [];

  while (arr.length > 0) {
    bigArray.push(arr.splice(0, size));
  }

  return bigArray;
}
function chunkyMonkey1(arr, size) {
  let bigArray = [];
  let count = 0;

  while (count < arr.length) {
    bigArray.push(arr.slice(count, (count += size)));
  }

  return bigArray;
}

console.log(chunkyMonkey1(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey(["a", "b", "c", "d", "e", "f", "g"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
