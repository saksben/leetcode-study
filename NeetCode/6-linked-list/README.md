# Linked List Pattern
Linked List Pattern: use when you need to manipulate or traverse elements in a linked list efficiently.

The Linked List pattern involves operations on a linear data structure where each element points to the next. This pattern is useful for problems where direct access to elements isn't required, and insertion and deletion operations are frequent. It optimizes time complexity for certain operations compared to arrays, especially when dealing with dynamic data structures.

# Explanation of the Pattern
A Linked List consists of nodes where each node contains a data field and a reference (or link) to the next node in the sequence. Operations involve traversing the list from the head node to the desired node, inserting or deleting nodes, and manipulating pointers to maintain list integrity.

# Key Concepts
* Node: Basic unit containing data and a pointer to the next node.
* Head and Tail: Pointers to the first and last nodes of the list, respectively.
* Traversal: Iterating through nodes from head to tail or vice versa.
* Insertion and Deletion: Operations that adjust pointers to maintain list structure.

# When to Use This Pattern
* Handling dynamic data where size may change frequently.
* Implementing stacks, queues, or other data structures using linked lists.
* Problems requiring efficient insertion or deletion operations.

# Common Use Cases and Approaches
1. Reverse a Linked List
* Use three pointers to reverse links between nodes iteratively.
* Adjust pointers to reverse the direction of traversal.
Time Complexity: O(n), Space Complexity: O(1)

2. Detect Cycle in a Linked List
* Use two pointers (slow and fast) to detect if there's a cycle in the linked list.
* Adjust pointers based on their movement speed to detect overlapping.
Time Complexity: O(n), Space Complexity: O(1)

3. Merge Two Sorted Linked Lists
* Recursively or iteratively merge two sorted linked lists into one.
* Adjust pointers to link nodes based on their values.
Time Complexity: O(n + m), Space Complexity: O(1)

4. Remove Nth Node From End of List
* Use two pointers to find and remove the nth node from the end of the linked list.
* Adjust pointers to maintain proper links after removal.
Time Complexity: O(n), Space Complexity: O(1)