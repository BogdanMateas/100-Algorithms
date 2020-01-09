function sortByHeight(a) {
  const arr2 = a
    .filter(element => {
      return element !== -1;
    })
    .sort((num1, num2) => num1 - num2);

  let indexVal = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = arr2[indexVal];
      indexVal++;
    }
  }
  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

function sortByHeight1(heights) {
  let sortedHeights = [],
    result = [];
  let sortedHeightsIndex = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== -1) sortedHeights.push(heights[i]);
  }

  sortedHeights = sortedHeights.sort();

  for (let i = 0; i < heights.length; i++) {
    heights[i] === -1
      ? result.push(-1)
      : result.push(sortedHeights[sortedHeightsIndex++]);
  }

  return result;
}

console.log(sortByHeight1([-1, 150, 190, 170, -1, -1, 160, 180]));
