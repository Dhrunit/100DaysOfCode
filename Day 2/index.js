// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  target = parseFloat(target);
  const complimentsObj = {};
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - parseFloat(nums[i]);
    if (complimentsObj[compliment] !== undefined) {
      return [complimentsObj[compliment], i];
    }
    complimentsObj[nums[i]] = i;
  }
  return [];
};
