function arrayConvertion(n) {
  let isEven = true;
  while (n.length > 1) {
    let tmp = [];
    for (let i = 0; i < n.length; i += 2) {
      if (isEven) {
        tmp.push(n[i] + n[i + 1]);
      } else {
        tmp.push(n[i] * n[i + 1]);
      }
    }
    n = tmp;
    isEven = !isEven;
  }
  return n;
}

console.log(arrayConvertion([1, 2, 3, 4]));
