// 189. Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// const Rotated = (nums, k) => {
//   let lastNo;
//   for (let j = 0; j < k; j++) {
//       lastNo = nums[nums.length - 1]; 
//     for (let i = nums.length - 1; i > 0; i--) {
//       nums[i] = nums[i - 1];
//     }
//     nums[0] = lastNo;
//   }
// };

const Rotated = (nums, k) => {
  Reverse(nums, nums.length - k, nums.length-1)
  Reverse(nums,0 ,nums.length - k - 1)
  Reverse(nums,0 ,nums.length -1)
};

const Reverse = (arr, startIndex, endIndex)=>{
    for(let i=startIndex;i<endIndex;i++){
        let temp = arr[i];
        arr[i] = arr[endIndex];
        arr[endIndex--] = temp;
    }
}

var nums = [1, 2, 3, 4, 5, 6, 7]
Rotated(nums, 3);
console.log(nums);  
