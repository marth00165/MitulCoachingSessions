"""
Problem: Binary Search

Description:
Given a sorted array of integers and a target value, return the index of the 
target if found, or -1 if not found. Implement the classic binary search algorithm.

Algorithm:
Use divide and conquer approach. Compare target with middle element, then
search left or right half based on comparison.

Time Complexity: O(log n) - halve search space each iteration
Space Complexity: O(1) - constant extra space (iterative version)

Example:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4 (9 is at index 4)

Edge Cases:
- Empty array
- Single element array
- Target not in array
- Target at boundaries (first/last element)
"""

def binary_search(nums, target):
    """
    Binary search implementation (iterative)
    
    Args:
        nums (List[int]): Sorted array of integers
        target (int): Value to search for
        
    Returns:
        int: Index of target if found, -1 otherwise
    """
    if not nums:
        return -1
    
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = left + (right - left) // 2  # Avoid overflow
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

def binary_search_recursive(nums, target, left=None, right=None):
    """
    Binary search implementation (recursive)
    
    Time Complexity: O(log n)
    Space Complexity: O(log n) - recursion stack
    """
    if not nums:
        return -1
    
    if left is None:
        left = 0
    if right is None:
        right = len(nums) - 1
    
    if left > right:
        return -1
    
    mid = left + (right - left) // 2
    
    if nums[mid] == target:
        return mid
    elif nums[mid] < target:
        return binary_search_recursive(nums, target, mid + 1, right)
    else:
        return binary_search_recursive(nums, target, left, mid - 1)

# Test cases
def test_binary_search():
    """Test cases for binary search algorithms"""
    
    # Test array
    nums = [-1, 0, 3, 5, 9, 12]
    
    # Test case 1: Target exists in middle
    assert binary_search(nums, 9) == 4
    assert binary_search_recursive(nums, 9) == 4
    
    # Test case 2: Target at beginning
    assert binary_search(nums, -1) == 0
    assert binary_search_recursive(nums, -1) == 0
    
    # Test case 3: Target at end
    assert binary_search(nums, 12) == 5
    assert binary_search_recursive(nums, 12) == 5
    
    # Test case 4: Target doesn't exist
    assert binary_search(nums, 2) == -1
    assert binary_search_recursive(nums, 2) == -1
    
    # Test case 5: Empty array
    assert binary_search([], 1) == -1
    assert binary_search_recursive([], 1) == -1
    
    # Test case 6: Single element - found
    assert binary_search([5], 5) == 0
    assert binary_search_recursive([5], 5) == 0
    
    # Test case 7: Single element - not found
    assert binary_search([5], 3) == -1
    assert binary_search_recursive([5], 3) == -1
    
    print("✅ All binary search test cases passed!")

if __name__ == "__main__":
    test_binary_search()