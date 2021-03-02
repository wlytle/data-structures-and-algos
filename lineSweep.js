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

// console.log(
//   overlap([
//     [5, 7],
//     [1, 3],
//     [6, 9],
//   ])
// );
// // true
// console.log(
//   overlap([
//     [5, 7],
//     [1, 3],
//     [8, 9],
//   ])
// );
// //false
// console.log(overlap([[5, 7]]));
// // false

//
// Merge Intervals - Given a list of intervals, merge all overlapping intervals. At the end of the merge, there should be no overlapping intervals.For example,Input = ​(1,3), (3,5), (6,8), (7,9)Output = ​(1,5), (6,9)

function mergeOverlap(interval) {
  if (interval.length <= 1) return interval;
  let line = [];
  for (let i = 0; i < interval.length; i++) {
    line.push({ time: interval[i][0], start: true });
    line.push({ time: interval[i][1], start: false });
  }
  //sort by time, if two times are equal the start time must come first
  line.sort((a, b) => {
    if (a.time === b.time) {
      return a.start === b.start ? 0 : a.start ? -1 : 1;
    }
    return a.time - b.time;
  });

  let overlap = 0;
  let res = [];
  for (let i = 0; i < line.length; i++) {
    if (line[i].start) {
      overlap++;
      if (overlap === 1) res.push([line[i].time]);
    } else {
      overlap--;
      if (overlap === 0) res[res.length - 1][1] = line[i].time;
    }
  }
  return res;
}

// console.log(
//   mergeOverlap([
//     [1, 3],
//     [3, 5],
//     [6, 8],
//   ])
// );
// //[[1,5],[5,9]]
// console.log(
//   mergeOverlap([
//     [5, 7],
//     [1, 3],
//     [6, 9],
//   ])
// );
// //[[1,3],[5,9]]

// console.log(mergeOverlap([[5, 7]]));
// //[[1,7

// You are given a list of buildings that are part of a skyline. For each building, youare given the height, start and end points.For example, if a building has ​[height=5, start=1, end=4]​,it represents a building of height 5 from point 1 on a number line to point 4.Given a list of such buildings that may overlap, you want to draw the skyline

function skyline(buildings) {}
console.log([[0, 5, 10]]);
