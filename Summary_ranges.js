// Leetcode 228
// You are given a sorted unique integer numsay nums.
// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the numsay exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b
const Summary_ranges = (nums) => {
  let new_nums = [];
  let index = 0
  let str;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] != nums[i] + 1) {
        if (index === i) {
            str = `${nums[index]}` // handle single element case
        } else {
            str = `${nums[index]}->${nums[i]}`
        }
        console.log(str)
        new_nums.push(str)
        index = i + 1;
    }
  }
  return new_nums
};

console.log(Summary_ranges([0,2,3,4,6,8,9]));
// console.log(Summary_ranges([0,1,2,4,5,7]));