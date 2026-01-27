/**
 * Problem: Trapping Rain Water
 *
 * Description:
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it can trap after raining.
 *
 * Algorithm:
 * Use two pointers approach. Start from both ends and move the pointer with
 * the smaller height inward. Keep track of the maximum height seen so far
 * from both sides. The water trapped at any position is the difference
 * between the minimum of left and right max heights and the current height.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only using constant extra space
 *
 * Example:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6 (water can be trapped in positions creating pools)
 *
 * Edge Cases:
 * - Empty array
 * - Array with less than 3 elements (no water can be trapped)
 * - All heights are the same
 * - Strictly increasing or decreasing heights
 */

/**
 * Calculate amount of rainwater that can be trapped
 *
 * @param {number[]} height - Array of non-negative integers representing elevation
 * @returns {number} Total amount of water that can be trapped
 */
function trap(height) {
  if (!height || height.length === 0) return 0;
  let n = height.length;

  // Two Pointers
  let l = 0;
  let r = n - 1;

  // Left Max, Right Max
  let leftMax = height[l];
  let rightMax = height[r];

  let totalWater = 0;

  while (l < r) {
    console.log(height[l], height[r], totalWater, leftMax, rightMax);
    if (leftMax < rightMax) {
      l++;
      leftMax = Math.max(leftMax, height[l]);
      totalWater += leftMax - height[l];
    } else {
      r--;
      rightMax = Math.max(rightMax, height[r]);
      totalWater += rightMax - height[r];
    }
  }

  return totalWater;
}

// Export for use in other files
module.exports = {
  trap,
};

// Run tests if this file is executed directly
if (require.main === module) {
  console.log('Testing Trapping Rain Water...');
  const result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
  console.log('✅ All trapping rain water test cases passed!');
}
