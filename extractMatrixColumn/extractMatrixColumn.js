function extractMatrixColumn(matrix, column) {
  const matrixCol = [];
  matrix.forEach(row => matrixCol.push(row[column]));
  return matrixCol;
}

console.log(
  extractMatrixColumn(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6]
    ],
    2
  )
);

function extractMatrixColumn1(matrix, column) {
  return matrix.map(row => row[column]);
}

console.log(
  extractMatrixColumn1(
    [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6]
    ],
    2
  )
);
