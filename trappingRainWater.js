// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// O(n) space and memory
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const minBoundingMax = [];
    let currLeftMax = 0;
    let currRightMax = height[height.length-1];
    let totalWater = 0;

    if (height.length < 3) {
        return totalWater;
    }

    for (let i=0; i<height.length-1; i++) {
        if (i === 0) {
            minBoundingMax.push(0);
            currLeftMax = height[0];
        } else {
            minBoundingMax.push(Math.max(currLeftMax, height[i-1]));
            currLeftMax = Math.max(height[i], currLeftMax);
        }
    }
    // Account for unbound right side
    minBoundingMax.push(0);

    for (let j=height.length-2; j>0; j--) {
        minBoundingMax[j] = Math.min(minBoundingMax[j], currRightMax);
        currRightMax = Math.max(height[j], currRightMax);
    }

    for (let k=1; k<height.length-1; k++) {
        if (height[k] >= minBoundingMax[k]) {
            continue;
        }
        const pondedWater = minBoundingMax[k] - height[k];
        totalWater += pondedWater;
    }

    return totalWater;
};


// O(n) time O(1) space
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let totalWater = 0;

    let left = 0;
    let maxLeft = height[0];
    let right = height.length - 1;
    let maxRight = height[height.length - 1];

    while(left < right) {
        let pondedWater = 0;
        if (maxRight < maxLeft) {
            right--;
            maxRight = Math.max(height[right], maxRight)
            pondedWater = Math.min(maxLeft, maxRight) - height[right]
        } else {
            left++;
            maxLeft = Math.max(height[left], maxLeft);
            pondedWater = Math.min(maxLeft, maxRight) - height[left]
        }
        totalWater += Math.max(pondedWater, 0)
    }

    return totalWater;
}; 