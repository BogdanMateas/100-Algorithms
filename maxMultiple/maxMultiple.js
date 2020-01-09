function maxMultiple(divisor, bound) {
  return divisor * Math.floor(bound / divisor);
}

console.log(maxMultiple(3, 10));
console.log(maxMultiple(3, 30));
console.log(maxMultiple(3, 29));
console.log(maxMultiple(3, 16));

function maxMultiple1(divisor, bound) {
  let remainder = bound % divisor;

  return bound - remainder;
}

console.log(maxMultiple1(3, 10));
