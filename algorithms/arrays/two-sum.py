"""
Problem: Two Sum

Description:
Given an array of integers nums and an integer target, return indices of the 
two numbers such that they add up to target. You may assume that each input 
would have exactly one solution, and you may not use the same element twice.

Algorithm:
Use a hash map to store numbers we've seen and their indices. For each number,
check if (target - current_number) exists in the hash map.

Time Complexity: O(n) - single pass through the array
Space Complexity: O(n) - hash map storage

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1] (because nums[0] + nums[1] = 2 + 7 = 9)

Edge Cases:
- Array with exactly 2 elements
- Negative numbers
- Zero values
- Large numbers
"""

def two_sum(nums, target):
    """
    Find two numbers in array that sum to target
    
    Args:
        nums (List[int]): Array of integers
        target (int): Target sum
        
    Returns:
        List[int]: Indices of the two numbers that sum to target
        
    Raises:
        ValueError: If no solution exists
    """
    # Hash map to store value -> index mapping
    seen = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        # Check if complement exists in our hash map
        if complement in seen:
            return [seen[complement], i]
        
        # Store current number and its index
        seen[num] = i
    
    # No solution found
    raise ValueError("No two sum solution exists")

# Brute force approach (for comparison)
def two_sum_brute_force(nums, target):
    """
    Brute force solution - check all pairs
    
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    
    raise ValueError("No two sum solution exists")

# Test cases
def test_two_sum():
    """Test cases for two sum algorithm"""
    
    # Test case 1: Normal case
    assert two_sum([2, 7, 11, 15], 9) == [0, 1]
    
    # Test case 2: Numbers at end of array
    assert two_sum([3, 2, 4], 6) == [1, 2]
    
    # Test case 3: Same number twice
    assert two_sum([3, 3], 6) == [0, 1]
    
    # Test case 4: Negative numbers
    assert two_sum([-1, -2, -3, -4, -5], -8) == [2, 4]
    
    # Test case 5: Zero values
    assert two_sum([0, 4, 3, 0], 0) == [0, 3]
    
    print("✅ All two sum test cases passed!")

if __name__ == "__main__":
    test_two_sum()