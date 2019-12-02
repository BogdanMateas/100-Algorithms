function arrayMaxConsecutiveSum(inputArray, k) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += inputArray[i];
  }
  max = sum;
  
  for (let i = k; i < inputArray.length; i++) {
    console.log(k)
    console.log(i)
    sum -= inputArray[i - k];
    console.log(sum)
    sum += inputArray[i];
    console.log(sum)

    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
