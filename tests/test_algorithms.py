"""
Unit tests using pytest framework

Install pytest: pip install pytest

Run tests:
    pytest tests/
    pytest tests/test_arrays.py
    pytest tests/test_arrays.py::test_two_sum
"""

import sys
import os

# Add parent directory to path so we can import algorithms
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import pytest
from algorithms.arrays.two_sum import two_sum, two_sum_brute_force
from algorithms.searching.binary_search import binary_search, binary_search_recursive

class TestArrayAlgorithms:
    """Test class for array algorithms"""
    
    def test_two_sum_basic(self):
        """Test basic two sum functionality"""
        assert two_sum([2, 7, 11, 15], 9) == [0, 1]
        assert two_sum([3, 2, 4], 6) == [1, 2]
        assert two_sum([3, 3], 6) == [0, 1]
    
    def test_two_sum_edge_cases(self):
        """Test two sum edge cases"""
        # Negative numbers
        assert two_sum([-1, -2, -3, -4, -5], -8) == [2, 4]
        
        # Zero values
        assert two_sum([0, 4, 3, 0], 0) == [0, 3]
        
        # No solution should raise ValueError
        with pytest.raises(ValueError):
            two_sum([1, 2, 3], 10)
    
    def test_two_sum_brute_force(self):
        """Test brute force implementation"""
        assert two_sum_brute_force([2, 7, 11, 15], 9) == [0, 1]
        assert two_sum_brute_force([3, 2, 4], 6) == [1, 2]

class TestSearchAlgorithms:
    """Test class for search algorithms"""
    
    def test_binary_search_basic(self):
        """Test basic binary search functionality"""
        nums = [-1, 0, 3, 5, 9, 12]
        assert binary_search(nums, 9) == 4
        assert binary_search(nums, -1) == 0
        assert binary_search(nums, 12) == 5
        assert binary_search(nums, 2) == -1
    
    def test_binary_search_edge_cases(self):
        """Test binary search edge cases"""
        # Empty array
        assert binary_search([], 1) == -1
        
        # Single element
        assert binary_search([5], 5) == 0
        assert binary_search([5], 3) == -1
    
    def test_binary_search_recursive(self):
        """Test recursive binary search implementation"""
        nums = [-1, 0, 3, 5, 9, 12]
        assert binary_search_recursive(nums, 9) == 4
        assert binary_search_recursive(nums, -1) == 0
        assert binary_search_recursive(nums, 12) == 5
        assert binary_search_recursive(nums, 2) == -1

if __name__ == "__main__":
    pytest.main([__file__])