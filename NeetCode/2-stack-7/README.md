# Stack Pattern
Stack Pattern: use when you need to manage a collection of elements with last-in, first-out (LIFO) access.

Stacks are used to solve problems where elements need to be processed in a particular order, typically where the last element added needs to be the first one removed. This pattern is particularly useful in scenarios involving recursion, balancing symbols (like parentheses), and maintaining a history of previous states.

# Explanation of the Pattern
A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Elements can be added to the top of the stack using a push operation and removed from the top using a pop operation. This structure is ideal for tasks where you need to reverse the order of elements or backtrack to previous states.

# Key Concepts
* LIFO Principle: Last In, First Out order of processing elements.
* Push Operation: Adding an element to the top of the stack.
* Pop Operation: Removing the element from the top of the stack.
* Peek Operation: Viewing the top element without removing it.
* Empty Check: Checking if the stack is empty.

# When to Use This Pattern
* Managing recursive function calls
* Balancing symbols in expressions (e.g., parentheses, brackets)
* Implementing undo functionality
* Traversing trees or graphs using depth-first search

# Common Use Cases and Approaches
1. Balancing Symbols
* Push opening symbols onto the stack.
* Pop the stack when a closing symbol is encountered and check for a match.
* Ensure the stack is empty at the end.
Time Complexity: O(n), Space Complexity: O(n)

2. Reverse a String
* Push all characters of the string onto the stack.
* Pop characters from the stack to form the reversed string.
Time Complexity: O(n), Space Complexity: O(n)

3. Implementing Undo Functionality
* Push actions onto the stack as they are performed.
* Pop actions from the stack to undo them.
Time Complexity: O(1) per operation, Space Complexity: O(n)

4. Depth-First Search (DFS) in Trees/Graphs
* Push the initial node onto the stack.
* Pop the stack to get the current node and push its children/neighbors onto the stack.
* Continue until the stack is empty.
Time Complexity: O(V + E) for graphs, O(n) for trees, Space Complexity: O(V) for graphs, O(h) for trees (where h is the height of the tree)

Strategy:
const hint1 = "I need to access reverse orders or check balanced structures (LIFO)"
const hint2 = "I need to process elements while maintaining order (monotonic stack, next greater element)"
const hint3 = "I need to backtrack or undo previous steps (DFS, path, simulation)"

let input: T[]

// Big picture decision tree
if (problem.req.has(balancedSymbols) || problem.req.has(nestingValidation)) {
    useStackValidation(input);
} else if (problem.req.has(nextGreater) || problem.requires(maintainIncreasingOrDecreasingOrder)) {
    useMonotonicStack(input);
} else if (problem.requires(backtracking) || problem.req.has(simulationOfSteps) || problem.req.has(history) || problem.req.has(undo)) {
    useSimulationStack(input);
} else if (problem.req.has(graphTraversal)) {
    useDFSWithStack(input);
}

const useStackValidation = (input) => {
    // If you need to check if symbols or nested structures are valid/matching
    let stack = []; // Create an empty stack
    for (let char of input) {
        if (char.isOpeningSymbol()) { 
            stack.push(char); // For every char, if it's an opening symbol, push to the stack
        } else if (char.isClosingSymbol()) { // If it's a closing symbol...
            if (!stack.length || !char.pairsWith(stack.pop())) { return false }; // Check whether 
            //input exceeds the stack length (empty), or pop the last stack value and check whether 
            //it pairs with the closing symbol
        }
    }
    return stack.length === 0; // If you got this far, check if input exceeds stack length for answer
}

const useMonotonicStack = (nums) => {
    // If you need the next greater/smaller element, or to maintain increasing/decreasing structure
    // In this case, find the next greater number for every elem in nums
    let answer = new Array(nums.length).fill(-1) // Create an empty answer arr and fill with -1's
    let stack = []; // Create empty stack

    for (let i = 0; i < nums.length; i++) { // For each elem in the nums...
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) { // While the stack is 
        //not empty and the current elem is greater than the (previous) elem at the index stored as 
        //the last index in the stack (the current highest elem)...
            let idx = stack.pop(); // Pop the stack
            answer[idx] = nums[i]; // This elem is the next highest num for this "earlier" index 
            // If stack is not empty, run the while loop again on the same nums elem 
            //and the elem in the last index of the stack
        }
        stack.push(i) // Otherwise, push the current elem's index to the stack
    }
    return answer

    /* Example ending arrays
    nums = [100, 2, 3, 200, 4]
    stack = [3, 4]
    answer = [200, 3, 200, -1, -1]
    idx = 0
    */
}

const useSimulationStack = (steps) => {
    // For path problems, "backspace string compare," browser history, or undo operations
    let stack = []; // Create an empty stack
    for (let step of steps) {
        if (step === "undo") { 
            stack.pop(); // For each step of steps, if the step is "undo", pop the step from stack
        } else {
            stack.push(step); // Otherwise, push the step to the stack
        }
    }
    return stack.join(""); // Join the steps that remain after the "undo" actions
}

const useDFSWithStack = (graph, startNode) => {
    // For graph/tree traversal when recursion may be too deep
    // Ex. return the preorder traversal of a binary tree's node values
    let stack = [startNode]; // Create an array filled with a starting node
    let visited = new Set(); // Create an empty Set (values are unique so prevents cycles)

    while (stack.length) {
        let node = stack.pop(); // Processes the last discovered node
        if (visited.has(node)) continue; // While stack isn't empty, pop it and check if 
        //visited already has the popped node. If so, restart the while loop.
        visited.add(node); // If visited doesn't already have node, add it, then...
        for (let neighbor of graph[node]) {
            stack.push(neighbor); // For each neighbor of the graph at node, push it to the stack
            //and then at the end restart the while loop
        }
    }
}


Quick Tools:
* Push
* Pop
* Peek
* .length check for emptiness
* Check value at the top of the stack: stack[stack.length - 1]
* Check if time to perform logic on a token in the array:
    for (let token of tokens) {
        if (token in map) {
            let top = stack.pop();
            // Logic
        } else {
            stack.push(token);
        }
    }

Quick Summary:
1. **Stack validation**: balanced symbols or nesting validation
2. **Monotonic stack**: Next greater/smaller element, or maintain increasing/decreasing structure
3. **Simulation stack**: Backtracking, Simulation of steps, History, or Undo
4. **DFS with stack**: Graph/tree traversal
