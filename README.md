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

The progress tracker provides a visual dashboard to monitor your coding practice progress with real-time status updates.

### 🚀 Quick Start

**Option 1: Dynamic Mode (Recommended)**

```bash
# Install dependencies (one time setup)
npm install

# Start the tracker server
npm run tracker
```

Then **either**:

- Visit: http://localhost:3001/progress-tracker.html
- **OR** double-click [progress-tracker.html](progress-tracker.html) in Finder

**Option 2: Static Mode**

- Simply double-click [progress-tracker.html](progress-tracker.html) to open in browser
- Limited functionality without server

### 📊 Status Indicators

- 🟢 **Completed** - Implementation exists and all tests pass
- 🟡 **Attempted** - Implementation exists but tests fail
- 🔴 **Not Started** - No implementation found

### 🔧 How It Works

**Dynamic Mode Features:**

- **Auto-discovery**: Scans your repo for `.js` and `.py` files automatically
- **Real-time testing**: Executes your files to check if tests pass or fail
- **Intelligent mapping**: Maps file names like `numberofislands.js` to problem names like `number-of-islands`
- **Performance optimized**: Only tests files that exist (not all 80+ problems)
- **Live updates**: Status changes immediately when you add files or fix tests

**Test Detection Logic:**
The server runs your implementation files and checks for:

- **Pass indicators**: `✅`, `passed`, `All test`, exit code 0
- **Fail indicators**: `❌`, `FAILED`, `assert`, non-zero exit code

### 📱 Using the Interface

1. **Filter by Category**: Choose specific topics (Arrays, Trees, Graphs, etc.)
2. **Filter by Status**: Show only completed, attempted, or not started
3. **Search**: Find specific problems by name
4. **Click Problem Names**: Direct links to LeetCode problem pages
5. **View Stats**: See completion progress in the header

### 🔄 Workflow Example

```bash
# 1. Start the tracker
npm run tracker

# 2. Open tracker in browser (shows current status)
# 3. Implement a new algorithm
echo "console.log('✅ Tests pass!');" > algorithms/arrays/new-problem.js

# 4. Refresh tracker - new problem appears as "Completed"
# 5. Break the test
echo "console.log('❌ Tests fail!');" > algorithms/arrays/new-problem.js

# 6. Refresh tracker - status changes to "Attempted"
```

### 🏗️ File Naming Conventions

The tracker automatically maps different file naming styles:

| Your File Name       | Problem Name        | Status |
| -------------------- | ------------------- | ------ |
| `numberofislands.js` | `number-of-islands` | ✅     |
| `two-sum.js`         | `two-sum`           | ✅     |
| `binarySearch.py`    | `binary-search`     | ✅     |

**Supported locations:**

- `algorithms/category/file.js`
- `algorithms/category/nodejs/file.js`
- `algorithms/category/file.py`
- `data-structures/category/file.js`
- `data-structures/category/nodejs/file.js`

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

# View tracker
# Option 1: http://localhost:3001/progress-tracker.html (served by server)
# Option 2: Double-click progress-tracker.html (connects to server automatically)
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
