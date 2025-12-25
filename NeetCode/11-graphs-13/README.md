# Graphs Pattern
Graphs Pattern: use when you need to represent and traverse relationships between objects in a complex network.

The Graphs pattern involves modeling connections (edges) between entities (vertices or nodes) in a network. This pattern is essential for problems requiring pathfinding, traversal, and analysis of relationships between elements. It optimizes operations like traversal and shortest path calculations compared to other data structures.

# Explanation of the Pattern
A Graph consists of a set of vertices and edges connecting pairs of vertices. Depending on the problem, graphs can be directed (edges have a direction) or undirected (edges have no direction). Operations involve traversing nodes, discovering connected components, finding paths, and analyzing properties like cycles or connectivity.

# Key Concepts
* Vertices and Edges: Nodes and connections representing objects and relationships.
* Directed and Undirected Graphs: Differences in edge directionality affecting traversal.
* Traversal Algorithms: Methods for visiting nodes (e.g., depth-first search, breadth-first search).
* Shortest Path Algorithms: Techniques to find the shortest path between nodes (e.g., Dijkstra's algorithm, Bellman-Ford algorithm).
* Cycle Detection: Identifying cycles within graphs to prevent infinite loops.

# When to Use This Pattern
* Modeling relationships in social networks, maps, or computer networks.
* Pathfinding in GPS navigation systems or network routing.
* Analyzing dependencies between tasks or processes in scheduling problems.
* Problems involving connectivity, flow, or reachability in networks.

# Common Use Cases and Approaches
1. Depth-First Search (DFS)
* Traverse graph nodes depth-wise, recursively or iteratively.
* Adjust traversal strategies based on problem requirements (e.g., detecting cycles).
Time Complexity: O(V + E), Space Complexity: O(V) where V is the number of vertices and E is the number of edges.

2. Breadth-First Search (BFS)
* Traverse graph nodes level by level, using a queue.
* Adjust queue operations to explore neighbors breadth-wise.
Time Complexity: O(V + E), Space Complexity: O(V).

3. Shortest Path in Weighted Graphs (Dijkstra's Algorithm)
* Find the shortest path from a source node to all other nodes.
* Adjust priority queue operations based on edge weights.
Time Complexity: O((V + E) log V) using a priority queue, Space Complexity: O(V).

4. Minimum Spanning Tree (Prim's Algorithm)
* Find the minimum weight spanning tree for a connected, weighted graph.
* Adjust heap operations to select and add edges with minimum weight.
Time Complexity: O(E log V), Space Complexity: O(V + E).

Strategy:
const hint1 = "The input describes connections/relationships (edges) between entities (nodes)";
const hint2 = "The problem asks about reachability, connectivity, or paths";
const hint3 = "The problem mentions islands, courses, prerequisites, or networks";
const hint4 = "The solution requires exploring neighbors step-by-step or layer-by-layer";
const hint5 = "The problem mentions cycles or detecting loops";

// Big picture decision tree
if (problem.requires(findingShortestPath)) {
    if (problem.req.has(weightedGraph)) {
        use0_1BFS(); // Variant of useBFS()
    } else {
        useBFS();
    }
} else if (problem.requires(detectingCycle)) {
    if (problem.req.has(directedGraph)) {
        useDFSWithRecStack();
    } else {
        useUnionFind() || useDFS();
    }
} else if (problem.requires(topologicalOrdering)) {
    useKahnBFS() || useDFS();
} else if (problem.requires(checkingIfConnected) || problem.requires(countingConnectedComponents)) {
    useDFS() || useBFS();
}

const useDFS = (node: number, graph: Map<number, number[]>, visited: Set<number>): void => {
    // If I need answer if I can reach X from Y? Is there a path? Or count connected components

    if (visited.has(node)) return; // Already visited, return early

    visited.add(node); // Mark node as visited

    for (const nei of graph.get(node) || []) {
        useDFS(nei, graph, visited); // Recursively explore neighbors
    }
}

const useBFS = (start: number, graph: Map<number, number[]>): number[] => {
    // If the problem asks "shortest path in unweighted group" or requires layer by layer expansion

    const queue: number[] = [start]; // Queue to process nodes
    const visited = new Set<number>([start]);
    const order: number[] = []; // Record visitation order (optional)

    while (queue.length > 0) {
        const node = queue.shift()!; // Save first queue node and remove it
        order.push(node); // Push node to order array

        for (const nei of graph.get(node) || []) {
            if (!visited.has(nei)) {
                visited.add(nei); // If node hasn't been added to visited, add it
                queue.push(nei); // Push node to queue;
            }
        }
    }
    return order;
}

const useUnionFind = () => {
    // If the problem asks "detect cycles in an undirected graph" or "check if nodes are in same component"

    class UnionFind {
        parent: number[];
        rank: number[];

        constructor(size: number) {
            this.parent = Array.from({ length: size }, (_, i) => i);
            this.rank = Array(size).fill(1); // Create an array of sizes and fill with 1's
        }

        find (x: number): number {
            if (this.parent[x] !== x) {
                this.parent[x] = this.find(this.parent[x]); // Path compression
            }
            return this.parent[x];
        }

        union(x: number, y: number): boolean {
            const rootX = this.find(x);
            const rootY = this.find(y);

            if (rootX === rootY) return false; // Already connected, cycle detected

            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX; // If x > y, make x the parent of y
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY; // If y > x, make y the parent of x
            } else {
                this.parent[rootY] = rootX; // Otherwise, make x the parent of y and increase x's rank
                this.rank[rootX]++;
            }
            return true;
        }
    }
}

const useDFSWithRecStack = (node: number, graph: Map<number, number[]>, visited: Set<number>, stack: Set<number>): boolean => {
    // If problem asks to detect cycle in a directed graph
    
    if (stack.has(node)) return true; // Cycle found, return early
    if (visited.has(node)) return false;

    visited.add(node);
    stack.add(node); // Mark current path

    for (const nei of graph.get(node) || []) {
        if (useDFSWuthRecStack(nei, graph, visited, stack)) {
            return true; // For each part of the graph's node, recursively search for the cycle
        }
    }

    stack.delete(node); // Backtrack
    return false;
}

const useKahnBFS = (numNodes: number, edges: number[][]): number[] => {
    // If problem asks to order tasks/courses so prerequisites are respected

    const graph = new Map<number, number[]>();
    const indegree = new Array(numNodes).fill(0);

    // Build graph and indegree
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        graph.get(u)!.push(v);
        indegree[v]++;
    }

    // Init queue with nodes that have no prereqs
    const queue: number[] = [];
    for (let i = 0; i < numNodes; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    const order: number[] = [];
    while (queue.length > 0) {
        const node = queue.shift()!; // Grab the first node in the queue and remove it
        order.push(node); // Push the node to order

        for (const nei of graph.get(node) || []) {
            indegree[nei]--; // Decrement the graph node value's indegree
            if (indegree[nei] === 0) queue.push(nei);
        }
    }
    return order; // Returns valid ordering
}