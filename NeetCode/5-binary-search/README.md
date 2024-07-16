# Binary Search Pattern
Binary Search Pattern: use when you need to efficiently find a target value within a sorted array or list of elements.

The Binary Search pattern divides the search space in half with each step, making it highly efficient for problems where the elements are sorted. This pattern is particularly useful for minimizing the number of comparisons needed to find a target element or determine its absence.

# Explanation of the Pattern
Binary Search operates by repeatedly dividing the search interval in half. It compares the target value with the middle element of the array and adjusts the search range based on whether the target is greater than, less than, or equal to the middle element. This approach drastically reduces the search space with each comparison.

# Key Concepts
* Sorted Array: Requires elements to be sorted for efficient searching.
* Divide and Conquer: Breaks down the search space into smaller parts.
* Efficiency: Logarithmic time complexity, O(log n), for searching.
* Iterative or Recursive Implementation: Can be implemented using either approach based on preference.

# When to Use This Pattern
* Searching in a sorted array or list
* Finding boundaries (e.g., first occurrence, last occurrence)
* Optimizing problems with a logarithmic time complexity requirement

# Common Use Cases and Approaches
1. Finding an Element in a Sorted Array
* Initialize pointers for the start and end of the array.
* Adjust pointers based on comparisons with the middle element.
Time Complexity: O(log n), Space Complexity: O(1)

2. Search Insert Position
* Find the position where the target value would be inserted to maintain sorted order.
* Adjust pointers based on comparisons with the middle element.
Time Complexity: O(log n), Space Complexity: O(1)

3. Finding Peak Element
* Determine any peak element in an array that is larger than its neighbors.
* Adjust pointers based on comparisons with neighboring elements.
Time Complexity: O(log n), Space Complexity: O(1)

4. Finding Rotated Sorted Array
* Locate the smallest element in a rotated sorted array.
* Adjust pointers based on comparisons with the middle element and adjacent elements.
Time Complexity: O(log n), Space Complexity: O(1)