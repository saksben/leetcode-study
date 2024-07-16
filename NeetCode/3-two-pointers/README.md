# Two Pointers Pattern
Two Pointers Pattern: use when you need to traverse an array or list from both ends or with multiple indices.

The Two Pointers pattern involves using two distinct pointers to iterate through an array or list, either from both ends towards the center or at different speeds. This pattern is useful for solving problems related to searching, sorting, or comparing elements in a collection, and can often optimize time complexity by reducing the need for nested loops.

# Explanation of the Pattern
The Two Pointers pattern typically involves two pointers starting at different positions (e.g., beginning and end, or two pointers moving at different speeds). By adjusting the pointers based on certain conditions, this approach can solve problems more efficiently than traditional methods. This pattern is particularly useful for problems involving sorted arrays or linked lists.

# Key Concepts
* Two Pointers: Typically start at different positions.
* Increment/Decrement: Move pointers towards each other or at different rates.
* Comparison: Use conditions to determine pointer movement.
* Efficiency: Reduces the need for nested loops, improving time complexity.

# When to Use This Pattern
* Finding pairs in a sorted array
* Removing duplicates from a sorted array
* Checking for a palindrome
* Merging two sorted arrays or lists

# Common Use Cases and Approaches
1. Finding Pairs with a Specific Sum
* Initialize two pointers at the start and end of the array.
* Move pointers towards each other based on the sum comparison.
Time Complexity: O(n), Space Complexity: O(1)

2. Removing Duplicates from a Sorted Array
* Use one pointer to track the position of the next unique element.
* Use the other pointer to iterate through the array.
Time Complexity: O(n), Space Complexity: O(1)

3. Checking for a Palindrome
* Initialize two pointers at the start and end of the string.
* Move pointers towards the center, comparing characters.
Time Complexity: O(n), Space Complexity: O(1)

4. Merging Two Sorted Arrays
* Initialize pointers at the start of both arrays.
* Compare elements and add the smaller element to the merged array.
Time Complexity: O(n + m), Space Complexity: O(n + m)