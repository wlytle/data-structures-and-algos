var romanToInt = function (s) {
  let start = 0;
  let count = 0;
  let curr;
  let next;
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (s.length === 1) return dict[s];

  while (start < s.length) {
    curr = s[start];
    next = s[start + 1];
  
    if (curr !== next && dict[next] > dict[curr]) {
      count += dict[next] - dict[curr];
      start += 2;
    } else {
      count += dict[curr];
      ++start;
    }
  }
  return count;
};

console.log(romanToInt("LVIII"));
