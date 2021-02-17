/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let left = 0,
    right = k - 1,
    max = [],
    curMax;
  if (k > nums || !nums.length) return null;
  curMax = findMax(left, right, max, nums);

  while (right < nums.length - 1) {
    left++;
    right++;
    if (nums[right] >= max[max.length - 1] && curMax >= left) {
      max.push(nums[right]);
      curMax = right;
    } else if (curMax < left) {
      curMax = findMax(left, right, max, nums);
    } else {
      max.push(max[max.length - 1]);
    }
  }
  return max;
};

function findMax(left, right, max, nums) {
  let curMax, tmpMax;
  for (let i = left; i <= right; i++) {
    if (i === left || nums[i] > tmpMax) {
      tmpMax = nums[i];
      curMax = i;
    }
  }
  max.push(tmpMax);
  return curMax;
}

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// @lc code=end
