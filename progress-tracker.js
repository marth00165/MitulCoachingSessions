// Algorithm Progress Tracker JavaScript

// Problem data from the question bank
const problemsData = {
  'arrays-strings': {
    title: 'Arrays & Strings',
    problems: [
      // Very High Frequency
      {
        name: 'Container With Most Water',
        frequency: 'Very High',
        fileName: 'container-with-most-water',
      },
      {
        name: 'Trapping Rain Water',
        frequency: 'Very High',
        fileName: 'trapping-rain-water',
      },
      { name: '3Sum', frequency: 'Very High', fileName: '3sum' },
      {
        name: 'Longest Substring Without Repeating Characters',
        frequency: 'Very High',
        fileName: 'longest-substring-without-repeating-characters',
      },
      {
        name: 'Minimum Window Substring',
        frequency: 'Very High',
        fileName: 'minimum-window-substring',
      },
      {
        name: 'Subarray Sum Equals K',
        frequency: 'Very High',
        fileName: 'subarray-sum-equals-k',
      },
      // High Frequency
      {
        name: 'Sliding Window Maximum',
        frequency: 'High',
        fileName: 'sliding-window-maximum',
      },
      {
        name: 'Product of Array Except Self',
        frequency: 'High',
        fileName: 'product-of-array-except-self',
      },
      { name: 'Group Anagrams', frequency: 'High', fileName: 'group-anagrams' },
      { name: 'Decode String', frequency: 'High', fileName: 'decode-string' },
      {
        name: 'Longest Palindromic Substring',
        frequency: 'High',
        fileName: 'longest-palindromic-substring',
      },
      {
        name: 'String to Integer (atoi)',
        frequency: 'High',
        fileName: 'string-to-integer-atoi',
      },
      {
        name: 'Longest Consecutive Sequence',
        frequency: 'High',
        fileName: 'longest-consecutive-sequence',
      },
      {
        name: 'Valid Parentheses',
        frequency: 'High',
        fileName: 'valid-parentheses',
      },
      {
        name: 'Generate Parentheses',
        frequency: 'High',
        fileName: 'generate-parentheses',
      },
      { name: 'Two Sum', frequency: 'High', fileName: 'two-sum' },
    ],
  },
  trees: {
    title: 'Trees',
    problems: [
      // Very High Frequency
      {
        name: 'Binary Tree Maximum Path Sum',
        frequency: 'Very High',
        fileName: 'binary-tree-maximum-path-sum',
      },
      {
        name: 'Serialize and Deserialize Binary Tree',
        frequency: 'Very High',
        fileName: 'serialize-and-deserialize-binary-tree',
      },
      {
        name: 'Lowest Common Ancestor of Binary Tree',
        frequency: 'Very High',
        fileName: 'lowest-common-ancestor-of-binary-tree',
      },
      // High Frequency
      {
        name: 'Validate Binary Search Tree',
        frequency: 'High',
        fileName: 'validate-binary-search-tree',
      },
      {
        name: 'Binary Tree Level Order Traversal',
        frequency: 'High',
        fileName: 'binary-tree-level-order-traversal',
      },
      {
        name: 'Binary Tree Right Side View',
        frequency: 'High',
        fileName: 'binary-tree-right-side-view',
      },
      {
        name: 'Kth Smallest Element in BST',
        frequency: 'High',
        fileName: 'kth-smallest-element-in-bst',
      },
      {
        name: 'Invert Binary Tree',
        frequency: 'High',
        fileName: 'invert-binary-tree',
      },
      {
        name: 'Diameter of Binary Tree',
        frequency: 'High',
        fileName: 'diameter-of-binary-tree',
      },
      {
        name: 'Binary Tree Zigzag Level Order Traversal',
        frequency: 'High',
        fileName: 'binary-tree-zigzag-level-order-traversal',
      },
      {
        name: 'Count Complete Tree Nodes',
        frequency: 'High',
        fileName: 'count-complete-tree-nodes',
      },
      { name: 'Path Sum II', frequency: 'High', fileName: 'path-sum-ii' },
    ],
  },
  graphs: {
    title: 'Graphs',
    problems: [
      // Very High Frequency
      { name: 'Word Ladder', frequency: 'Very High', fileName: 'word-ladder' },
      {
        name: 'Number of Islands',
        frequency: 'Very High',
        fileName: 'number-of-islands',
      },
      { name: 'Clone Graph', frequency: 'Very High', fileName: 'clone-graph' },
      // High Frequency
      {
        name: 'Course Schedule II',
        frequency: 'High',
        fileName: 'course-schedule-ii',
      },
      { name: 'Word Search II', frequency: 'High', fileName: 'word-search-ii' },
      {
        name: 'Pacific Atlantic Water Flow',
        frequency: 'High',
        fileName: 'pacific-atlantic-water-flow',
      },
      {
        name: 'Graph Valid Tree',
        frequency: 'High',
        fileName: 'graph-valid-tree',
      },
      {
        name: 'Alien Dictionary',
        frequency: 'High',
        fileName: 'alien-dictionary',
      },
      {
        name: 'Network Delay Time',
        frequency: 'High',
        fileName: 'network-delay-time',
      },
      {
        name: 'Shortest Path in Binary Matrix',
        frequency: 'High',
        fileName: 'shortest-path-in-binary-matrix',
      },
      {
        name: 'Rotting Oranges',
        frequency: 'High',
        fileName: 'rotting-oranges',
      },
    ],
  },
  'dynamic-programming': {
    title: 'Dynamic Programming',
    problems: [
      // Very High Frequency
      { name: 'Coin Change', frequency: 'Very High', fileName: 'coin-change' },
      {
        name: 'Longest Increasing Subsequence',
        frequency: 'Very High',
        fileName: 'longest-increasing-subsequence',
      },
      { name: 'Word Break', frequency: 'Very High', fileName: 'word-break' },
      // High Frequency
      {
        name: 'House Robber II',
        frequency: 'High',
        fileName: 'house-robber-ii',
      },
      { name: 'Decode Ways', frequency: 'High', fileName: 'decode-ways' },
      {
        name: 'Maximum Product Subarray',
        frequency: 'High',
        fileName: 'maximum-product-subarray',
      },
      {
        name: 'Partition Equal Subset Sum',
        frequency: 'High',
        fileName: 'partition-equal-subset-sum',
      },
      { name: 'Edit Distance', frequency: 'High', fileName: 'edit-distance' },
      {
        name: 'Longest Palindromic Subsequence',
        frequency: 'High',
        fileName: 'longest-palindromic-subsequence',
      },
      {
        name: 'Palindrome Partitioning',
        frequency: 'High',
        fileName: 'palindrome-partitioning',
      },
      {
        name: 'Unique Paths II',
        frequency: 'High',
        fileName: 'unique-paths-ii',
      },
      {
        name: 'Palindromic Substrings',
        frequency: 'High',
        fileName: 'palindromic-substrings',
      },
      {
        name: 'Regular Expression Matching',
        frequency: 'High',
        fileName: 'regular-expression-matching',
      },
    ],
  },
  backtracking: {
    title: 'Backtracking',
    problems: [
      {
        name: 'Combination Sum II',
        frequency: 'High',
        fileName: 'combination-sum-ii',
      },
      { name: 'Permutations', frequency: 'High', fileName: 'permutations' },
      {
        name: 'Permutations II',
        frequency: 'High',
        fileName: 'permutations-ii',
      },
      { name: 'Subsets', frequency: 'High', fileName: 'subsets' },
      { name: 'Subsets II', frequency: 'High', fileName: 'subsets-ii' },
      {
        name: 'Letter Combinations of Phone Number',
        frequency: 'High',
        fileName: 'letter-combinations-of-phone-number',
      },
    ],
  },
  'additional-hard': {
    title: 'Additional Hard Problems',
    problems: [
      {
        name: 'Longest Valid Parentheses',
        frequency: 'Frequently Asked',
        fileName: 'longest-valid-parentheses',
      },
      {
        name: 'Maximal Rectangle',
        frequency: 'Frequently Asked',
        fileName: 'maximal-rectangle',
      },
      {
        name: 'Minimum Window Subsequence',
        frequency: 'Frequently Asked',
        fileName: 'minimum-window-subsequence',
      },
      {
        name: 'Median of Two Sorted Arrays',
        frequency: 'Frequently Asked',
        fileName: 'median-of-two-sorted-arrays',
      },
      {
        name: 'Wildcard Matching',
        frequency: 'Frequently Asked',
        fileName: 'wildcard-matching',
      },
      {
        name: 'Text Justification',
        frequency: 'Frequently Asked',
        fileName: 'text-justification',
      },
      {
        name: 'First Missing Positive',
        frequency: 'Frequently Asked',
        fileName: 'first-missing-positive',
      },
      {
        name: 'Largest Rectangle in Histogram',
        frequency: 'Frequently Asked',
        fileName: 'largest-rectangle-in-histogram',
      },
    ],
  },
};

// Mapping of categories to their folder paths
const categoryPaths = {
  'arrays-strings': ['arrays', 'strings'],
  trees: ['trees'],
  graphs: ['graphs'],
  'dynamic-programming': ['dynamic-programming'],
  backtracking: ['backtracking'],
  'additional-hard': [
    'arrays',
    'strings',
    'graphs',
    'dynamic-programming',
    'trees',
    'math',
  ],
};

// State management
let currentFilter = 'all';
let currentStatus = 'all';
let currentSearch = '';
let problemsStatus = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
  checkProblemsStatus();
  renderProblems();
  setupEventListeners();
  updateStats();
});

// Check which problems have implementations
function checkProblemsStatus() {
  for (const [categoryKey, categoryData] of Object.entries(problemsData)) {
    const paths = categoryPaths[categoryKey];

    for (const problem of categoryData.problems) {
      const status = checkProblemImplementation(problem.fileName, paths);
      problemsStatus[problem.fileName] = status;
    }
  }
}

// Check if a problem has either Python or Node.js implementation
function checkProblemImplementation(fileName, possiblePaths) {
  // This function simulates checking file existence
  // In a real implementation, you would need to use a backend service or
  // pre-generate this data since JavaScript can't access the filesystem directly

  // For demo purposes, mark some problems as completed based on what we know exists
  const knownImplementations = {
    'two-sum': true,
    'binary-search': true,
  };

  return knownImplementations[fileName] ? 'completed' : 'not-completed';
}

// Render all problems
function renderProblems() {
  const container = document.getElementById('problems-container');
  container.innerHTML = '';

  for (const [categoryKey, categoryData] of Object.entries(problemsData)) {
    if (currentFilter !== 'all' && currentFilter !== categoryKey) {
      continue;
    }

    const filteredProblems = filterProblems(categoryData.problems);
    if (filteredProblems.length === 0) continue;

    const categoryElement = createCategoryElement(
      categoryKey,
      categoryData,
      filteredProblems,
    );
    container.appendChild(categoryElement);
  }
}

// Filter problems based on current filters
function filterProblems(problems) {
  return problems.filter((problem) => {
    const status = problemsStatus[problem.fileName];

    // Status filter
    if (currentStatus !== 'all' && status !== currentStatus) {
      return false;
    }

    // Search filter
    if (
      currentSearch &&
      !problem.name.toLowerCase().includes(currentSearch.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
}

// Create category element
function createCategoryElement(categoryKey, categoryData, problems) {
  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'category';

  // Calculate category stats
  const completed = problems.filter(
    (p) => problemsStatus[p.fileName] === 'completed',
  ).length;
  const notStarted = problems.filter(
    (p) => problemsStatus[p.fileName] === 'not-completed',
  ).length;
  const total = problems.length;

  categoryDiv.innerHTML = `
        <div class="category-header">
            <div class="category-title">${categoryData.title}</div>
            <div class="category-stats">
                <span>✅ ${completed}</span>
                <span>❌ ${notStarted}</span>
                <span>📝 ${total}</span>
            </div>
        </div>
        <div class="problems-grid" id="problems-${categoryKey}">
        </div>
    `;

  const problemsGrid = categoryDiv.querySelector(`#problems-${categoryKey}`);

  problems.forEach((problem) => {
    const problemElement = createProblemElement(problem);
    problemsGrid.appendChild(problemElement);
  });

  return categoryDiv;
}

// Create problem element
function createProblemElement(problem) {
  const status = problemsStatus[problem.fileName];
  const div = document.createElement('div');
  div.className = `problem-card ${status}`;

  const implementations = getImplementationTags(problem.fileName);

  div.innerHTML = `
        <div class="status-icon ${status}"></div>
        <div class="problem-title">${problem.name}</div>
        <div class="problem-frequency">Frequency: ${problem.frequency}</div>
        <div class="problem-implementations">
            ${implementations}
        </div>
    `;

  return div;
}

// Get implementation tags for a problem
function getImplementationTags(fileName) {
  const status = problemsStatus[fileName];

  if (status === 'completed') {
    return '<span class="implementation-tag python-tag">Implemented ✓</span>';
  } else {
    return '<span class="implementation-tag missing-tag">Not Implemented</span>';
  }
}

// Setup event listeners
function setupEventListeners() {
  // Category filter
  document
    .getElementById('category-filter')
    .addEventListener('change', function () {
      currentFilter = this.value;
      renderProblems();
      updateStats();
    });

  // Status filter
  document
    .getElementById('status-filter')
    .addEventListener('change', function () {
      currentStatus = this.value;
      renderProblems();
      updateStats();
    });

  // Search input
  document
    .getElementById('search-input')
    .addEventListener('input', function () {
      currentSearch = this.value;
      renderProblems();
      updateStats();
    });
}

// Update statistics
function updateStats() {
  const allProblems = getAllFilteredProblems();
  const completed = allProblems.filter(
    (p) => problemsStatus[p.fileName] === 'completed',
  ).length;
  const total = allProblems.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  document.getElementById('total-problems').textContent = total;
  document.getElementById('completed-count').textContent = completed;
  document.getElementById('completion-percentage').textContent =
    percentage + '%';
}

// Get all problems that match current filters
function getAllFilteredProblems() {
  let allProblems = [];

  for (const [categoryKey, categoryData] of Object.entries(problemsData)) {
    if (currentFilter !== 'all' && currentFilter !== categoryKey) {
      continue;
    }

    const filteredProblems = filterProblems(categoryData.problems);
    allProblems = allProblems.concat(filteredProblems);
  }

  return allProblems;
}

// Export functions for potential use in other scripts
window.AlgorithmTracker = {
  checkProblemsStatus,
  renderProblems,
  updateStats,
  problemsData,
  problemsStatus,
};
