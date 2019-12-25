function incorrectPasscodeAttempts(passcode, attempts) {
  let count = 0;
  for (let i = 0; i < attempts.length; i++) {
    count = attempts[i] === passcode ? 0 : count++;
    if (count === 10) {
      return false;
    }
  }
  return true;
}

console.log(
  incorrectPasscodeAttempts("1111", [
    "1111",
    "4444",
    "9999",
    "3333",
    "8888",
    "2222",
    "7777",
    "0000",
    "6666",
    "7285",
    "5555",
    "1111"
  ])
);
console.log(
  incorrectPasscodeAttempts("1111", [
    "1111",
    "4444",
    "9999",
    "3333",
    "8888",
    "2222",
    "7777",
    "0000",
    "6666",
    "7285",
    "1111"
  ])
);

function incorrectPasscodeAttempts1(passcode, attempts) {
  let count = 0;
  for (let attempt of attempts) {
    count = attempt === passcode ? 0 : count++;
    if (count === 10) {
      return false;
    }
  }
  return true;
}
console.log(
  incorrectPasscodeAttempts1("1111", [
    "1111",
    "4444",
    "9999",
    "3333",
    "8888",
    "2222",
    "7777",
    "0000",
    "6666",
    "7285",
    "5555",
    "1111"
  ])
);
console.log(
  incorrectPasscodeAttempts1("1111", [
    "1111",
    "4444",
    "9999",
    "3333",
    "8888",
    "2222",
    "7777",
    "0000",
    "6666",
    "7285",
    "1111"
  ])
);
