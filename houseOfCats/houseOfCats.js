function houseOfCats(legs) {
  const peopleCount = [];

  if (legs === 2) {
    return [1];
  }

  while (legs > 0) {
    peopleCount.unshift(legs / 2);
    legs -= 4;
  }

  return peopleCount;
}

console.log(houseOfCats(8));
console.log(houseOfCats(2));
