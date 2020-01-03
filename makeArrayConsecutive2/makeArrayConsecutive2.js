function makeArrayConsecutive2(statues) {
  const min = Math.min(...statues);
  const max = Math.max(...statues);
  let count = 0;

  for (let i = min; i < max; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }
  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
