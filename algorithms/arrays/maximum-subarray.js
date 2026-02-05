/**
 * Problem: Maximum Subarray
 *
 * Description:
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Algorithm Logic (Kadane's Algorithm):
 * This solution uses Kadane's algorithm, a dynamic programming approach:
 *
 * KEY INSIGHT: At each position, decide whether to extend the existing subarray
 * or start a new subarray from the current element. If the current sum becomes
 * negative, it's better to start fresh from the current element.
 *
 * STEPS:
 * 1. Initialize currSum and maxSum with the first element
 * 2. For each subsequent element:
 *    - Decide: extend current subarray OR start new subarray
 *    - currSum = max(current_element, currSum + current_element)
 *    - Update maxSum if currSum is larger
 * 3. Return the maximum sum found
 *
 * Example with array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 *
 * Step-by-step execution:
 * i=0: currSum=-2, maxSum=-2
 * i=1: currSum=max(1, -2+1)=1, maxSum=max(1, -2)=1
 * i=2: currSum=max(-3, 1-3)=-2, maxSum=max(-2, 1)=1
 * i=3: currSum=max(4, -2+4)=4, maxSum=max(4, 1)=4
 * i=4: currSum=max(-1, 4-1)=3, maxSum=max(3, 4)=4
 * i=5: currSum=max(2, 3+2)=5, maxSum=max(5, 4)=5
 * i=6: currSum=max(1, 5+1)=6, maxSum=max(6, 5)=6
 * i=7: currSum=max(-5, 6-5)=1, maxSum=max(1, 6)=6
 * i=8: currSum=max(4, 1+4)=5, maxSum=max(5, 6)=6
 * Result: 6 (subarray [4, -1, 2, 1])
 *
 * Why this works:
 * - If currSum becomes negative, starting fresh is better
 * - We track the maximum sum seen so far as we scan left to right
 * - This ensures we find the optimal contiguous subarray
 *
 * Alternative: Brute force approach checking all subarrays:
 * Check every possible subarray O(n²) and calculate sum O(n). Much slower O(n³).
 * Optimized brute force can be O(n²) but still slower than Kadane's O(n).
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only use two variables
 *
 * Tags: #dynamic-programming #array #kadane-algorithm #medium
 * URL: https://leetcode.com/problems/maximum-subarray/
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    // Initialize with first element (handles single element case)
    let currSum = nums[0];
    let maxSum = nums[0];

    // Scan through remaining elements
    for (let i = 1; i < nums.length; i++) {
      // Key decision: extend current subarray or start new one
      // If currSum + nums[i] < nums[i], then currSum is negative
      // and we should start fresh from nums[i]
      currSum = Math.max(nums[i], currSum + nums[i]);

      // Update maximum sum if current is better
      maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
  }
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Standard example [-2,1,-3,4,-1,2,1,-5,4]
  let result1 = solution.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  console.assert(result1 === 6, 'Test 1 failed: Expected 6, got ' + result1);

  // Test case 2: Single element [1]
  let result2 = solution.maxSubArray([1]);
  console.assert(result2 === 1, 'Test 2 failed: Expected 1, got ' + result2);

  // Test case 3: All positive [1,2,3,4,5]
  let result3 = solution.maxSubArray([1, 2, 3, 4, 5]);
  console.assert(result3 === 15, 'Test 3 failed: Expected 15, got ' + result3);

  // Test case 4: All negative [-3,-2,-1,-5]
  let result4 = solution.maxSubArray([-3, -2, -1, -5]);
  console.assert(result4 === -1, 'Test 4 failed: Expected -1, got ' + result4);

  // Test case 5: Mix with zero [5,-3,0,2,-1,1]
  let result5 = solution.maxSubArray([5, -3, 0, 2, -1, 1]);
  console.assert(result5 === 5, 'Test 5 failed: Expected 5, got ' + result5);

  // Test case 6: Two elements [-1,2]
  let result6 = solution.maxSubArray([-1, 2]);
  console.assert(result6 === 2, 'Test 6 failed: Expected 2, got ' + result6);

  // Test case 7: Larger array with clear maximum subarray
  let result7 = solution.maxSubArray([-1, -2, 3, 4, -1, 2, -5, 4]);
  console.assert(result7 === 8, 'Test 7 failed: Expected 8, got ' + result7);

  // Test case 8: Alternating positive/negative [1,-1,1,-1,1]
  let result8 = solution.maxSubArray([1, -1, 1, -1, 1]);
  console.assert(result8 === 1, 'Test 8 failed: Expected 1, got ' + result8);

  // Test case 9: Single negative element [-5]
  let result9 = solution.maxSubArray([-5]);
  console.assert(result9 === -5, 'Test 9 failed: Expected -5, got ' + result9);

  console.log('✅ All Maximum Subarray test cases passed!');
}

// Run tests
test();

module.exports = { Solution };
