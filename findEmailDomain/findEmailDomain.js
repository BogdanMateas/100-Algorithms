function findEmailDomain(address) {
  const lastAtIndex = address.lastIndexOf("@");

  return address.slice(lastAtIndex + 1, address.length);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));

function findEmailDomain1(address) {
  return address.split("@").pop();
}

console.log(findEmailDomain1("prettyandsimple@example.com"));
console.log(findEmailDomain1('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
