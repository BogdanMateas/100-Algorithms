function largestOfFour(arr) {
  return arr.map(element => {
    return Math.max(...element);
  });
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [12, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
console.log(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);

function largestOfFour1(nums) {
  const highestNumbers = [];

  for (let numberGroup of nums) {
    let largest = 0;

    for (let number of numberGroup) {
      largest = largest < number ? number : largest;
    }
    highestNumbers.push(largest);
  }
  return highestNumbers;
}

console.log(
  largestOfFour1([
    [4, 5, 1, 3],
    [12, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
console.log(
  largestOfFour1([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ])
);
