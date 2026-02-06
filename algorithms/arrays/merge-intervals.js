/**
 * Problem: Merge Intervals
 *
 * Description:
 * Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping
 * intervals, and return an array of the non-overlapping intervals that cover all the intervals
 * in the input.
 *
 * Algorithm Logic (Sort and Merge):
 * This solution uses a sorting approach followed by linear merging:
 *
 * KEY INSIGHT: After sorting intervals by start time, we only need to check if the current
 * interval overlaps with the last merged interval. If it does, extend the end time.
 * If not, add it as a new interval.
 *
 * STEPS:
 * 1. Handle edge case: return empty array if input is empty
 * 2. Sort intervals by start time to process them in order
 * 3. Initialize result with first interval
 * 4. For each subsequent interval:
 *    - Check if it overlaps with the last merged interval
 *    - If overlapping: merge by extending the end time
 *    - If not overlapping: add as new interval to result
 * 5. Return merged intervals
 *
 * Example with intervals: [[1,3],[2,6],[8,10],[15,18]]
 *
 * Step-by-step execution:
 * Sorted: [[1,3],[2,6],[8,10],[15,18]] (already sorted)
 * lastMerged = [[1,3]]
 *
 * Process [2,6]: 2 <= 3 (overlap), merge to [1,6]
 * lastMerged = [[1,6]]
 *
 * Process [8,10]: 8 > 6 (no overlap), add new interval
 * lastMerged = [[1,6],[8,10]]
 *
 * Process [15,18]: 15 > 10 (no overlap), add new interval
 * lastMerged = [[1,6],[8,10],[15,18]]
 *
 * Result: [[1,6],[8,10],[15,18]]
 *
 * Overlap detection:
 * Two intervals [a,b] and [c,d] overlap if: a <= d and c <= b
 * Since we sort by start time, we only need to check: c <= b (current start <= last end)
 *
 * Alternative: Union-Find or sweep line algorithms:
 * Both have higher complexity. Sorting approach is optimal for this problem.
 *
 * Time Complexity: O(n log n) - dominated by sorting step
 * Space Complexity: O(n) - for the result array (or O(log n) if not counting output)
 *
 * Tags: #intervals #sorting #greedy #medium
 * URL: https://leetcode.com/problems/merge-intervals/
 */

class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    if (intervals.length === 0) return [];

    // Sort intervals by start time for proper processing order
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    let lastMerged = [sortedIntervals[0]];

    // Process each interval starting from the second one
    for (let i = 1; i < sortedIntervals.length; i++) {
      let last = lastMerged[lastMerged.length - 1];
      let [start, end] = sortedIntervals[i];

      // Check if current interval overlaps with the last merged interval
      if (start <= last[1]) {
        // Overlapping: merge by extending the end time
        last[1] = Math.max(end, last[1]);
      } else {
        // Non-overlapping: add as new interval
        lastMerged.push([start, end]);
      }
    }

    return lastMerged;
  }
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Standard example [[1,3],[2,6],[8,10],[15,18]]
  let result1 = solution.merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]);
  let expected1 = [
    [1, 6],
    [8, 10],
    [15, 18],
  ];
  console.assert(
    JSON.stringify(result1) === JSON.stringify(expected1),
    'Test 1 failed: Expected ' +
      JSON.stringify(expected1) +
      ', got ' +
      JSON.stringify(result1),
  );

  // Test case 2: All intervals merge [[1,4],[4,5]]
  let result2 = solution.merge([
    [1, 4],
    [4, 5],
  ]);
  let expected2 = [[1, 5]];
  console.assert(
    JSON.stringify(result2) === JSON.stringify(expected2),
    'Test 2 failed: Expected ' +
      JSON.stringify(expected2) +
      ', got ' +
      JSON.stringify(result2),
  );

  // Test case 3: Empty array []
  let result3 = solution.merge([]);
  let expected3 = [];
  console.assert(
    JSON.stringify(result3) === JSON.stringify(expected3),
    'Test 3 failed: Expected ' +
      JSON.stringify(expected3) +
      ', got ' +
      JSON.stringify(result3),
  );

  // Test case 4: Single interval [[1,4]]
  let result4 = solution.merge([[1, 4]]);
  let expected4 = [[1, 4]];
  console.assert(
    JSON.stringify(result4) === JSON.stringify(expected4),
    'Test 4 failed: Expected ' +
      JSON.stringify(expected4) +
      ', got ' +
      JSON.stringify(result4),
  );

  // Test case 5: No overlapping intervals [[1,2],[3,4],[5,6]]
  let result5 = solution.merge([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
  let expected5 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  console.assert(
    JSON.stringify(result5) === JSON.stringify(expected5),
    'Test 5 failed: Expected ' +
      JSON.stringify(expected5) +
      ', got ' +
      JSON.stringify(result5),
  );

  // Test case 6: Unsorted input [[1,4],[0,2],[3,5]]
  let result6 = solution.merge([
    [1, 4],
    [0, 2],
    [3, 5],
  ]);
  let expected6 = [[0, 5]];
  console.assert(
    JSON.stringify(result6) === JSON.stringify(expected6),
    'Test 6 failed: Expected ' +
      JSON.stringify(expected6) +
      ', got ' +
      JSON.stringify(result6),
  );

  // Test case 7: Complex overlapping [[1,3],[2,6],[8,10],[9,12],[15,18]]
  let result7 = solution.merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [9, 12],
    [15, 18],
  ]);
  let expected7 = [
    [1, 6],
    [8, 12],
    [15, 18],
  ];
  console.assert(
    JSON.stringify(result7) === JSON.stringify(expected7),
    'Test 7 failed: Expected ' +
      JSON.stringify(expected7) +
      ', got ' +
      JSON.stringify(result7),
  );

  // Test case 8: All intervals merge into one [[1,10],[2,6],[8,10],[15,18],[16,20]]
  let result8 = solution.merge([
    [1, 10],
    [2, 6],
    [8, 10],
    [15, 18],
    [16, 20],
  ]);
  let expected8 = [
    [1, 10],
    [15, 20],
  ];
  console.assert(
    JSON.stringify(result8) === JSON.stringify(expected8),
    'Test 8 failed: Expected ' +
      JSON.stringify(expected8) +
      ', got ' +
      JSON.stringify(result8),
  );

  // Test case 9: Identical intervals [[1,3],[1,3],[1,3]]
  let result9 = solution.merge([
    [1, 3],
    [1, 3],
    [1, 3],
  ]);
  let expected9 = [[1, 3]];
  console.assert(
    JSON.stringify(result9) === JSON.stringify(expected9),
    'Test 9 failed: Expected ' +
      JSON.stringify(expected9) +
      ', got ' +
      JSON.stringify(result9),
  );

  console.log('✅ All Merge Intervals test cases passed!');
}

// Run tests
test();

module.exports = { Solution };
