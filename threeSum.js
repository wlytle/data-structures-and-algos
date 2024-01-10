/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    nums.forEach((curr, index) => {
        if (index > 0 && curr === nums[index - 1]) {
            return;
        }

        left = index + 1;
        right = nums.length - 1;

        while (left < right) {
            const currSum = curr + nums[left] + nums[right];
            if (currSum > 0) {
                right--;
            } else if (currSum < 0) {
                left++;
            } else {
                result.push([curr, nums[left], nums[right]])
                left++;
                while (nums[left] === nums[left - 1]) {
                    left++;
                }
            }
        }
    })

    return result;
}

// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     let result = [];

//     nums.forEach((curr, idx) => {
//         if (idx > 0 && curr === nums[idx - 1]) {
//             return;
//         }
//         let left = idx + 1;
//         let right = nums.length - 1;

//         while(left < right) {
//             let currSum = curr + nums[left] + nums[right];
//             if (currSum > 0) {
//                 right--;
//             } else if (currSum < 0) {
//                 left++;
//             } else {
//                 result.push([curr, nums[left], nums[right]]);
//                 left++;
//                 while (nums[left] === nums[left - 1] && left < right){
//                     left++;
//                 }
//             }
//         }
//     })
//     return result;
// }

console.log(threeSum([-1,0,1,2,-1,-4]));
// [-4,-1,-1,0,1,2]