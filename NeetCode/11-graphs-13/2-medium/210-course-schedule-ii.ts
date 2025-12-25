/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
Example 2:

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
Example 3:

Input: numCourses = 1, prerequisites = []
Output: [0]
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
All the pairs [ai, bi] are distinct.
 */

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const visited: number[] = new Array(numCourses).fill(0); // 0 = unvisited, 1 = visiting, 2 = visited
  const result: number[] = [];

  // Build adjacency list
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
  }

  function dfs(course: number): boolean {
    if (visited[course] === 1) return false; // cycle detected
    if (visited[course] === 2) return true;  // already visited

    visited[course] = 1; // mark as visiting

    for (const neighbor of graph[course]) {
      if (!dfs(neighbor)) return false; // propagate cycle detection
    }

    visited[course] = 2; // mark as visited
    result.push(course); // postorder addition
    return true;
  }

  // Visit all courses
  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0) {
      if (!dfs(i)) return []; // cycle detected
    }
  }

  // Reverse postorder gives topological sort
  return result.reverse();
}

function findOrder2(numCourses: number, prerequisites: number[][]): number[] {
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

  const result: number[] = [];
  while (queue.length > 0) {
    const course = queue.shift()!;
    result.push(course);

    for (const neighbor of graph[course]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return result.length === numCourses ? result : [];
}
