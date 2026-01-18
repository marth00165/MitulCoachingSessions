# Coding Algorithms Repository

A comprehensive collection of algorithms and data structures implementations for coding interviews and competitive programming.

## 📁 Repository Structure

```
├── algorithms/              # Algorithm implementations
│   ├── arrays/             # Array-based algorithms
│   ├── strings/            # String manipulation algorithms
│   ├── dynamic-programming/ # DP solutions
│   ├── graphs/             # Graph algorithms (BFS, DFS, etc.)
│   ├── trees/              # Tree algorithms
│   ├── sorting/            # Sorting algorithms
│   ├── searching/          # Searching algorithms
│   ├── backtracking/       # Backtracking solutions
│   ├── greedy/             # Greedy algorithms
│   └── math/               # Mathematical algorithms
├── data-structures/        # Data structure implementations
│   ├── linked-lists/       # Linked list implementations
│   ├── stacks/             # Stack implementations
│   ├── queues/             # Queue implementations
│   ├── heaps/              # Heap/Priority queue
│   ├── hash-tables/        # Hash table implementations
│   └── tries/              # Trie data structure
├── examples/               # Example problems and solutions
├── tests/                  # Unit tests
└── docs/                   # Documentation
```

## 🚀 Getting Started

### Language Support

This repository supports multiple programming languages:

- **Python** (Primary)
- **JavaScript/TypeScript**
- **Java**
- **C++**
- **Go**

### File Naming Convention

```
problem-name.language-extension
```

Examples:

- `two-sum.py`
- `binary-search.js`
- `merge-sort.java`
- `quick-sort.cpp`

## 📝 Template Structure

Each algorithm implementation should include:

1. **Problem Description**: Clear explanation of the problem
2. **Algorithm Explanation**: How the solution works
3. **Time Complexity**: Big O notation for time
4. **Space Complexity**: Big O notation for space
5. **Implementation**: Clean, well-commented code
6. **Test Cases**: Example inputs and expected outputs

### Example Template

```python
"""
Problem: [Problem Name]

Description:
[Clear description of what the algorithm solves]

Algorithm:
[Explanation of how the algorithm works]

Time Complexity: O(?)
Space Complexity: O(?)

Example:
Input: [example input]
Output: [expected output]
"""

def algorithm_name(input_params):
    """
    Brief description of the function

    Args:
        input_params: Description of parameters

    Returns:
        Description of return value
    """
    # Implementation here
    pass

# Test cases
if __name__ == "__main__":
    # Test case 1
    assert algorithm_name(test_input) == expected_output
    print("All test cases passed!")
```

## 🧪 Testing

### Running Tests

```bash
# Python
python -m pytest tests/

# JavaScript
npm test

# Java
mvn test
```

### Adding Tests

- Place test files in the `/tests` directory
- Follow naming convention: `test_algorithm-name.py`
- Include edge cases and boundary conditions

## 📚 Learning Resources

### Recommended Practice Platforms

- [LeetCode](https://leetcode.com/)
- [HackerRank](https://hackerrank.com/)
- [CodeSignal](https://codesignal.com/)
- [GeeksforGeeks](https://geeksforgeeks.org/)

### Algorithm Categories by Difficulty

#### Beginner

- Arrays and String manipulation
- Basic sorting algorithms
- Linear search and binary search
- Simple recursion

#### Intermediate

- Trees and binary trees
- Graphs (BFS, DFS)
- Dynamic programming basics
- Hash tables and maps

#### Advanced

- Complex dynamic programming
- Graph algorithms (Dijkstra, MST)
- Advanced tree structures
- String algorithms (KMP, Rabin-Karp)

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-algorithm`)
3. **Follow** the template structure
4. **Add** comprehensive tests
5. **Commit** your changes (`git commit -am 'Add new algorithm'`)
6. **Push** to the branch (`git push origin feature/new-algorithm`)
7. **Create** a Pull Request

### Contribution Guidelines

- Use clear, descriptive variable names
- Add detailed comments explaining complex logic
- Include time and space complexity analysis
- Provide multiple test cases
- Follow the repository's coding style

## 📊 Progress Tracking

### Algorithms Implemented

- [ ] Arrays: 0/20 planned
- [ ] Strings: 0/15 planned
- [ ] Dynamic Programming: 0/25 planned
- [ ] Graphs: 0/20 planned
- [ ] Trees: 0/18 planned
- [ ] Sorting: 0/10 planned
- [ ] Searching: 0/8 planned

### Data Structures Implemented

- [ ] Linked Lists: 0/8 planned
- [ ] Stacks: 0/5 planned
- [ ] Queues: 0/6 planned
- [ ] Heaps: 0/5 planned
- [ ] Hash Tables: 0/4 planned
- [ ] Tries: 0/3 planned

## 📈 Study Plan

### Week 1-2: Foundations

- Arrays and strings
- Basic sorting algorithms
- Linear and binary search

### Week 3-4: Data Structures

- Linked lists
- Stacks and queues
- Basic tree operations

### Week 5-6: Intermediate

- Hash tables
- Tree traversals
- Basic dynamic programming

### Week 7-8: Advanced

- Graph algorithms
- Advanced DP
- Complex tree structures

## 🔧 Development Setup

### Prerequisites

- Git
- Your preferred code editor (VS Code recommended)
- Language-specific runtime (Python 3.8+, Node.js 14+, etc.)

### Installation

```bash
git clone <repository-url>
cd MitulCoachingSessions
# Set up your development environment
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions, suggestions, or contributions, please:

- Open an issue
- Submit a pull request
- Contact [your-email@domain.com]

---

**Happy Coding! 🎯**

> Remember: The goal is not just to solve problems, but to understand the underlying patterns and principles that make solutions elegant and efficient.
