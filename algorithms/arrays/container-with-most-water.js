/**
 * Problem: Container With Most Water
 *
 * Description:
 * You are given an integer array height of length n. There are n vertical lines drawn
 * such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container that can hold the most water.
 * Return the maximum amount of water a container can store.
 *
 * Algorithm:
 * Use two pointers approach (left and right). Calculate area with current pointers and move
 * the pointer with smaller height inward. This ensures we don't miss the optimal solution.
 *
 * Time Complexity: O(n) - single pass with two pointers
 * Space Complexity: O(1) - only using constant extra space
 *
 * Example:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49 (between indices 1 and 8: min(8,7) * (8-1) = 7 * 7 = 49)
 *
 * Tags: #two-pointers #array #greedy #medium
 * URL: https://leetcode.com/problems/container-with-most-water/
 */

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxWater = 0;

    while (left < right) {
      let leftWall = heights[left];
      let rightWall = heights[right];

      let height = Math.min(leftWall, rightWall);
      let width = right - left;

      let area = height * width;

      maxWater = Math.max(maxWater, area);

      if (height === leftWall) {
        left++;
      }
      if (height === rightWall) {
        right--;
      }
    }
    return maxWater;
  }
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Example case
  let heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.assert(
    solution.maxArea(heights1) === 49,
    'Test 1 failed: Expected 49',
  );

  // Test case 2: Simple case
  let heights2 = [1, 1];
  console.assert(solution.maxArea(heights2) === 1, 'Test 2 failed: Expected 1');

  // Test case 3: Decreasing heights
  let heights3 = [4, 3, 2, 1, 4];
  console.assert(
    solution.maxArea(heights3) === 16,
    'Test 3 failed: Expected 16',
  );

  // Test case 4: Increasing then decreasing
  let heights4 = [1, 2, 1];
  console.assert(solution.maxArea(heights4) === 2, 'Test 4 failed: Expected 2');

  // Test case 5: All same height
  let heights5 = [3, 3, 3, 3];
  console.assert(solution.maxArea(heights5) === 9, 'Test 5 failed: Expected 9');

  console.log('✅ All Container With Most Water test cases passed!');
}

// Run tests
test();

module.exports = Solution;
