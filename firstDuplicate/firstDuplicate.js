function firstDuplicate(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));

function firstDuplicate1(arr) {
  const firstDup = {};

  for (let num of arr) {
    if (firstDup.hasOwnProperty(num)) {
      return num;
    }

    firstDup[num] = num;
  }
  return -1;
}

console.log(firstDuplicate1([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate1([2, 4, 3, 5, 1]));
