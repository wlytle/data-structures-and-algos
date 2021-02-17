function solution(roman) {
  const CONVERSION = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0,
    i = 0,
    curr,
    next;
  while (i < roman.length) {
    curr = roman[i];
    next = roman[i + 1];
    //check for invalid roman numerals
    if (!CONVERSION[curr]) return null;
    if (CONVERSION[next] > CONVERSION[curr]) {
      res += CONVERSION[next] - CONVERSION[curr];
      i += 2;
    } else {
      res += CONVERSION[curr];
      i++;
    }
  }
  return res;
}

console.log(solution("MDCLXVI"));
console.log(solution("CMDCLXIV"));
