/**
 * Problem: Two Sum
 *
 * Description:
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target. You may assume that each input
 * would have exactly one solution, and you may not use the same element twice.
 *
 * Algorithm:
 * Use a Map to store numbers we've seen and their indices. For each number,
 * check if (target - current_number) exists in the Map.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(n) - Map storage
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1] (because nums[0] + nums[1] = 2 + 7 = 9)
 *
 * Edge Cases:
 * - Array with exactly 2 elements
 * - Negative numbers
 * - Zero values
 * - Large numbers
 */

/**
 * Find two numbers in array that sum to target
 *
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} Indices of the two numbers that sum to target
 * @throws {Error} If no solution exists
 */
function twoSum(nums, target) {
  // Map to store value -> index mapping
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if complement exists in our Map
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    // Store current number and its index
    seen.set(nums[i], i);
  }

  // No solution found
  throw new Error('No two sum solution exists');
}

/**
 * Brute force solution - check all pairs
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
function twoSumBruteForce(nums, target) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  throw new Error('No two sum solution exists');
}

/**
 * Test cases for two sum algorithm
 */
function testTwoSum() {
  console.log('Testing Two Sum...');

  // Test case 1: Normal case
  let result = twoSum([2, 7, 11, 15], 9);
  console.assert(
    JSON.stringify(result) === JSON.stringify([0, 1]),
    'Test case 1 failed',
  );

  // Test case 2: Numbers at end of array
  result = twoSum([3, 2, 4], 6);
  console.assert(
    JSON.stringify(result) === JSON.stringify([1, 2]),
    'Test case 2 failed',
  );

  // Test case 3: Same number twice
  result = twoSum([3, 3], 6);
  console.assert(
    JSON.stringify(result) === JSON.stringify([0, 1]),
    'Test case 3 failed',
  );

  // Test case 4: Negative numbers
  result = twoSum([-1, -2, -3, -4, -5], -8);
  console.assert(
    JSON.stringify(result) === JSON.stringify([2, 4]),
    'Test case 4 failed',
  );

  // Test case 5: Zero values
  result = twoSum([0, 4, 3, 0], 0);
  console.assert(
    JSON.stringify(result) === JSON.stringify([0, 3]),
    'Test case 5 failed',
  );

  // Test brute force as well
  result = twoSumBruteForce([2, 7, 11, 15], 9);
  console.assert(
    JSON.stringify(result) === JSON.stringify([0, 1]),
    'Brute force test failed',
  );

  console.log('✅ All two sum test cases passed!');
}

// Export for use in other files
module.exports = {
  twoSum,
  twoSumBruteForce,
  testTwoSum,
};

// Run tests if this file is executed directly
if (require.main === module) {
  testTwoSum();
}
