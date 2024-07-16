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