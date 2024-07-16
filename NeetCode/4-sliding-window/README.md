# Sliding Window Pattern
Sliding Window Pattern: use when you need to maintain a subset of elements in an array or string and efficiently calculate a result based on that subset.

The Sliding Window pattern involves creating a window of a certain size that moves across the array or string. This pattern is useful for problems where you need to find a substring, subarray, or any other contiguous segment of elements that satisfies certain conditions. It optimizes time complexity by reducing unnecessary re-computation through the sliding mechanism.

# Explanation of the Pattern
The Sliding Window pattern typically uses two pointers to define the current window and expands or contracts it based on the problem's requirements. By sliding the window from the beginning to the end of the array or string, you can efficiently find the desired subset. This pattern is commonly used in problems involving strings, arrays, or linked lists.

# Key Concepts
* Window: Defines the subset of elements being considered.
* Expand/Contract: Adjust the window size based on conditions.
* Calculate Result: Efficiently compute results based on the window.
* Avoid Redundancy: Minimize unnecessary recalculations.

# When to Use This Pattern
* Finding a substring or subarray with a maximum/minimum value
* Longest substring without repeating characters
* Fixed-size sliding window problems
* Problems requiring a dynamic window size based on conditions

# Common Use Cases and Approaches
1. Maximum Sum Subarray of Size K
* Initialize the sum of the first K elements.
* Slide the window by adding the next element and subtracting the first element of the previous window.
Time Complexity: O(n), Space Complexity: O(1)

2. Longest Substring Without Repeating Characters
* Use a hashmap to track characters and their positions.
* Adjust the window boundaries based on duplicate characters.
Time Complexity: O(n), Space Complexity: O(min(m, n)) where m is the size of the character set.

3. Fixed-size Sliding Window Median
* Use two heaps (max-heap and min-heap) to maintain the elements within the window.
* Adjust the window by adding and removing elements based on the median condition.
Time Complexity: O(n log k), Space Complexity: O(k)

4. Minimum Window Substring
* Use two pointers to expand and contract the window until finding a valid substring.
* Adjust the window size based on character frequencies.
Time Complexity: O(n), Space Complexity: O(m) where m is the number of unique characters in the pattern.