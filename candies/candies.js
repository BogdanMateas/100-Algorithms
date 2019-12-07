function candies(n, m) {
  const remainder = m % n;

  return m - remainder;
}
console.log(candies(3, 10));
console.log(candies(3, 12));

function candies1(n, m) {
  const candy = Math.floor(m / n);
  return candy * n;
}

console.log(candies1(3, 10));
