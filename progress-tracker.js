// Algorithm Progress Tracker - Simplified Static Version

// Manual progress tracking - update this list as you complete problems
const problems = {
  arrays: [
    {
      name: 'Two Sum',
      url: 'https://leetcode.com/problems/two-sum/',
      status: 'completed',
      frequency: 'Very High',
    },
    {
      name: 'Two Sum II',
      url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
      status: 'completed',
      frequency: 'High',
    },
    {
      name: 'Three Sum',
      url: 'https://leetcode.com/problems/3sum/',
      status: 'completed',
      frequency: 'Very High',
    },
    {
      name: 'Trapping Rain Water',
      url: 'https://leetcode.com/problems/trapping-rain-water/',
      status: 'completed',
      frequency: 'Very High',
    },
    {
      name: 'Container With Most Water',
      url: 'https://leetcode.com/problems/container-with-most-water/',
      status: 'not-completed',
      frequency: 'Very High',
    },
    {
      name: 'Product of Array Except Self',
      url: 'https://leetcode.com/problems/product-of-array-except-self/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Maximum Subarray',
      url: 'https://leetcode.com/problems/maximum-subarray/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Merge Intervals',
      url: 'https://leetcode.com/problems/merge-intervals/',
      status: 'not-completed',
      frequency: 'High',
    },
  ],
  strings: [
    {
      name: 'Valid Palindrome',
      url: 'https://leetcode.com/problems/valid-palindrome/',
      status: 'completed',
      frequency: 'High',
    },
    {
      name: 'Longest Substring Without Repeating Characters',
      url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
      status: 'not-completed',
      frequency: 'Very High',
    },
    {
      name: 'Minimum Window Substring',
      url: 'https://leetcode.com/problems/minimum-window-substring/',
      status: 'not-completed',
      frequency: 'Very High',
    },
    {
      name: 'Group Anagrams',
      url: 'https://leetcode.com/problems/group-anagrams/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Longest Palindromic Substring',
      url: 'https://leetcode.com/problems/longest-palindromic-substring/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Valid Parentheses',
      url: 'https://leetcode.com/problems/valid-parentheses/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Generate Parentheses',
      url: 'https://leetcode.com/problems/generate-parentheses/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Decode String',
      url: 'https://leetcode.com/problems/decode-string/',
      status: 'not-completed',
      frequency: 'High',
    },
  ],
  trees: [
    {
      name: 'Number of Islands',
      url: 'https://leetcode.com/problems/number-of-islands/',
      status: 'completed',
      frequency: 'Very High',
    },
    {
      name: 'Binary Tree Inorder Traversal',
      url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Binary Tree Level Order Traversal',
      url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Maximum Depth of Binary Tree',
      url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Validate Binary Search Tree',
      url: 'https://leetcode.com/problems/validate-binary-search-tree/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Lowest Common Ancestor of Binary Tree',
      url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
      status: 'not-completed',
      frequency: 'Very High',
    },
    {
      name: 'Binary Tree Maximum Path Sum',
      url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
      status: 'not-completed',
      frequency: 'Very High',
    },
    {
      name: 'Serialize and Deserialize Binary Tree',
      url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
      status: 'not-completed',
      frequency: 'Very High',
    },
  ],
  graphs: [
    {
      name: 'Clone Graph',
      url: 'https://leetcode.com/problems/clone-graph/',
      status: 'not-completed',
      frequency: 'Very High',
    },
    {
      name: 'Course Schedule',
      url: 'https://leetcode.com/problems/course-schedule/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Word Ladder',
      url: 'https://leetcode.com/problems/word-ladder/',
      status: 'not-completed',
      frequency: 'Very High',
    },
    {
      name: 'Pacific Atlantic Water Flow',
      url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Rotting Oranges',
      url: 'https://leetcode.com/problems/rotting-oranges/',
      status: 'completed',
      frequency: 'High',
    },
  ],
  'dynamic-programming': [
    {
      name: 'Climbing Stairs',
      url: 'https://leetcode.com/problems/climbing-stairs/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Coin Change',
      url: 'https://leetcode.com/problems/coin-change/',
      status: 'not-completed',
      frequency: 'Very High',
    },
    {
      name: 'Longest Increasing Subsequence',
      url: 'https://leetcode.com/problems/longest-increasing-subsequence/',
      status: 'not-completed',
      frequency: 'Very High',
    },
    {
      name: 'Word Break',
      url: 'https://leetcode.com/problems/word-break/',
      status: 'not-completed',
      frequency: 'Very High',
    },
    {
      name: 'House Robber',
      url: 'https://leetcode.com/problems/house-robber/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Edit Distance',
      url: 'https://leetcode.com/problems/edit-distance/',
      status: 'not-completed',
      frequency: 'High',
    },
  ],
  backtracking: [
    {
      name: 'Permutations',
      url: 'https://leetcode.com/problems/permutations/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Subsets',
      url: 'https://leetcode.com/problems/subsets/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Combination Sum',
      url: 'https://leetcode.com/problems/combination-sum/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'N-Queens',
      url: 'https://leetcode.com/problems/n-queens/',
      status: 'not-completed',
      frequency: 'High',
    },
  ],
  searching: [
    {
      name: 'Binary Search',
      url: 'https://leetcode.com/problems/binary-search/',
      status: 'completed',
      frequency: 'High',
    },
    {
      name: 'Search in Rotated Sorted Array',
      url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Find Minimum in Rotated Sorted Array',
      url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
      status: 'not-completed',
      frequency: 'High',
    },
  ],
  'linked-lists': [
    {
      name: 'Singly Linked List',
      url: '#',
      status: 'completed',
      frequency: 'High',
    },
    {
      name: 'Reverse Linked List',
      url: 'https://leetcode.com/problems/reverse-linked-list/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Merge Two Sorted Lists',
      url: 'https://leetcode.com/problems/merge-two-sorted-lists/',
      status: 'not-completed',
      frequency: 'High',
    },
    {
      name: 'Remove Nth Node From End',
      url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
      status: 'not-completed',
      frequency: 'High',
    },
  ],
};

// Map categories for the HTML filter compatibility
const categoryMapping = {
  all: 'all',
  'arrays-strings': ['arrays', 'strings'],
  trees: 'trees',
  graphs: 'graphs',
  'dynamic-programming': 'dynamic-programming',
  backtracking: 'backtracking',
  'additional-hard': [
    'arrays',
    'strings',
    'trees',
    'graphs',
    'dynamic-programming',
  ], // Mix of hardest problems
};

// Initialize the tracker
document.addEventListener('DOMContentLoaded', function () {
  renderProblems();
  updateStats();
  setupEventListeners();
});

function renderProblems() {
  const container = document.getElementById('problems-container');
  const categoryFilter = document.getElementById('category-filter').value;
  const statusFilter = document.getElementById('status-filter').value;
  const searchTerm = document
    .getElementById('search-input')
    .value.toLowerCase();

  container.innerHTML = '';

  // Get categories to display based on filter
  let categoriesToShow = [];
  if (categoryFilter === 'all') {
    categoriesToShow = Object.keys(problems);
  } else if (Array.isArray(categoryMapping[categoryFilter])) {
    categoriesToShow = categoryMapping[categoryFilter];
  } else {
    categoriesToShow = [categoryMapping[categoryFilter]];
  }

  categoriesToShow.forEach((category) => {
    if (!problems[category]) return;

    const categoryProblems = problems[category].filter((problem) => {
      // Apply status filter
      if (statusFilter !== 'all' && problem.status !== statusFilter) {
        return false;
      }

      // Apply search filter
      if (searchTerm && !problem.name.toLowerCase().includes(searchTerm)) {
        return false;
      }

      return true;
    });

    if (categoryProblems.length === 0) {
      return;
    }

    // Create category section
    const categorySection = document.createElement('div');
    categorySection.className = 'category';

    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';

    const categoryTitle = document.createElement('div');
    categoryTitle.className = 'category-title';
    categoryTitle.textContent =
      category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');

    const categoryStats = document.createElement('div');
    categoryStats.className = 'category-stats';
    const completed = categoryProblems.filter(
      (p) => p.status === 'completed',
    ).length;
    const attempted = categoryProblems.filter(
      (p) => p.status === 'attempted',
    ).length;
    const notStarted = categoryProblems.filter(
      (p) => p.status === 'not-completed',
    ).length;
    const total = categoryProblems.length;

    categoryStats.innerHTML = `
      <span>✅ ${completed}</span>
      <span>⚠️ ${attempted}</span>
      <span>❌ ${notStarted}</span>
      <span>📝 ${total}</span>
    `;

    categoryHeader.appendChild(categoryTitle);
    categoryHeader.appendChild(categoryStats);

    const problemsGrid = document.createElement('div');
    problemsGrid.className = 'problems-grid';

    categoryProblems.forEach((problem) => {
      const problemCard = document.createElement('div');
      problemCard.className = `problem-card ${problem.status}`;

      const statusIcon = document.createElement('div');
      statusIcon.className = `status-icon ${problem.status}`;

      const problemTitle = document.createElement('div');
      problemTitle.className = 'problem-title';

      const problemLink = document.createElement('a');
      problemLink.className = 'problem-link';
      problemLink.href = problem.url;
      problemLink.target = '_blank';
      problemLink.rel = 'noopener noreferrer';
      problemLink.textContent = problem.name + ' 🔗';

      problemTitle.appendChild(problemLink);

      const problemFrequency = document.createElement('div');
      problemFrequency.className = 'problem-frequency';
      problemFrequency.textContent = `Frequency: ${problem.frequency}`;

      const problemImplementations = document.createElement('div');
      problemImplementations.className = 'problem-implementations';

      const implementationTag = document.createElement('span');
      implementationTag.className = 'implementation-tag';

      if (problem.status === 'completed') {
        implementationTag.className += ' python-tag';
        implementationTag.textContent = 'Tests Pass ✓';
      } else if (problem.status === 'attempted') {
        implementationTag.className += ' nodejs-tag';
        implementationTag.textContent = 'Tests Fail ⚠️';
      } else {
        implementationTag.className += ' missing-tag';
        implementationTag.textContent = 'Not Implemented';
      }

      problemImplementations.appendChild(implementationTag);

      problemCard.appendChild(statusIcon);
      problemCard.appendChild(problemTitle);
      problemCard.appendChild(problemFrequency);
      problemCard.appendChild(problemImplementations);

      problemsGrid.appendChild(problemCard);
    });

    categorySection.appendChild(categoryHeader);
    categorySection.appendChild(problemsGrid);
    container.appendChild(categorySection);
  });
}

function updateStats() {
  let totalProblems = 0;
  let completedProblems = 0;

  Object.values(problems).forEach((categoryProblems) => {
    totalProblems += categoryProblems.length;
    completedProblems += categoryProblems.filter(
      (p) => p.status === 'completed',
    ).length;
  });

  document.getElementById('total-problems').textContent = totalProblems;
  document.getElementById('completed-count').textContent = completedProblems;
  document.getElementById('completion-percentage').textContent =
    totalProblems > 0
      ? Math.round((completedProblems / totalProblems) * 100) + '%'
      : '0%';
}

function setupEventListeners() {
  document
    .getElementById('category-filter')
    .addEventListener('change', renderProblems);
  document
    .getElementById('status-filter')
    .addEventListener('change', renderProblems);
  document
    .getElementById('search-input')
    .addEventListener('input', renderProblems);
}
