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

## 📝 Implementation Guidelines

Each algorithm should include:

- **Problem Description**: What the algorithm solves
- **Algorithm Explanation**: Step-by-step approach
- **Time/Space Complexity**: Big O analysis
- **Examples**: Input/output samples
- **Test Cases**: Edge cases and validations

## 📊 Progress Tracking

### Algorithms Implemented

- [ ] Arrays: 1/20 (Two Sum ✅)
- [ ] Strings: 0/15
- [ ] Dynamic Programming: 0/25
- [ ] Graphs: 0/20
- [ ] Trees: 0/18
- [ ] Sorting: 0/10
- [ ] Searching: 1/8 (Binary Search ✅)

### Data Structures Implemented

- [ ] Linked Lists: 1/8 (Singly Linked List ✅)
- [ ] Stacks: 0/5
- [ ] Queues: 0/6
- [ ] Heaps: 0/5
- [ ] Hash Tables: 0/4
- [ ] Tries: 0/3
