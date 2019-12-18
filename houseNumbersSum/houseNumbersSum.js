function houseNumberSum(arr) {
  let sum = 0,
    counter = 0;

  add(arr);
  return sum;

  function add(arr) {
    if (arr[counter] === 0) return 0;
    sum += arr[counter];
    counter++;
    return add(arr);
  }
}

console.log(houseNumberSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));

function houseNumberSum1(inputArray) {
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      return sum;
    }
    sum += inputArray[i];
  }
}

console.log(houseNumberSum1([5, 1, 2, 3, 1, 1, 5, 0, 2]));
