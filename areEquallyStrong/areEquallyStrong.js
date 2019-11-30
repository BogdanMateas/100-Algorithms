function areEquallyStrong(al, ar, bl, br) {
    return al+ar-bl-br === 0? true: false;
}
console.log(areEquallyStrong(10,15, 15,10)) // true
console.log(areEquallyStrong(15,10, 15,10)) // true
console.log(areEquallyStrong(15,10, 15,9)) // false
