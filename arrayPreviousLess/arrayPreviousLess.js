function arrayPreviousLess(arr) {
  const newArr = [-1];
  for (let i = 1; i < arr.length; i++) {
    console.log(i);
    if (arr[i - 1] < arr[i]) {
      newArr.push(arr[i - 1]);
    } else {
      newArr.push(-1);
    }
  }
  return newArr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

function arrayPreviousLess1(arr) {
  let lessThanArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(i);
    for (let j = i; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        lessThanArr.unshift(arr[j]);
        break;
      } else if (j === 0) {
        lessThanArr.unshift(-1);
      }
    }
  }
  return lessThanArr;
}

console.log(arrayPreviousLess1([1, 2, 3, 4]));
