/**
 * Problem: Longest Substring Without Repeating Characters
 *
 * Description:
 * Given a string s, find the length of the longest substring without repeating characters.
 * A substring is a contiguous sequence of characters within a string.
 *
 * Algorithm Logic (Sliding Window):
 * This solution uses a sliding window approach with a HashMap to track character positions:
 *
 * KEY INSIGHT: When we find a duplicate character, we need to move our left pointer
 * to AFTER the previous occurrence of that character to ensure no duplicates.
 *
 * STEPS:
 * 1. Use two pointers (left, right) to maintain a window
 * 2. Expand the window by moving 'right' pointer
 * 3. Use a Map to store the most recent index of each character
 * 4. When we find a duplicate character:
 *    - Check if it's within our current window (>= left)
 *    - If yes, move left pointer to (duplicate_index + 1)
 * 5. Update max length and continue
 *
 * Example with s = "abcabcbb":
 * - Window "abc" (length 3) - no duplicates
 * - Hit duplicate 'a', move left to after first 'a'
 * - Window "bca" → "cab" → "abc" (all length 3)
 * - Hit duplicate 'b', move left accordingly
 * - Final answer: 3
 *
 * Time Complexity: O(n) - each character visited at most twice
 * Space Complexity: O(min(m,n)) - m is size of character set
 *
 * Tags: #sliding-window #hash-map #string #medium
 * URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    if (s.length === 1) return 1;
    let seen = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
      let letter = s[right];

      // If we've seen this character and it's in our current window
      if (seen.has(letter) && seen.get(letter) >= left) {
        left = seen.get(letter) + 1; // Move left to after the duplicate
      }

      // Calculate current window length and update max
      let strLen = right - left + 1;
      maxLen = Math.max(strLen, maxLen);

      // Update the most recent position of this character
      seen.set(letter, right);
    }

    return maxLen;
  }
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Example case
  let s1 = 'abcabcbb';
  console.assert(
    solution.lengthOfLongestSubstring(s1) === 3,
    'Test 1 failed: Expected 3 (abc)',
  );

  // Test case 2: All same characters
  let s2 = 'bbbbb';
  console.assert(
    solution.lengthOfLongestSubstring(s2) === 1,
    'Test 2 failed: Expected 1 (b)',
  );

  // Test case 3: No repeating characters
  let s3 = 'pwwkew';
  console.assert(
    solution.lengthOfLongestSubstring(s3) === 3,
    'Test 3 failed: Expected 3 (wke)',
  );

  // Test case 4: Empty string
  let s4 = '';
  console.assert(
    solution.lengthOfLongestSubstring(s4) === 0,
    'Test 4 failed: Expected 0',
  );

  // Test case 5: Single character
  let s5 = 'a';
  console.assert(
    solution.lengthOfLongestSubstring(s5) === 1,
    'Test 5 failed: Expected 1',
  );

  // Test case 6: Entire string is unique
  let s6 = 'abcdef';
  console.assert(
    solution.lengthOfLongestSubstring(s6) === 6,
    'Test 6 failed: Expected 6',
  );

  // Test case 7: Complex case
  let s7 = 'dvdf';
  console.assert(
    solution.lengthOfLongestSubstring(s7) === 3,
    'Test 7 failed: Expected 3 (vdf)',
  );

  console.log(
    '✅ All Longest Substring Without Repeating Characters test cases passed!',
  );
}

// Run tests
test();

module.exports = Solution;
