function crossingSum(matrix, a, b) {
  const columnSum = matrix[a].reduce((num1, num2) => num1 + num2);
  let rowSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    rowSum += i !== a ? matrix[i][b] : 0;
  }
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3]
    ],
    1,
    3
  )
);

