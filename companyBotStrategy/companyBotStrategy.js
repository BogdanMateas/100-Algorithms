function companyBotStrategy(trainingData) {
  let time = 0;
  let corectness = 0;

  trainingData.forEach(data => {
      console.log(data[1])
    if (data[1] === 1) {
      time += data[0];
      corectness += data[1];
    }
  });

  return time / corectness || 0;
}

console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1]
  ])
);
console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1]
  ])
);
console.log(
  companyBotStrategy([
    [4, -1],
    [0, 0],
    [5, -1]
  ])
);
