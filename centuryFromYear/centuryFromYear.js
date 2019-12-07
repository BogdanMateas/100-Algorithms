function centuryFromYear(year) {
  const century = year / 100;
  console.log(century);

  return year % 100 === 0 ? century : Math.floor(century);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
