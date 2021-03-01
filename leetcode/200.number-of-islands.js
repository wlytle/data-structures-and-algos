/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

function explore(grid, i, j) {
  const map = {
    up: [1, 0],
    down: [-1, 0],
    left: [0, -1],
    right: [0, 1],
  };
  //out of bounds
  for (dir in map) {
    let iStep = i + map[dir][0],
      jStep = j + map[dir][1];
    if (
      iStep >= 0 &&
      jStep >= 0 &&
      iStep < grid.length &&
      jStep < grid[0].length &&
      grid[iStep][jStep] === "1"
    ) {
      grid[iStep][jStep] = "-1";
      explore(grid, iStep, jStep);
    }
  }
}

var numIslands = function (grid) {
  if (!grid?.length) return 0;
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = "-1";
        islands++;
        explore(grid, i, j);
      }
    }
  }
  return islands;
};
// @lc code=end

// grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];

// console.log(numIslands(grid));
