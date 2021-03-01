// Given a list of time intervals, find if any of them overlap.For example,Intervals -> ​[5,7], [1,3], [6,9]​ -> Intervals ​[5,7]​ and ​[6,9]​ overlap, so we return true

function overlap(interval) {
  if (interval.length <= 1) return false;
  let line = [];
  for (let i = 0; i < interval.length; i++) {
    line.push({ value: interval[i][0], start: true });

    line.push({ value: interval[i][1], start: false });
  }
  // sort based on time
  line.sort((a, b) => a.value - b.value);
  let count = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i].start) {
      count++;
    } else {
      count--;
    }
    if (count > 1) return true;
  }
  return false;
}

console.log(
  overlap([
    [5, 7],
    [1, 3],
    [6, 9],
  ])
);
// true
console.log(
  overlap([
    [5, 7],
    [1, 3],
    [8, 9],
  ])
);
//false
console.log(overlap([[5, 7]]));
// false
