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

Use the visual progress tracker to monitor your algorithm practice:

### Static Mode (Basic)

1. **Open**: Open [progress-tracker.html](progress-tracker.html) directly in your browser
2. **Filter**: Use dropdowns to filter by category or completion status
3. **Search**: Find specific problems using the search box
4. **Status**:
   - 🔴 Red = Not started
   - 🟡 Yellow = Attempted (file exists but tests fail)
   - 🟢 Green = Completed (tests pass)

### Dynamic Mode (Recommended)

For real-time test results and automatic file detection:

```bash
# Install dependencies
npm install

# Start the progress tracker server
npm run tracker
# or
node progress-tracker-server.js
```

Then visit: http://localhost:3001/progress-tracker.html

**Dynamic Features:**

- **Real-time test execution**: Automatically runs your test files to check pass/fail status
- **File detection**: Automatically discovers new implementations you add
- **Three status levels**:
  - ✅ **Completed** - Implementation exists and all tests pass
  - ⚠️ **Attempted** - Implementation exists but tests fail
  - ❌ **Not Started** - No implementation found
- **Live updates**: Status changes immediately when you fix tests or add new files

**How it works:**
The server scans your repository for `.js` and `.py` files, executes them to check test results, and provides a real-time API to the web interface. When you run `node your-algorithm.js`, the server detects whether the output contains success indicators (`✅`, `passed`) or failure indicators (`❌`, `FAILED`) to determine the status.

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

### Progress Tracker Server

```bash
# Start the progress tracker with dynamic test execution
npm run tracker

# Alternative commands
npm start
node progress-tracker-server.js
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
