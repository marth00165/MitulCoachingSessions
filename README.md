# Personal Coding Algorithms Repository

My collection of algorithm and data structure implementations for practice and reference.

## 📁 Repository Structure

```
├── algorithms/              # Algorithm implementations
│   ├── arrays/             # Array-based algorithms
│   │   ├── two-sum.py      # Python implementation
│   │   └── nodejs/         # Node.js implementations
│   ├── strings/            # String manipulation algorithms
│   ├── dynamic-programming/ # DP solutions
│   ├── graphs/             # Graph algorithms (BFS, DFS, etc.)
│   ├── trees/              # Tree algorithms
│   ├── sorting/            # Sorting algorithms
│   ├── searching/          # Searching algorithms
│   │   ├── binary-search.py # Python implementation
│   │   └── nodejs/         # Node.js implementations
│   ├── backtracking/       # Backtracking solutions
│   ├── greedy/             # Greedy algorithms
│   └── math/               # Mathematical algorithms
├── data-structures/        # Data structure implementations
│   ├── linked-lists/       # Linked list implementations
│   │   ├── singly-linked-list.py # Python implementation
│   │   └── nodejs/         # Node.js implementations
│   ├── stacks/             # Stack implementations
│   ├── queues/             # Queue implementations
│   ├── heaps/              # Heap/Priority queue
│   ├── hash-tables/        # Hash table implementations
│   └── tries/              # Trie data structure
├── examples/               # Templates and examples
│   ├── algorithm-template.py  # Python template
│   └── algorithm-template.js  # Node.js template
└── tests/                  # Unit tests
```

## 💻 Language Support

- **Python** - Primary language for most implementations
- **Node.js/JavaScript** - Alternative implementations in nodejs/ subdirectories

### File Organization

```
algorithm-category/
├── algorithm-name.py       # Python implementation
└── nodejs/
    └── algorithm-name.js   # Node.js implementation
```

## 🎯 Progress Tracker

The progress tracker provides a visual dashboard to monitor your coding practice progress.

### 🚀 Quick Start

**Simple Static Mode**

1. Double-click [progress-tracker.html](progress-tracker.html) to open in your browser
2. View your current progress with real-time filtering and search

### 📊 Status Indicators

- 🟢 **Completed** - Problem solved and implemented
- 🟡 **Attempted** - Working on it but not finished
- 🔴 **Not Started** - Haven't started yet

### 🔧 How It Works

The tracker uses a simple static data structure in [progress-tracker.js](progress-tracker.js). To update your progress:

1. Open `progress-tracker.js`
2. Find the problem in the `problems` object
3. Change the `status` field to:
   - `'completed'` - when you finish a problem
   - `'attempted'` - when you're working on it
   - `'not-completed'` - when you haven't started

**Example:**

```javascript
{ name: 'two-sum', url: 'https://leetcode.com/problems/two-sum/', status: 'completed' }
```

### 📱 Using the Interface

1. **Filter by Category**: Choose specific topics (Arrays, Trees, Graphs, etc.)
2. **Filter by Status**: Show only completed, attempted, or not started
3. **Search**: Find specific problems by name
4. **Click Problem Names**: Direct links to LeetCode problem pages
5. **View Stats**: See completion progress in the header

6. **Filter by Category**: Choose specific topics (Arrays, Trees, Graphs, etc.)
7. **Filter by Status**: Show only completed, attempted, or not started
8. **Search**: Find specific problems by name
9. **Click Problem Names**: Direct links to LeetCode problem pages
10. **View Stats**: See completion progress in the header

## 🧪 Running Tests

### Python

```bash
# Run specific algorithm
python algorithms/arrays/two-sum.py

# Run all Python tests
python test_runner.py

# Run specific category
python test_runner.py --category arrays
```

### Node.js

```bash
# Run specific algorithm
node algorithms/arrays/nodejs/two-sum.js

# Run all Node.js tests
node test_runner.js

# Run specific category
node test_runner.js --category=arrays

# Or use npm scripts
npm test
npm run test:arrays
```

## 📝 Adding New Implementations

### 🎯 Step-by-Step Guide

1. **Choose the right location** based on problem type:

   ```
   algorithms/
   ├── arrays/           # Array problems (two-sum, etc.)
   ├── strings/          # String problems (palindrome, etc.)
   ├── trees/            # Tree problems (traversal, etc.)
   ├── graphs/           # Graph problems (BFS, DFS, etc.)
   ├── dynamic-programming/
   ├── backtracking/
   └── ...

   data-structures/
   ├── linked-lists/
   ├── stacks/
   └── ...
   ```

2. **Create your file** in the appropriate directory:

   ```bash
   # For Node.js implementation
   touch algorithms/strings/nodejs/valid-palindrome.js

   # For Python implementation
   touch algorithms/strings/valid-palindrome.py
   ```

3. **Follow the standard template**:

   ```javascript
   /**
    * Problem: [Problem Name]
    *
    * Description:
    * [Clear description of the problem]
    *
    * Algorithm:
    * [Step-by-step explanation of your approach]
    *
    * Time Complexity: O(?) - [explanation]
    * Space Complexity: O(?) - [explanation]
    *
    * Example:
    * Input: [example input]
    * Output: [example output]
    *
    * Edge Cases:
    * - [list important edge cases]
    */

   function yourSolution(input) {
     // Your implementation here
   }

   function testYourSolution() {
     console.log('Testing [Problem Name]...');

     // Test cases with console.assert
     let result = yourSolution(testInput);
     console.assert(result === expected, 'Test case failed');

     console.log('✅ All test cases passed!');
   }

   // Export and run tests
   module.exports = { yourSolution, testYourSolution };

   if (require.main === module) {
     testYourSolution();
   }
   ```

4. **Test your implementation**:

   ```bash
   # Run your file directly
   node algorithms/strings/nodejs/valid-palindrome.js

   # Should output: ✅ All test cases passed!
   ```

5. **Check progress tracker**:

   ```bash
   # Start tracker server (if not already running)
   npm run tracker

   # Open tracker - your new problem should appear as "Completed" 🟢
   ```

### 📋 File Naming Best Practices

- Use **kebab-case**: `valid-palindrome.js`, `two-sum.js`
- Match **problem names**: Use same format as LeetCode URLs when possible
- **Be descriptive**: `binary-search.js` not `search.js`

### ✅ Quality Checklist

Before submitting your implementation:

- [ ] **Documentation**: Clear problem description and algorithm explanation
- [ ] **Complexity Analysis**: Include time and space complexity with explanations
- [ ] **Test Cases**: Multiple test cases including edge cases
- [ ] **Error Handling**: Handle invalid inputs gracefully
- [ ] **Code Style**: Consistent formatting and meaningful variable names
- [ ] **Success Output**: Tests should print `✅` when passing
- [ ] **Exports**: Proper module exports for reusability

### 🔄 Example: Adding Valid Palindrome

Here's exactly how the Valid Palindrome problem was added to this repo:

```bash
# 1. Created the file
mkdir -p algorithms/strings/nodejs
touch algorithms/strings/nodejs/valid-palindrome.js

# 2. Added implementation with proper documentation and tests
# 3. Tested it
node algorithms/strings/nodejs/valid-palindrome.js
# Output: ✅ All valid palindrome test cases passed!

# 4. Progress tracker automatically detected it as "Completed" 🟢
```

## 📝 Implementation Guidelines

Each algorithm should include:

- **Problem Description**: What the algorithm solves
- **Algorithm Explanation**: Step-by-step approach
- **Time/Space Complexity**: Big O analysis
- **Examples**: Input/output samples
- **Test Cases**: Edge cases and validations

## 📊 Progress Tracking

### Algorithms Implemented

- [ ] Arrays: 3/20 (Two Sum ✅, Two Sum II ✅, 3Sum ✅)
- [ ] Strings: 1/15 (Valid Palindrome ✅)
- [ ] Dynamic Programming: 0/25
- [ ] Graphs: 0/20
- [ ] Trees: 1/18 (Number of Islands ✅)
- [ ] Sorting: 0/10
- [ ] Searching: 1/8 (Binary Search ✅)

### Data Structures Implemented

- [ ] Linked Lists: 1/8 (Singly Linked List ✅)
- [ ] Stacks: 0/5
- [ ] Queues: 0/6
- [ ] Heaps: 0/5
- [ ] Hash Tables: 0/4
- [ ] Tries: 0/3
