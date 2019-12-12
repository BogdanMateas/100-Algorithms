function depositProfit(deposit, rate, threshold) {
  let year = 0;

  while (threshold > deposit) {
    deposit += deposit * (rate / 100);
    year++;
  }
  return year;
}

console.log(depositProfit(100, 20, 170));
