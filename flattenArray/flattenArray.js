function flattenArray(arr) {
  const oneArr = [];

  flatten(arr);

  function flatten(arr) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        oneArr.push(element);
      }
    });
  }
  return oneArr;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

function flattenArray1(arr) {
  return arr
    .toString()
    .replace(/,/g, "")
    .split("")
    .map(element => {
      return parseInt(element) ? +element : element;
    });
}

console.log(flattenArray1([[["a"], ["b"]]]));
console.log(flattenArray1([1, [2], [3, [[4]]]]));
console.log(flattenArray1([[["a", [[[[1]]]]], 2]]));
