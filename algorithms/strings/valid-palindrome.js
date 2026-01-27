/**
 * Problem: Valid Palindrome
 *
 * Description:
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase
 * letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Algorithm:
 * Use two pointers from start and end, move them towards center while skipping
 * non-alphanumeric characters and comparing lowercase versions.
 *
 * Time Complexity: O(n) - single pass through the string
 * Space Complexity: O(1) - only using two pointers
 *
 * Example:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true (reads "amanaplanacanalpanama" forward and backward)
 *
 * Edge Cases:
 * - Empty string or single character (always palindrome)
 * - String with no alphanumeric characters
 * - String with mixed case and special characters
 * - String with numbers
 */

/**
 * Check if string is a valid palindrome
 *
 * @param {string} s - Input string to check
 * @returns {boolean} True if string is a palindrome, false otherwise
 */
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from left
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }

    // Skip non-alphanumeric characters from right
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    // Compare characters (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

/**
 * Helper function to check if character is alphanumeric
 *
 * @param {string} char - Character to check
 * @returns {boolean} True if character is alphanumeric, false otherwise
 */
function isAlphaNumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}

/**
 * Alternative implementation using built-in string methods
 * Less optimal due to string creation but more readable
 *
 * @param {string} s - Input string to check
 * @returns {boolean} True if string is a palindrome, false otherwise
 */
function isPalindromeBuiltIn(s) {
  // Remove non-alphanumeric and convert to lowercase
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  // Check if cleaned string equals its reverse
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Test function for Valid Palindrome
 */
function testIsPalindrome() {
  console.log('Testing Valid Palindrome...');

  let result;

  // Test case 1: Basic palindrome
  result = isPalindrome('A man, a plan, a canal: Panama');
  console.assert(result === true, 'Test case 1 failed: Expected true');

  // Test case 2: Not a palindrome
  result = isPalindrome('race a car');
  console.assert(result === false, 'Test case 2 failed: Expected false');

  // Test case 3: Empty string
  result = isPalindrome('');
  console.assert(result === true, 'Test case 3 failed: Expected true');

  // Test case 4: Single character
  result = isPalindrome('a');
  console.assert(result === true, 'Test case 4 failed: Expected true');

  // Test case 5: Only non-alphanumeric characters
  result = isPalindrome('.,');
  console.assert(result === true, 'Test case 5 failed: Expected true');

  // Test case 6: Numbers and letters
  result = isPalindrome("Madam, I'm Adam");
  console.assert(result === true, 'Test case 6 failed: Expected true');

  // Test case 7: Case sensitivity test
  result = isPalindrome('AbA');
  console.assert(result === true, 'Test case 7 failed: Expected true');

  // Test case 8: Numbers in palindrome
  result = isPalindrome('12321');
  console.assert(result === true, 'Test case 8 failed: Expected true');

  // Test built-in method as well
  result = isPalindromeBuiltIn('A man, a plan, a canal: Panama');
  console.assert(result === true, 'Built-in method test failed');

  console.log('✅ All valid palindrome test cases passed!');
}

// Export for use in other files
module.exports = {
  isPalindrome,
  isAlphaNumeric,
  isPalindromeBuiltIn,
  testIsPalindrome,
};

// Run tests if this file is executed directly
if (require.main === module) {
  testIsPalindrome();
}
