/**
 * Problem: Valid Parentheses
 *
 * Description:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets
 * 2. Open brackets must be closed in the correct order
 * 3. Every close bracket has a corresponding open bracket of the same type
 *
 * Algorithm Logic (Stack-based matching):
 * This solution uses a stack to track opening brackets and match them with closing ones:
 *
 * KEY INSIGHT: Use a map to match closing brackets to their corresponding opening brackets.
 * When we see a closing bracket, check if the top of stack has the matching opening bracket.
 *
 * STEPS:
 * 1. Create a map: closing_bracket → opening_bracket
 * 2. Use a stack to track opening brackets
 * 3. For each character:
 *    - If it's a closing bracket: pop from stack and check if it matches
 *    - If it's an opening bracket: push to stack
 * 4. At the end, stack should be empty (all brackets matched)
 *
 * Example with s = "({[]})":
 * - '(' → push to stack: ['(']
 * - '{' → push to stack: ['(', '{']
 * - '[' → push to stack: ['(', '{', '[']
 * - ']' → pop '[', matches ✓: ['(', '{']
 * - '}' → pop '{', matches ✓: ['(']
 * - ')' → pop '(', matches ✓: []
 * - Stack empty ✓ → Valid!
 *
 * Time Complexity: O(n) - single pass through string
 * Space Complexity: O(n) - stack can grow up to n/2 in worst case
 *
 * Tags: #stack #string #easy
 * URL: https://leetcode.com/problems/valid-parentheses/
 */

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const openMap = {
      ')': '(',
      '}': '{',
      ']': '[',
    };

    let stack = [];

    for (let letter of s) {
      if (openMap[letter]) {
        if (stack.length === 0) return false;

        let parenthesis = stack.pop();
        if (openMap[letter] !== parenthesis) return false;
      } else {
        stack.push(letter);
      }
    }

    return stack.length === 0;
  }
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Valid nested brackets
  let s1 = '()';
  console.assert(
    solution.isValid(s1) === true,
    'Test 1 failed: Expected true for "()"',
  );

  // Test case 2: Valid multiple types
  let s2 = '()[]{}';
  console.assert(
    solution.isValid(s2) === true,
    'Test 2 failed: Expected true for "()[]{}"',
  );

  // Test case 3: Invalid - mismatched
  let s3 = '(]';
  console.assert(
    solution.isValid(s3) === false,
    'Test 3 failed: Expected false for "(]"',
  );

  // Test case 4: Invalid - wrong order
  let s4 = '([)]';
  console.assert(
    solution.isValid(s4) === false,
    'Test 4 failed: Expected false for "([)]"',
  );

  // Test case 5: Valid nested
  let s5 = '{[]}';
  console.assert(
    solution.isValid(s5) === true,
    'Test 5 failed: Expected true for "{[]}"',
  );

  // Test case 6: Invalid - extra opening
  let s6 = '((';
  console.assert(
    solution.isValid(s6) === false,
    'Test 6 failed: Expected false for "(("',
  );

  // Test case 7: Invalid - extra closing
  let s7 = '()))';
  console.assert(
    solution.isValid(s7) === false,
    'Test 7 failed: Expected false for "()))"',
  );

  // Test case 8: Empty string (valid)
  let s8 = '';
  console.assert(
    solution.isValid(s8) === true,
    'Test 8 failed: Expected true for empty string',
  );

  console.log('✅ All Valid Parentheses test cases passed!');
}

// Run tests
test();

module.exports = Solution;
