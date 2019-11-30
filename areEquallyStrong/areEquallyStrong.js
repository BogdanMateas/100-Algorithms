function areEquallyStrong(myLeft, myRight, hisLeft, hisRight) {
    return myLeft+ myRight-hisLeft-hisRight === 0? true: false;
}
console.log(areEquallyStrong(10,15, 15,10)) // true
console.log(areEquallyStrong(15,10, 15,10)) // true
console.log(areEquallyStrong(15,10, 15,9)) // false
console.log(areEquallyStrong(15,10, 15,12)) // false
console.log(areEquallyStrong(15,40, 50,5)) // false
