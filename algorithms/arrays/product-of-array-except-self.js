/**
 * Problem: Product of Array Except Self
 *
 * Description:
 * Given an integer array nums, return an array answer such that answer[i] is equal to
 * the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operator.
 *
 * Algorithm Logic:
 * This solution uses a two-pass approach with prefix and postfix products:
 *
 * PASS 1 (Left to Right - Prefix products):
 * - For each position i, store the product of ALL elements to the LEFT of i
 * - output[i] = product of nums[0] * nums[1] * ... * nums[i-1]
 * - We use a running 'prefix' variable that accumulates the product as we go
 *
 * PASS 2 (Right to Left - Postfix products):
 * - For each position i, multiply the existing value by the product of ALL elements to the RIGHT of i
 * - output[i] = output[i] * (product of nums[i+1] * nums[i+2] * ... * nums[n-1])
 * - We use a running 'postfix' variable that accumulates the product as we go backwards
 *
 * Example with nums = [1,2,3,4]:
 * After Pass 1: [1, 1, 2, 6]  (prefix products: [1, 1*1, 1*2, 1*2*3])
 * postfix starts at 1, then we multiply:
 * i=3: output[3] = 6 * 1 = 6, postfix = 4
 * i=2: output[2] = 2 * 4 = 8, postfix = 12
 * i=1: output[1] = 1 * 12 = 12, postfix = 24
 * i=0: output[0] = 1 * 24 = 24, postfix = 24
 * After Pass 2: [24, 12, 8, 6] (multiply by postfix: [24*1, 12*1, 4*2, 6*1])
 *
 * Time Complexity: O(n) - two passes through the array
 * Space Complexity: O(1) - only using constant extra space (output array doesn't count)
 *
 * Tags: #array #prefix-sum #two-pass #medium
 * URL: https://leetcode.com/problems/product-of-array-except-self/
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    let prefix = 1;
    let postfix = 1;
    let output = [];

    // Pass 1: Fill output with prefix products (product of all elements to the left)
    for (let i = 0; i < nums.length; i++) {
      output[i] = prefix;
      prefix = prefix * nums[i];
    }

    // Pass 2: Multiply by postfix products (product of all elements to the right)
    for (let i = nums.length - 1; i >= 0; i--) {
      output[i] = postfix * output[i];
      postfix = postfix * nums[i];
    }

    return output;
  }
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Example case
  let nums1 = [1, 2, 3, 4];
  let result1 = solution.productExceptSelf(nums1);
  console.assert(
    JSON.stringify(result1) === JSON.stringify([24, 12, 8, 6]),
    'Test 1 failed: Expected [24,12,8,6]',
  );

  // Test case 2: With zeros
  let nums2 = [1, 2, 3, 4, 0];
  let result2 = solution.productExceptSelf(nums2);
  console.assert(
    JSON.stringify(result2) === JSON.stringify([0, 0, 0, 0, 24]),
    'Test 2 failed: Expected [0,0,0,0,24]',
  );

  // Test case 3: Multiple zeros
  let nums3 = [0, 0, 2, 3];
  let result3 = solution.productExceptSelf(nums3);
  console.assert(
    JSON.stringify(result3) === JSON.stringify([0, 0, 0, 0]),
    'Test 3 failed: Expected [0,0,0,0]',
  );

  // Test case 4: Negative numbers
  let nums4 = [-1, 1, 0, -3, 3];
  let result4 = solution.productExceptSelf(nums4);
  console.assert(
    JSON.stringify(result4) === JSON.stringify([0, 0, 9, 0, 0]),
    'Test 4 failed: Expected [0,0,9,0,0]',
  );

  // Test case 5: Two elements
  let nums5 = [1, 2];
  let result5 = solution.productExceptSelf(nums5);
  console.assert(
    JSON.stringify(result5) === JSON.stringify([2, 1]),
    'Test 5 failed: Expected [2,1]',
  );

  console.log('✅ All Product of Array Except Self test cases passed!');
}

// Run tests
test();

module.exports = Solution;
