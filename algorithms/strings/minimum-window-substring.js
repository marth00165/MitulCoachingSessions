/**
 * Problem: Minimum Window Substring
 *
 * Description:
 * Given two strings s and t, return the minimum window substring of s such that every character
 * in t (including duplicates) is included in the window. If there is no such substring,
 * return the empty string "".
 *
 * Algorithm Logic (Sliding Window with Frequency Map):
 * This solution uses the sliding window technique with character frequency tracking:
 *
 * KEY INSIGHT: Use two pointers (left, right) to maintain a window. Expand the window
 * by moving right pointer until all characters from t are included, then shrink from
 * left to find the minimum valid window.
 *
 * STEPS:
 * 1. Create frequency map of characters in string t
 * 2. Use sliding window with left and right pointers
 * 3. Expand window (move right) until all characters from t are included
 * 4. When valid window found, shrink from left to minimize window size
 * 5. Track the best (minimum length) valid window found
 * 6. Return the minimum window substring
 *
 * Example with s = "ADOBECODEBANC", t = "ABC"
 *
 * Step 1: freqMap = {A: 1, B: 1, C: 1}, unmet = 3
 * Step 2: Expand window until valid:
 * - Window "ADOBEC" contains A, B, C → valid window, length = 6
 * Step 3: Shrink from left:
 * - Try removing A, D, O, B → window becomes invalid when B removed
 * Step 4: Continue expanding and shrinking:
 * - Find "BANC" at end → valid window, length = 4 (better than 6)
 * Result: "BANC" (minimum window)
 *
 * Sliding window states:
 * unmet tracks how many unique characters from t still need to be satisfied
 * When unmet = 0, we have a valid window containing all characters from t
 *
 * Alternative: Brute force approach checking all substrings:
 * Check every possible substring O(n²) and validate each O(m). Much slower O(n²m).
 *
 * Time Complexity: O(|s| + |t|) - each character visited at most twice
 * Space Complexity: O(|s| + |t|) - frequency map storage
 *
 * Tags: #sliding-window #two-pointers #string #hash-map #hard
 * URL: https://leetcode.com/problems/minimum-window-substring/
 */

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (t === '') return t;

    let freqMap = new Map();
    let left = 0;
    let right = 0;
    let bestLen = Infinity;
    let bestStart = 0;

    // PT 1 - Create frequency map of target string t
    for (let c of t) {
      if (!freqMap.has(c)) {
        freqMap.set(c, 0);
      }
      freqMap.set(c, freqMap.get(c) + 1);
    }

    // Track how many unique characters from t still need to be satisfied
    let unmet = freqMap.size;

    // PT 2 - Sliding window algorithm
    while (right < s.length) {
      // Expand window by including character at right pointer
      let rightChar = s[right];
      if (freqMap.has(rightChar)) {
        freqMap.set(rightChar, freqMap.get(rightChar) - 1);

        // If we've satisfied the requirement for this character
        if (freqMap.get(rightChar) === 0) {
          unmet = unmet - 1;
        }
      }
      right++;

      // PT 3 - When we have a valid window (all characters from t included)
      while (unmet === 0) {
        let currLen = right - left;

        // Update best window if current is smaller
        if (currLen < bestLen) {
          bestLen = currLen;
          bestStart = left;
        }

        // PT 4 - Shrink window from left to find minimum
        let leftChar = s[left];
        if (freqMap.has(leftChar)) {
          freqMap.set(leftChar, freqMap.get(leftChar) + 1);

          // If removing this character breaks the requirement
          if (freqMap.get(leftChar) === 1) {
            unmet = unmet + 1;
          }
        }
        left++;
      }
    }

    // Return result
    if (bestLen === Infinity) {
      return '';
    } else {
      let end = bestStart + bestLen;
      return s.substring(bestStart, end);
    }
  }
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Standard example s = "ADOBECODEBANC", t = "ABC"
  let result1 = solution.minWindow('ADOBECODEBANC', 'ABC');
  console.assert(
    result1 === 'BANC',
    'Test 1 failed: Expected "BANC", got ' + result1,
  );

  // Test case 2: No valid window s = "a", t = "aa"
  let result2 = solution.minWindow('a', 'aa');
  console.assert(result2 === '', 'Test 2 failed: Expected "", got ' + result2);

  // Test case 3: Entire string is minimum window s = "a", t = "a"
  let result3 = solution.minWindow('a', 'a');
  console.assert(
    result3 === 'a',
    'Test 3 failed: Expected "a", got ' + result3,
  );

  // Test case 4: Target is empty string
  let result4 = solution.minWindow('abc', '');
  console.assert(result4 === '', 'Test 4 failed: Expected "", got ' + result4);

  // Test case 5: Multiple valid windows s = "ADOBECODEBANC", t = "AABC"
  let result5 = solution.minWindow('ADOBECODEBANC', 'AABC');
  console.assert(
    result5 === 'ADOBEC',
    'Test 5 failed: Expected "ADOBEC", got ' + result5,
  );

  // Test case 6: Repeated characters s = "aaab", t = "aab"
  let result6 = solution.minWindow('aaab', 'aab');
  console.assert(
    result6 === 'aaab',
    'Test 6 failed: Expected "aaab", got ' + result6,
  );

  // Test case 7: Single character s = "ab", t = "b"
  let result7 = solution.minWindow('ab', 'b');
  console.assert(
    result7 === 'b',
    'Test 7 failed: Expected "b", got ' + result7,
  );

  // Test case 8: No common characters s = "abc", t = "def"
  let result8 = solution.minWindow('abc', 'def');
  console.assert(result8 === '', 'Test 8 failed: Expected "", got ' + result8);

  // Test case 9: Complex case with duplicates s = "ABAACBAB", t = "ABC"
  let result9 = solution.minWindow('ABAACBAB', 'ABC');
  console.assert(
    result9 === 'ACB',
    'Test 9 failed: Expected "ACB", got ' + result9,
  );

  console.log('✅ All Minimum Window Substring test cases passed!');
}

// Run tests
test();

module.exports = { Solution };
