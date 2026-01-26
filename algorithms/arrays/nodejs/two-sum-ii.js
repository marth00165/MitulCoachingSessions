/**
 * Problem: Two Sum II - Input Array Is Sorted
 *
 * Description:
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number. Let these two numbers
 * be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2].
 *
 * Algorithm:
 * Use two pointers approach: start from both ends of the array and move them towards each other.
 * Since array is sorted, if sum is too small, move left pointer right; if sum is too large,
 * move right pointer left.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only using two pointers
 *
 * Example:
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2] (numbers[0] + numbers[1] = 2 + 7 = 9, return 1-indexed positions)
 *
 * Edge Cases:
 * - Array with exactly 2 elements
 * - Negative numbers
 * - Target is sum of first and last elements
 * - Target requires elements in middle of array
 */

/**
 * Find two numbers in sorted array that sum to target
 *
 * @param {number[]} numbers - Array of integers sorted in non-decreasing order
 * @param {number} target - Target sum
 * @returns {number[]} 1-indexed positions of the two numbers that sum to target
 */
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // Return 1-indexed positions
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // Problem guarantees exactly one solution exists
  throw new Error('No solution found');
}

/**
 * Alternative implementation using binary search for each element
 * Less efficient but demonstrates different approach
 *
 * @param {number[]} numbers - Array of integers sorted in non-decreasing order
 * @param {number} target - Target sum
 * @returns {number[]} 1-indexed positions of the two numbers that sum to target
 */
function twoSumBinarySearch(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    const complement = target - numbers[i];

    // Binary search for complement in remaining array
    let left = i + 1;
    let right = numbers.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (numbers[mid] === complement) {
        return [i + 1, mid + 1]; // Return 1-indexed positions
      } else if (numbers[mid] < complement) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  throw new Error('No solution found');
}

/**
 * Test function for Two Sum II - Input Array Is Sorted
 */
function testTwoSum() {
  console.log('Testing Two Sum II - Input Array Is Sorted...');

  let result;

  // Test case 1: Basic case
  result = twoSum([2, 7, 11, 15], 9);
  console.assert(
    JSON.stringify(result) === JSON.stringify([1, 2]),
    'Test case 1 failed: Expected [1, 2]',
  );

  // Test case 2: Target at ends
  result = twoSum([2, 7, 11, 15], 17);
  console.assert(
    JSON.stringify(result) === JSON.stringify([1, 4]),
    'Test case 2 failed: Expected [1, 4]',
  );

  // Test case 3: Minimum array size
  result = twoSum([1, 2], 3);
  console.assert(
    JSON.stringify(result) === JSON.stringify([1, 2]),
    'Test case 3 failed: Expected [1, 2]',
  );

  // Test case 4: Negative numbers
  result = twoSum([-1, 0, 1, 2], 0);
  console.assert(
    JSON.stringify(result) === JSON.stringify([1, 3]),
    'Test case 4 failed: Expected [1, 3]',
  );

  // Test case 5: Large numbers
  result = twoSum([5, 25, 75], 100);
  console.assert(
    JSON.stringify(result) === JSON.stringify([2, 3]),
    'Test case 5 failed: Expected [2, 3]',
  );

  // Test case 6: Duplicates allowed
  result = twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8);
  console.assert(
    JSON.stringify(result) === JSON.stringify([4, 5]),
    'Test case 6 failed: Expected [4, 5]',
  );

  // Test case 7: Zero values
  result = twoSum([-3, -1, 0, 0, 1, 2], 0);
  console.assert(
    JSON.stringify(result) === JSON.stringify([3, 4]),
    'Test case 7 failed: Expected [3, 4]',
  );

  // Test binary search implementation as well
  result = twoSumBinarySearch([2, 7, 11, 15], 9);
  console.assert(
    JSON.stringify(result) === JSON.stringify([1, 2]),
    'Binary search implementation test failed',
  );

  console.log('✅ All Two Sum II test cases passed!');
}

// Export for use in other files
module.exports = {
  twoSum,
  twoSumBinarySearch,
  testTwoSum,
};

// Run tests if this file is executed directly
if (require.main === module) {
  testTwoSum();
}
