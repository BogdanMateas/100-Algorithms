function commonCharacterCount(s1, s2) {
  var count = 0;
  var str = "";
  for (var i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) > -1) {
      count++;
      s2 = s2.replace(s1[i], "");
    }
  }

  return count;
}

console.log(commonCharacterCount("aabcc", "adcaab"));

function commonCharacterCount1(s1, s2) {
  var count = 0;
  s1 = s1.split('');
  s2 = s2.split('');
  
  s1.forEach(e => {
    if (s2.includes(e)) {
      count++;
      s2.splice(s2.indexOf(e), 1);
      console.log(s2)
    }
  });
      
  return count;
}

console.log(commonCharacterCount1("aabcc", "adcaa"));

const arr = [ 1,2,3,4,5]
console.log(arr.splice(1,1))