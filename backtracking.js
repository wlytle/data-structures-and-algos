// Maze Problem: You are given a 2D array that represents a maze. It can have 2 values - 0 and 1.1 represents a wall and 0 represents a path.The objective is to reach the bottom right corner, i.e, A[A.length-1][A.length-1]. You start fromA[0][0]. You can move in 4 directions - up, down, left and right. Find if a path exists to thebottom right of the maze.For example, a path exists in the following maze:0 1 1 10 1 1 10 0 0 01 1 1 0
// Q. How do you want the output?
// A. Return ​true​  if a path exists.
// Q. Does it matter if the end is a path or a wall?
// A. It doesn't matter, the last element (​A[A.length-1][A.length-1]​) can be anything. You just have to getthere.
// Q. What if the array is empty or null?
// A. Return ​false​ (no path exists).
// Q. What if the array has just one element, e.g, ​{0}​ or ​{1}​.
// A. Return ​true​, because we're already at the last element.

function findPath(maze) {
  if (!maze?.length) return false;
  let i = 0,
    j = 0,
    memo = {};

  if (pathHelper(maze, i, j, memo)) return true;
  return false;
}

function pathHelper(maze, i, j, memo) {
  //check out of bounds
  if (i < 0 || i >= maze.length || j < 0 || j >= maze[0].length) return false;
  // check if at the end of the maze
  if (i === maze.length - 1 && j === maze[0].length - 1) return true;
  // check if there is a wall
  if (maze[i][j] === 1) return false;
  // Have we checked this path before
  if (
    memo[`${i},${j}`] === "Path_Not_Found" ||
    memo[`${i},${j}`] === "Visiting"
  ) {
    return false;
  }
  //mark this space as being visited
  memo[`${i},${j}`] = "Visiting";

  const steps = {
    down: [1, 0],
    up: [-1, 0],
    right: [0, 1],
    left: [0, -1],
  };
  //   console.log(i, j, memo);
  for (const s in steps) {
    let currStep = steps[s];
    if (pathHelper(maze, i + currStep[0], j + currStep[1], memo)) {
      return true;
    }
  }
  memo[`${i},${j}`] = "Path_Not_Found";
  return false;
}
console.log(
  findPath([
    [0, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 0],
  ])
);

console.log(
  findPath([
    [0, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 0],
    [1, 1, 1, 0],
  ])
);
console.log(
  findPath([
    [0, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 0],
  ])
);
console.log(findPath([[0, 1, 1, 1]]));

console.log(findPath([[1]]));
console.log(findPath([[]]));
