# Contributing to Coding Algorithms Repository

Thank you for your interest in contributing to this algorithms repository! This document provides guidelines and best practices for contributors.

## 🚀 Getting Started

### Prerequisites
- Git installed on your local machine
- Python 3.8+ (primary language)
- Basic understanding of algorithms and data structures
- Familiarity with testing frameworks

### Development Setup

1. **Fork the Repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/MitulCoachingSessions.git
   cd MitulCoachingSessions
   ```

2. **Create a Development Branch**
   ```bash
   git checkout -b feature/algorithm-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Install Development Dependencies** (Optional)
   ```bash
   pip install pytest  # For running tests
   pip install black   # For code formatting
   pip install pylint  # For code linting
   ```

## 📝 Contribution Guidelines

### Types of Contributions

1. **New Algorithm Implementations**
   - Classic algorithms (sorting, searching, graph algorithms)
   - Leetcode-style problem solutions
   - Optimization problems

2. **New Data Structure Implementations**
   - Fundamental data structures
   - Advanced data structures
   - Custom implementations

3. **Documentation Improvements**
   - Better explanations
   - More examples
   - Typo fixes

4. **Test Coverage**
   - Additional test cases
   - Edge case testing
   - Performance tests

### Code Standards

#### File Organization
```
algorithm-category/
├── algorithm-name.py           # Main implementation
├── algorithm-name-optimized.py # Alternative solutions (optional)
└── README.md                  # Category overview (optional)
```

#### Naming Conventions
- **Files**: `kebab-case.py` (e.g., `two-sum.py`, `merge-sort.py`)
- **Functions**: `snake_case` (e.g., `binary_search`, `quick_sort`)
- **Classes**: `PascalCase` (e.g., `LinkedList`, `BinaryTree`)
- **Constants**: `UPPER_CASE` (e.g., `MAX_SIZE`, `DEFAULT_VALUE`)

#### Code Structure Template
```python
"""
Problem: [Clear problem title]

Description:
[Detailed problem description]

Algorithm:
[Step-by-step explanation of the approach]

Time Complexity: O(?)
Space Complexity: O(?)

Example:
Input: [example input]
Output: [expected output]

Edge Cases:
- [List important edge cases]
"""

def main_function(parameters):
    """
    Brief description
    
    Args:
        parameters: Type and description
        
    Returns:
        Return type and description
        
    Raises:
        ExceptionType: When this exception occurs
    """
    # Implementation with clear comments
    pass

# Test cases
def test_function():
    """Comprehensive test cases"""
    # Test normal cases
    # Test edge cases
    # Test error conditions
    assert condition, "descriptive error message"
    print("✅ All tests passed!")

if __name__ == "__main__":
    test_function()
```

### Documentation Requirements

#### Required Elements
1. **Problem Description**: Clear, concise explanation
2. **Algorithm Explanation**: Step-by-step approach
3. **Complexity Analysis**: Time and space complexity
4. **Examples**: At least one input/output example
5. **Edge Cases**: Important edge cases to consider
6. **Comments**: Explain non-obvious logic

#### Optional Elements
- Multiple solution approaches
- Optimization notes
- Real-world applications
- Related problems

### Testing Requirements

#### Minimum Test Coverage
- **Normal Cases**: Typical inputs and expected outputs
- **Edge Cases**: Empty inputs, single elements, boundary values
- **Error Cases**: Invalid inputs that should raise exceptions
- **Performance Cases**: Large inputs for complexity verification

#### Test Implementation
```python
def test_algorithm():
    """Test function following naming convention"""
    
    # Test case 1: Normal case
    assert algorithm([1, 2, 3]) == expected_result
    
    # Test case 2: Edge case
    assert algorithm([]) == expected_empty_result
    
    # Test case 3: Error case
    with pytest.raises(ValueError):
        algorithm(invalid_input)
    
    print("✅ All test cases passed!")
```

## 🔍 Code Review Process

### Before Submitting
1. **Self-Review Checklist**
   - [ ] Code follows template structure
   - [ ] Includes proper documentation
   - [ ] Has comprehensive test cases
   - [ ] Follows naming conventions
   - [ ] Comments explain complex logic
   - [ ] No hardcoded values
   - [ ] Handles edge cases

2. **Run Tests**
   ```bash
   # Run your specific tests
   python your-algorithm.py
   
   # Run all tests
   python test_runner.py
   
   # Run with pytest (if available)
   pytest tests/
   ```

3. **Code Quality Check** (Optional)
   ```bash
   # Format code
   black your-algorithm.py
   
   # Check for issues
   pylint your-algorithm.py
   ```

### Pull Request Process

1. **Create Descriptive PR**
   - Clear title (e.g., "Add merge sort algorithm implementation")
   - Description of what was added/changed
   - Link to any related issues

2. **PR Template**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] New algorithm implementation
   - [ ] New data structure
   - [ ] Bug fix
   - [ ] Documentation update
   - [ ] Test improvement
   
   ## Testing
   - [ ] Added test cases
   - [ ] All tests pass
   - [ ] Tested edge cases
   
   ## Checklist
   - [ ] Follows code standards
   - [ ] Includes documentation
   - [ ] Has proper complexity analysis
   ```

### Review Criteria
- **Correctness**: Algorithm works as intended
- **Efficiency**: Reasonable time/space complexity
- **Readability**: Clean, well-commented code
- **Testing**: Adequate test coverage
- **Documentation**: Clear explanations

## 🐛 Bug Reports

### Bug Report Template
```markdown
**Description**
Clear description of the bug

**Steps to Reproduce**
1. Step 1
2. Step 2
3. See error

**Expected Behavior**
What should happen

**Actual Behavior** 
What actually happens

**Environment**
- OS: [e.g., macOS, Windows, Linux]
- Python Version: [e.g., 3.9.1]
- File: [e.g., algorithms/arrays/two-sum.py]
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Feature Description**
Clear description of the proposed feature

**Use Case**
Why this feature would be valuable

**Proposed Solution**
How you think it should be implemented

**Alternatives Considered**
Other approaches you've thought about
```

## 📋 Checklist for Contributors

### Before Starting
- [ ] Check if algorithm/data structure already exists
- [ ] Read existing implementations for style consistency
- [ ] Understand the problem thoroughly

### During Implementation
- [ ] Follow the code template
- [ ] Write clear, descriptive comments
- [ ] Include complexity analysis
- [ ] Add comprehensive test cases

### Before Submitting
- [ ] Run all tests locally
- [ ] Check code formatting
- [ ] Write descriptive commit messages
- [ ] Create clear PR description

## ❓ Getting Help

### Resources
- **Documentation**: Read the main [README.md](../README.md)
- **Examples**: Check [examples/](../examples/) directory
- **Templates**: Use [algorithm-template.py](../examples/algorithm-template.py)

### Contact
- Open an issue for questions
- Tag maintainers in PRs for review
- Use discussions for general algorithm questions

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Git commit history
- Release notes for significant contributions

Thank you for helping make this repository a valuable learning resource! 🎉