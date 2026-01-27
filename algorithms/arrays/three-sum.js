/**
 * Problem: 3Sum
 *
 * Description:
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Algorithm:
 * 1. Sort the array to enable two-pointer technique and easy duplicate handling
 * 2. For each element as the first number (base), use two pointers to find pairs that sum to -base
 * 3. Skip duplicates at all levels to avoid duplicate triplets
 * 4. Use three pointers: i (base), left (i+1), right (end)
 *
 * Time Complexity: O(n²) - outer loop O(n) * inner two-pointer O(n)
 * Space Complexity: O(1) - excluding output array, only using pointers
 *
 * Example:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation: nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0
 *
 * Edge Cases:
 * - Array with less than 3 elements
 * - All positive or all negative numbers
 * - Array with all zeros
 * - No valid triplets
 * - Multiple duplicate numbers
 */

/**
 * Find all unique triplets in array that sum to zero
 *
 * @param {number[]} nums - Array of integers
 * @returns {number[][]} Array of triplets that sum to zero
 */
function threeSum(nums) {
  const result = [];

  // Need at least 3 numbers for a triplet
  if (nums.length < 3) {
    return result;
  }

  // Sort array to enable two-pointer technique and duplicate handling
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    const base = nums[i];
    const prevBase = i > 0 ? nums[i - 1] : null;
    // Skip duplicate bases to avoid duplicate triplets
    if (i > 0 && base === prevBase) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = base + nums[left] + nums[right];

      if (currentSum === 0) {
        // Found a valid triplet
        result.push([base, nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicates for left pointer
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // Skip duplicates for right pointer
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (currentSum > 0) {
        // Sum too large, move right pointer left
        right--;
      } else {
        // Sum too small, move left pointer right
        left++;
      }
    }
  }

  return result;
}

/**
 * Helper function to compare arrays for testing
 *
 * @param {number[][]} arr1 - First array of arrays
 * @param {number[][]} arr2 - Second array of arrays
 * @returns {boolean} True if arrays contain same triplets (order independent)
 */
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  // Sort both arrays and their sub-arrays for comparison
  const sorted1 = arr1
    .map((triplet) => [...triplet].sort((a, b) => a - b))
    .sort();
  const sorted2 = arr2
    .map((triplet) => [...triplet].sort((a, b) => a - b))
    .sort();

  return JSON.stringify(sorted1) === JSON.stringify(sorted2);
}

/**
 * Test function for 3Sum
 */
function testThreeSum() {
  console.log('Testing 3Sum...');

  let result, expected;

  // Test case 1: Basic case with multiple triplets
  result = threeSum([-1, 0, 1, 2, -1, -4]);
  expected = [
    [-1, -1, 2],
    [-1, 0, 1],
  ];
  console.assert(arraysEqual(result, expected), 'Test case 1 failed');

  // Test case 2: No valid triplets
  result = threeSum([0, 1, 1]);
  expected = [];
  console.assert(arraysEqual(result, expected), 'Test case 2 failed');

  // Test case 3: All zeros
  result = threeSum([0, 0, 0]);
  expected = [[0, 0, 0]];
  console.assert(arraysEqual(result, expected), 'Test case 3 failed');

  // Test case 4: Array too small
  result = threeSum([1, 2]);
  expected = [];
  console.assert(arraysEqual(result, expected), 'Test case 4 failed');

  // Test case 5: All positive numbers
  result = threeSum([1, 2, 3, 4]);
  expected = [];
  console.assert(arraysEqual(result, expected), 'Test case 5 failed');

  // Test case 6: All negative numbers
  result = threeSum([-4, -3, -2, -1]);
  expected = [];
  console.assert(arraysEqual(result, expected), 'Test case 6 failed');

  // Test case 7: Multiple duplicates
  result = threeSum([-2, 0, 1, 1, 2]);
  expected = [
    [-2, 0, 2],
    [-2, 1, 1],
  ];
  console.assert(arraysEqual(result, expected), 'Test case 7 failed');

  // Test case 8: Large numbers
  result = threeSum([-4, -1, -1, 0, 1, 2]);
  expected = [
    [-1, -1, 2],
    [-1, 0, 1],
  ];
  console.assert(arraysEqual(result, expected), 'Test case 8 failed');

  // Test case 9: Single valid triplet
  result = threeSum([-1, 0, 1]);
  expected = [[-1, 0, 1]];
  console.assert(arraysEqual(result, expected), 'Test case 9 failed');

  // Test case 10: Many duplicates
  result = threeSum([0, 0, 0, 0]);
  expected = [[0, 0, 0]];
  console.assert(arraysEqual(result, expected), 'Test case 10 failed');

  console.log('✅ All 3Sum test cases passed!');
}

// Export for use in other files
module.exports = {
  threeSum,
  testThreeSum,
  arraysEqual,
};

// Run tests if this file is executed directly
if (require.main === module) {
  testThreeSum();
}
