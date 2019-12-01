function areSimilar(a, b) {
  if (a.length != b.length) return false;
  let fails = 0;
  let isSimilar = true;
  let sortedA = [...a].sort((a, b) => a - b);
  let sortedB = [...b].sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (sortedA[i] != sortedB[i]) {
      fails++;
    }
    if (fails >= 1) {
      return (isSimilar = false);
    }
  }
  return isSimilar;
}
console.log(areSimilar([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 3], [1, 2, 3, 5]));
console.log(areSimilar([1, 2, 3, 4, 5, 6], [1, 2, 5, 4, 3, 6]));
console.log(areSimilar([1, 2, 3, 4, 5, 6, 7], [1, 2, 5, 4, 3, 7, 6]));
