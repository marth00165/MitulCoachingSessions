/**
 * Problem: Course Schedule
 *
 * Description:
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must
 * take course bi first if you want to take course ai. Return true if you can finish all courses,
 * otherwise return false.
 *
 * Algorithm Logic (DFS Cycle Detection):
 * This solution uses Depth-First Search with cycle detection on a directed graph:
 *
 * KEY INSIGHT: The problem is equivalent to detecting cycles in a directed graph.
 * If there's a cycle in the prerequisite graph, it's impossible to complete all courses.
 * If no cycles exist, all courses can be completed.
 *
 * STEPS:
 * 1. Build adjacency list representation of the prerequisite graph
 * 2. For each course, perform DFS to detect cycles
 * 3. Use a visited set to track current path (detects back edges = cycles)
 * 4. Use memoization: clear prerequisites of processed courses (optimization)
 * 5. If any cycle is found, return false; otherwise return true
 *
 * Example with courses: numCourses=4, prerequisites=[[1,0],[2,1],[3,2]]
 *
 * Step 1: Build graph:
 * Course 0: [] (no prerequisites)
 * Course 1: [0] (requires course 0)
 * Course 2: [1] (requires course 1)
 * Course 3: [2] (requires course 2)
 *
 * Step 2: DFS from each course:
 * DFS(0): No prerequisites → return false (no cycle)
 * DFS(1): Check prerequisite 0 → DFS(0) → return false (no cycle)
 * DFS(2): Check prerequisite 1 → DFS(1) → return false (no cycle)
 * DFS(3): Check prerequisite 2 → DFS(2) → return false (no cycle)
 * Result: No cycles found → return true
 *
 * Cycle example: prerequisites=[[1,0],[0,1]]
 * Course 0: [1] (requires course 1)
 * Course 1: [0] (requires course 0)
 * DFS(0) → DFS(1) → DFS(0) → cycle detected → return false
 *
 * Alternative: Topological Sort using Kahn's algorithm:
 * Use in-degree counting and BFS. If we can process all nodes, no cycle exists.
 * Similar time complexity but different approach.
 *
 * Time Complexity: O(V + E) - visit each course and prerequisite once
 * Space Complexity: O(V + E) - adjacency list storage + recursion stack
 *
 * Tags: #graph #dfs #cycle-detection #topological-sort #medium
 * URL: https://leetcode.com/problems/course-schedule/
 */

class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {boolean}
   */
  canFinish(numCourses, prerequisites) {
    // Build adjacency list graph representation
    let adjGraph = new Map();
    let visited = new Set();

    // Initialize graph with empty prerequisite lists
    for (let i = 0; i < numCourses; i++) {
      adjGraph.set(i, []);
    }

    // Populate graph with prerequisites
    for (let [course, req] of prerequisites) {
      adjGraph.get(course).push(req);
    }

    /**
     * DFS function to detect cycles starting from given course
     * @param {number} course - Current course to check
     * @return {boolean} - True if cycle detected, false otherwise
     */
    function detectCycle(course) {
      // If course is in current path, we found a cycle (back edge)
      if (visited.has(course)) return true;

      // If course has no prerequisites, no cycle possible
      if (adjGraph.get(course).length === 0) return false;

      // Add course to current path
      visited.add(course);

      // Check all prerequisites for cycles
      for (let req of adjGraph.get(course)) {
        if (detectCycle(req)) {
          return true;
        }
      }

      // Remove course from current path (backtrack)
      visited.delete(course);

      // Optimization: clear prerequisites (memoization)
      // If we reach here, this course has no cycles
      adjGraph.set(course, []);

      return false;
    }

    // Check each course for cycles
    for (let i = 0; i < numCourses; i++) {
      if (detectCycle(i)) {
        return false;
      }
    }

    return true;
  }
}

// Test cases
function test() {
  const solution = new Solution();

  // Test case 1: Simple valid schedule [1,0] - take course 0 first, then 1
  let result1 = solution.canFinish(2, [[1, 0]]);
  console.assert(
    result1 === true,
    'Test 1 failed: Expected true, got ' + result1,
  );

  // Test case 2: Circular dependency [1,0], [0,1] - impossible
  let result2 = solution.canFinish(2, [
    [1, 0],
    [0, 1],
  ]);
  console.assert(
    result2 === false,
    'Test 2 failed: Expected false, got ' + result2,
  );

  // Test case 3: Chain of prerequisites - 3→2→1→0
  let result3 = solution.canFinish(4, [
    [1, 0],
    [2, 1],
    [3, 2],
  ]);
  console.assert(
    result3 === true,
    'Test 3 failed: Expected true, got ' + result3,
  );

  // Test case 4: Complex valid graph with multiple paths
  let result4 = solution.canFinish(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
  console.assert(
    result4 === true,
    'Test 4 failed: Expected true, got ' + result4,
  );

  // Test case 5: No prerequisites - all courses independent
  let result5 = solution.canFinish(3, []);
  console.assert(
    result5 === true,
    'Test 5 failed: Expected true, got ' + result5,
  );

  // Test case 6: Complex cycle - 0→1→2→3→1 (cycle between 1,2,3)
  let result6 = solution.canFinish(4, [
    [1, 0],
    [2, 1],
    [3, 2],
    [1, 3],
  ]);
  console.assert(
    result6 === false,
    'Test 6 failed: Expected false, got ' + result6,
  );

  // Test case 7: Single course
  let result7 = solution.canFinish(1, []);
  console.assert(
    result7 === true,
    'Test 7 failed: Expected true, got ' + result7,
  );

  // Test case 8: Self-dependency (course depends on itself)
  let result8 = solution.canFinish(1, [[0, 0]]);
  console.assert(
    result8 === false,
    'Test 8 failed: Expected false, got ' + result8,
  );

  console.log('✅ All Course Schedule test cases passed!');
}

// Run tests
test();

module.exports = { Solution };
