function bishopAndPawn(b, p) {
  let board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };
  console.log(parseInt(b[1]));
  return board[b[0]] === parseInt(b[1]) && board[p[0]] === parseInt(p[1]);
}

console.log(bishopAndPawn("a1", "c3"));
