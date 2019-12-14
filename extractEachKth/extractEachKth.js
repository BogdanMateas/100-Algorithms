function extractEachKth(inputArray, k) {
  return inputArray.filter(elem => elem % k !== 0);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

function extractEachKth1(arr, k) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % k !== 0) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

console.log(extractEachKth1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
