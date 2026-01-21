// Algorithm Progress Tracker JavaScript

// Problem URLs from the question bank HTML file
const problemUrls = {
  'container-with-most-water':
    'https://leetcode.com/problems/container-with-most-water/',
  'trapping-rain-water': 'https://leetcode.com/problems/trapping-rain-water/',
  '3sum': 'https://leetcode.com/problems/3sum/',
  'longest-substring-without-repeating-characters':
    'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  'minimum-window-substring':
    'https://leetcode.com/problems/minimum-window-substring/',
  'subarray-sum-equals-k':
    'https://leetcode.com/problems/subarray-sum-equals-k/',
  'sliding-window-maximum':
    'https://leetcode.com/problems/sliding-window-maximum/',
  'product-of-array-except-self':
    'https://leetcode.com/problems/product-of-array-except-self/',
  'group-anagrams': 'https://leetcode.com/problems/group-anagrams/',
  'decode-string': 'https://leetcode.com/problems/decode-string/',
  'longest-palindromic-substring':
    'https://leetcode.com/problems/longest-palindromic-substring/',
  'string-to-integer-atoi':
    'https://leetcode.com/problems/string-to-integer-atoi/',
  'longest-consecutive-sequence':
    'https://leetcode.com/problems/longest-consecutive-sequence/',
  'valid-parentheses': 'https://leetcode.com/problems/valid-parentheses/',
  'generate-parentheses': 'https://leetcode.com/problems/generate-parentheses/',
  'binary-tree-maximum-path-sum':
    'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
  'serialize-and-deserialize-binary-tree':
    'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
  'lowest-common-ancestor-of-binary-tree':
    'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
  'validate-binary-search-tree':
    'https://leetcode.com/problems/validate-binary-search-tree/',
  'binary-tree-level-order-traversal':
    'https://leetcode.com/problems/binary-tree-level-order-traversal/',
  'binary-tree-right-side-view':
    'https://leetcode.com/problems/binary-tree-right-side-view/',
  'kth-smallest-element-in-bst':
    'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
  'invert-binary-tree': 'https://leetcode.com/problems/invert-binary-tree/',
  'diameter-of-binary-tree':
    'https://leetcode.com/problems/diameter-of-binary-tree/',
  'binary-tree-zigzag-level-order-traversal':
    'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
  'count-complete-tree-nodes':
    'https://leetcode.com/problems/count-complete-tree-nodes/',
  'path-sum-ii': 'https://leetcode.com/problems/path-sum-ii/',
  'word-ladder': 'https://leetcode.com/problems/word-ladder/',
  'number-of-islands': 'https://leetcode.com/problems/number-of-islands/',
  'clone-graph': 'https://leetcode.com/problems/clone-graph/',
  'course-schedule-ii': 'https://leetcode.com/problems/course-schedule-ii/',
  'word-search-ii': 'https://leetcode.com/problems/word-search-ii/',
  'pacific-atlantic-water-flow':
    'https://leetcode.com/problems/pacific-atlantic-water-flow/',
  'graph-valid-tree': 'https://leetcode.com/problems/graph-valid-tree/',
  'alien-dictionary': 'https://leetcode.com/problems/alien-dictionary/',
  'network-delay-time': 'https://leetcode.com/problems/network-delay-time/',
  'shortest-path-in-binary-matrix':
    'https://leetcode.com/problems/shortest-path-in-binary-matrix/',
  'rotting-oranges': 'https://leetcode.com/problems/rotting-oranges/',
  'coin-change': 'https://leetcode.com/problems/coin-change/',
  'longest-increasing-subsequence':
    'https://leetcode.com/problems/longest-increasing-subsequence/',
  'word-break': 'https://leetcode.com/problems/word-break/',
  'house-robber-ii': 'https://leetcode.com/problems/house-robber-ii/',
  'decode-ways': 'https://leetcode.com/problems/decode-ways/',
  'maximum-product-subarray':
    'https://leetcode.com/problems/maximum-product-subarray/',
  'partition-equal-subset-sum':
    'https://leetcode.com/problems/partition-equal-subset-sum/',
  'edit-distance': 'https://leetcode.com/problems/edit-distance/',
  'longest-palindromic-subsequence':
    'https://leetcode.com/problems/longest-palindromic-subsequence/',
  'palindrome-partitioning':
    'https://leetcode.com/problems/palindrome-partitioning/',
  'unique-paths-ii': 'https://leetcode.com/problems/unique-paths-ii/',
  'palindromic-substrings':
    'https://leetcode.com/problems/palindromic-substrings/',
  'regular-expression-matching':
    'https://leetcode.com/problems/regular-expression-matching/',
  'combination-sum-ii': 'https://leetcode.com/problems/combination-sum-ii/',
  permutations: 'https://leetcode.com/problems/permutations/',
  'permutations-ii': 'https://leetcode.com/problems/permutations-ii/',
  subsets: 'https://leetcode.com/problems/subsets/',
  'subsets-ii': 'https://leetcode.com/problems/subsets-ii/',
  'letter-combinations-of-phone-number':
    'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
  'longest-valid-parentheses':
    'https://leetcode.com/problems/longest-valid-parentheses/',
  'maximal-rectangle': 'https://leetcode.com/problems/maximal-rectangle/',
  'minimum-window-subsequence':
    'https://leetcode.com/problems/minimum-window-subsequence/',
  'median-of-two-sorted-arrays':
    'https://leetcode.com/problems/median-of-two-sorted-arrays/',
  'wildcard-matching': 'https://leetcode.com/problems/wildcard-matching/',
  'text-justification': 'https://leetcode.com/problems/text-justification/',
  'first-missing-positive':
    'https://leetcode.com/problems/first-missing-positive/',
  'largest-rectangle-in-histogram':
    'https://leetcode.com/problems/largest-rectangle-in-histogram/',
};

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
        url: 'https://leetcode.com/problems/container-with-most-water/',
      },
      {
        name: 'Trapping Rain Water',
        frequency: 'Very High',
        fileName: 'trapping-rain-water',
        url: 'https://leetcode.com/problems/trapping-rain-water/',
      },
      {
        name: '3Sum',
        frequency: 'Very High',
        fileName: '3sum',
        url: 'https://leetcode.com/problems/3sum/',
      },
      {
        name: 'Longest Substring Without Repeating Characters',
        frequency: 'Very High',
        fileName: 'longest-substring-without-repeating-characters',
        url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
      },
      {
        name: 'Minimum Window Substring',
        frequency: 'Very High',
        fileName: 'minimum-window-substring',
        url: 'https://leetcode.com/problems/minimum-window-substring/',
      },
      {
        name: 'Subarray Sum Equals K',
        frequency: 'Very High',
        fileName: 'subarray-sum-equals-k',
        url: 'https://leetcode.com/problems/subarray-sum-equals-k/',
      },
      // High Frequency
      {
        name: 'Sliding Window Maximum',
        frequency: 'High',
        fileName: 'sliding-window-maximum',
        url: 'https://leetcode.com/problems/sliding-window-maximum/',
      },
      {
        name: 'Product of Array Except Self',
        frequency: 'High',
        fileName: 'product-of-array-except-self',
        url: 'https://leetcode.com/problems/product-of-array-except-self/',
      },
      {
        name: 'Group Anagrams',
        frequency: 'High',
        fileName: 'group-anagrams',
        url: 'https://leetcode.com/problems/group-anagrams/',
      },
      {
        name: 'Decode String',
        frequency: 'High',
        fileName: 'decode-string',
        url: 'https://leetcode.com/problems/decode-string/',
      },
      {
        name: 'Longest Palindromic Substring',
        frequency: 'High',
        fileName: 'longest-palindromic-substring',
        url: 'https://leetcode.com/problems/longest-palindromic-substring/',
      },
      {
        name: 'String to Integer (atoi)',
        frequency: 'High',
        fileName: 'string-to-integer-atoi',
        url: 'https://leetcode.com/problems/string-to-integer-atoi/',
      },
      {
        name: 'Longest Consecutive Sequence',
        frequency: 'High',
        fileName: 'longest-consecutive-sequence',
        url: 'https://leetcode.com/problems/longest-consecutive-sequence/',
      },
      {
        name: 'Valid Parentheses',
        frequency: 'High',
        fileName: 'valid-parentheses',
        url: 'https://leetcode.com/problems/valid-parentheses/',
      },
      {
        name: 'Generate Parentheses',
        frequency: 'High',
        fileName: 'generate-parentheses',
        url: 'https://leetcode.com/problems/generate-parentheses/',
      },
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
document.addEventListener('DOMContentLoaded', async function () {
  await checkProblemsStatus();
  renderProblems();
  setupEventListeners();
  updateStats();
});

// Check which problems have implementations
async function checkProblemsStatus() {
  for (const [categoryKey, categoryData] of Object.entries(problemsData)) {
    const paths = categoryPaths[categoryKey];

    for (const problem of categoryData.problems) {
      const status = await checkProblemImplementation(problem.fileName, paths);
      problemsStatus[problem.fileName] = status;
    }
  }
}

// Check if a problem has either Python or Node.js implementation and if tests pass
async function checkProblemImplementation(fileName, possiblePaths) {
  try {
    // First try the API server
    const nodeResponse = await fetch(`/api/check-implementation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fileName,
        language: 'nodejs',
        paths: possiblePaths,
      }),
    });

    if (nodeResponse.ok) {
      const nodeResult = await nodeResponse.json();
      if (nodeResult.exists) {
        return nodeResult.testsPass ? 'completed' : 'attempted';
      }
    }

    // Check for Python implementation
    const pythonResponse = await fetch(`/api/check-implementation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fileName,
        language: 'python',
        paths: possiblePaths,
      }),
    });

    if (pythonResponse.ok) {
      const pythonResult = await pythonResponse.json();
      if (pythonResult.exists) {
        return pythonResult.testsPass ? 'completed' : 'attempted';
      }
    }

    return 'not-completed';
  } catch (error) {
    console.warn(`API not available, using fallback for ${fileName}:`, error);
    return 'not-completed';
  }
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

  // Use actual LeetCode URL from question bank
  const leetcodeUrl =
    problemUrls[problem.fileName] || generateLeetCodeUrl(problem.name);

  div.innerHTML = `
        <div class="status-icon ${status}"></div>
        <div class="problem-title">
            <a href="${leetcodeUrl}" target="_blank" rel="noopener noreferrer" class="problem-link">
                ${problem.name} 🔗
            </a>
        </div>
        <div class="problem-frequency">Frequency: ${problem.frequency}</div>
        <div class="problem-implementations">
            ${implementations}
        </div>
    `;

  return div;
}

// Generate LeetCode URL from problem name
function generateLeetCodeUrl(problemName) {
  // Convert problem name to LeetCode URL format
  const urlSlug = problemName
    .toLowerCase()
    .replace(/[()]/g, '') // Remove parentheses
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove special characters except hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens

  return `https://leetcode.com/problems/${urlSlug}/`;
}

// Get implementation tags for a problem
function getImplementationTags(fileName) {
  const status = problemsStatus[fileName];

  if (status === 'completed') {
    return '<span class="implementation-tag python-tag">Tests Pass ✓</span>';
  } else if (status === 'attempted') {
    return '<span class="implementation-tag nodejs-tag">Tests Fail ⚠️</span>';
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
  const attempted = allProblems.filter(
    (p) => problemsStatus[p.fileName] === 'attempted',
  ).length;
  const total = allProblems.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  document.getElementById('total-problems').textContent = total;
  document.getElementById('completed-count').textContent = completed;
  document.getElementById('completion-percentage').textContent =
    percentage + '%';

  // Add attempted count to header stats
  const headerStats = document.querySelector('.stats');
  let attemptedStat = document.getElementById('attempted-count');
  if (!attemptedStat) {
    const attemptedItem = document.createElement('div');
    attemptedItem.className = 'stat-item';
    attemptedItem.innerHTML = `
      <span class="stat-number" id="attempted-count">${attempted}</span>
      <span class="stat-label">Attempted</span>
    `;
    headerStats.insertBefore(attemptedItem, headerStats.children[2]);
  } else {
    attemptedStat.textContent = attempted;
  }
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
