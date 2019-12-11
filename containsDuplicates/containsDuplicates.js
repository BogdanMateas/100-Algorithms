function containsDuplicates(a) {
  const newArr = a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));

function containsDuplicates1(a) {
  const newArr = a.sort((a, b) => a - b);
  newArr.find((num, i) => {
    num[i] = num[i + 1];
  });
}
console.log(containsDuplicates([3, 1]));
console.log(containsDuplicates([1, 2, 3, 1]));
