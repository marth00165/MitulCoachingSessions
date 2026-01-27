/**
 * Problem: Binary Search
 *
 * Description:
 * Given a sorted array of integers and a target value, return the index of the
 * target if found, or -1 if not found. Implement the classic binary search algorithm.
 *
 * Algorithm:
 * Use divide and conquer approach. Compare target with middle element, then
 * search left or right half based on comparison.
 *
 * Time Complexity: O(log n) - halve search space each iteration
 * Space Complexity: O(1) - constant extra space (iterative version)
 *
 * Example:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4 (9 is at index 4)
 *
 * Edge Cases:
 * - Empty array
 * - Single element array
 * - Target not in array
 * - Target at boundaries (first/last element)
 */

/**
 * Binary search implementation (iterative)
 *
 * @param {number[]} nums - Sorted array of integers
 * @param {number} target - Value to search for
 * @returns {number} Index of target if found, -1 otherwise
 */
function binarySearch(nums, target) {
  if (!nums || nums.length === 0) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2); // Avoid overflow

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/**
 * Binary search implementation (recursive)
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(log n) - recursion stack
 */
function binarySearchRecursive(nums, target, left = 0, right = null) {
  if (!nums || nums.length === 0) {
    return -1;
  }

  if (right === null) {
    right = nums.length - 1;
  }

  if (left > right) {
    return -1;
  }

  const mid = Math.floor(left + (right - left) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return binarySearchRecursive(nums, target, mid + 1, right);
  } else {
    return binarySearchRecursive(nums, target, left, mid - 1);
  }
}

/**
 * Test cases for binary search algorithms
 */
function testBinarySearch() {
  console.log('Testing Binary Search...');

  // Test array
  const nums = [-1, 0, 3, 5, 9, 12];

  // Test case 1: Target exists in middle
  console.assert(binarySearch(nums, 9) === 4, 'Iterative test case 1 failed');
  console.assert(
    binarySearchRecursive(nums, 9) === 4,
    'Recursive test case 1 failed',
  );

  // Test case 2: Target at beginning
  console.assert(binarySearch(nums, -1) === 0, 'Iterative test case 2 failed');
  console.assert(
    binarySearchRecursive(nums, -1) === 0,
    'Recursive test case 2 failed',
  );

  // Test case 3: Target at end
  console.assert(binarySearch(nums, 12) === 5, 'Iterative test case 3 failed');
  console.assert(
    binarySearchRecursive(nums, 12) === 5,
    'Recursive test case 3 failed',
  );

  // Test case 4: Target doesn't exist
  console.assert(binarySearch(nums, 2) === -1, 'Iterative test case 4 failed');
  console.assert(
    binarySearchRecursive(nums, 2) === -1,
    'Recursive test case 4 failed',
  );

  // Test case 5: Empty array
  console.assert(binarySearch([], 1) === -1, 'Iterative test case 5 failed');
  console.assert(
    binarySearchRecursive([], 1) === -1,
    'Recursive test case 5 failed',
  );

  // Test case 6: Single element - found
  console.assert(binarySearch([5], 5) === 0, 'Iterative test case 6 failed');
  console.assert(
    binarySearchRecursive([5], 5) === 0,
    'Recursive test case 6 failed',
  );

  // Test case 7: Single element - not found
  console.assert(binarySearch([5], 3) === -1, 'Iterative test case 7 failed');
  console.assert(
    binarySearchRecursive([5], 3) === -1,
    'Recursive test case 7 failed',
  );

  console.log('✅ All binary search test cases passed!');
}

// Export for use in other files
module.exports = {
  binarySearch,
  binarySearchRecursive,
  testBinarySearch,
};

// Run tests if this file is executed directly
if (require.main === module) {
  testBinarySearch();
}
