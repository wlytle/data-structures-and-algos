/*
 * @lc app=leetcode id=218 lang=javascript
 *
 * [218] The Skyline Problem
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

//Add buildings into curr array in a sorted manner
function addBuilding(edge, curr) {
  if (curr.length === 0) {
    curr.push(edge);
    return;
  }
  let start = 0,
    end = curr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    console.log(curr, start, end, mid);
    if (start === end) {
      curr[start].height > edge.height
        ? curr.splice(start, 0, edge)
        : curr.splice(start + 1, 0, edge);
      return;
    }
    if (curr[mid].height > edge.height && curr[mid - 1]?.height < edge.height) {
      curr.splice(mid - 1, 0, edge);
    } else if (curr[mid].height > edge?.height) {
      end = mid - 1;
    } else if (
      curr[mid].height < edge.height &&
      curr[mid + 1].height > edge.height
    ) {
      curr.splice(mid + 1, 0, edge);
    } else if (curr[mid].height < edge.height) {
      start = mid + 1;
    } else if (curr[mid].height === edge.height) {
      curr.splice(mid, 0, edge);
    }
  }
}

function removeBuilding(edge, curr) {
  let start = 0,
    end = curr.length - 1;
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (curr[mid].height > edge.height) {
      end = mid - 1;
    } else if (curr[mid].height < edge.height) {
      start = mid + 1;
    } else if (curr[mid].id === edge.id) {
      curr.splice(mid, 1);
    }
  }
}

var getSkyline = function (buildings) {
  let edges = [];
  for (let i = 0; i < buildings.length; i++) {
    edges.push({
      loc: buildings[i][0],
      start: true,
      height: buildings[i][2],
      id: i,
    });
    edges.push({
      loc: buildings[i][1],
      start: false,
      height: buildings[i][2],
      id: i,
    });
  }
  let res = [],
    curr = [],
    max;
  edges.sort((a, b) => a.loc - b.loc);
  for (let i = 0; i < edges.length; i++) {
    console.log("edge", edges[i]);
    if (edges[i].start) {
      //add building to curr

      addBuilding(edges[i], curr);

      if (
        res.length === 0 ||
        curr[curr.length - 1].height > res[res.length - 1].height
      ) {
        //new encounter is tallest add it to the skyline
        res.push([curr[curr.length - 1].loc, curr[curr.length - 1].height]);
        max = edges.id;
      }
      //case for the end of a building
    } else {
      if ((max = edges[i].id)) {
        curr.pop();
        if (curr.length) {
          max = curr[curr.length - 1].id;
        } else {
          //add empty space if no bulding in window
          res.push([res[res.length - 1].loc, 0]);
        }
      } else {
        removeBuilding(edges[i], curr);
      }
    }
  }
  return res;
};
// @lc code=end

console.log(
  getSkyline([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8],
  ])
);
