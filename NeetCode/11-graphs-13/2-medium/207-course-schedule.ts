/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const visited: number[] = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited

  // Build adjacency list
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
  }

  function dfs(course: number): boolean {
    if (visited[course] === 1) return false; // cycle detected
    if (visited[course] === 2) return true;  // already checked

    visited[course] = 1; // mark as visiting

    for (const neighbor of graph[course]) {
      if (!dfs(neighbor)) return false; // propagate cycle detection
    }

    visited[course] = 2; // mark as visited
    return true;
  }

  // Check each course
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

function canFinish2(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const indegree: number[] = new Array(numCourses).fill(0);

  // Build adjacency list and indegree array
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
    indegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let visitedCount = 0;
  while (queue.length > 0) {
    const course = queue.shift()!;
    visitedCount++;

    for (const neighbor of graph[course]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return visitedCount === numCourses;
}
