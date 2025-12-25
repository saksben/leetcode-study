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

Strategy:
const hint1 = "I need to compare or combine values at different positions in a sorted array"
const hint3 = "I need to reverse or rearrange elements in place"
const hint4 = "I need to merge or intersect sorted lists"

let input: T[];

// Big picture decision tree
if (problem.req.has(sortedArray) && problem.req.has(targetSumOrPairSearch)) {
    useOppositePointers(input);
} else if (problem.requires(inPlaceReversal)) || problem.req.has(partitioning) {
    useInPlaceSwapPointers(input);
} else if (problem.requires(mergeSorted) || problem.req.has(intersection)) {
    useMergePointers(input);
}

const useOppositePointers = (sortedArray, target) => {
    // If you have a sorted array and need to search for pairs that meet a condition
    // Ex. sum to target
    let l = 0; r = sortedArray.length - 1; // Create pointer indices at opposite ends of the array
    while (l < r) { // While the pointers don't meet...
        let sum = sortedArray[l] + sortedArray[r]; // Add the elems at the pointers
        if (sum === target) {
            return [l, r]; // If the sum is the target, return the elems at the pointers
        } else if (sum < target) {
            l++; // Otherwise, if the sum is less than the target, you must be early so move to right
        } else {
            r--; // Otherwise, sum is more than target, you must be late so move to left
        }
    }
}

const useInPlaceSwapPointers = (arr) => {
    // Reverse arrays/strings, partition around pivot, move zeroes, Dutch National Flag problem
    let l = 0, r = arr.length - 1; // Create pointer indices at opposite ends of array
    while (l < r) {
        let temp = arr[l]; // While the pointers don't meet, set a temp variable as the left pointer
        arr[l] = arr[r]; // Update the left elem as the right elem
        arr[r] = temp; // Update the right elem as the temp variable

        l++; // Move pointers inward
        r--;
    }
}

const mergePointers = (sortedArr1, sortedArr2) => {
    // Merging 2 sorted arrays/lists, intersecting arrays
    let i = 0; j = 0; // Create 2 starting pointers
    let merged = []; // Create an empty array for the final merged array

    while (i < sortedArr1.length && j < sortedArr2.length) { // While passing through both arrays
        if (sortedArr1[i] < sortedArr2[j]) { // Compare the elems (same index)
            merged.push(sortedArr1[i++]); // If i < j, i is smaller (sorted) so push i
            //to merged and restart loop with i + 1
        } else {
            merged.push(sortedArr2[j++]); // Otherwise, j is bigger (sorted) so push j and restart
            //loop with j + 1
        }
    }
    return merged.concat(sortedArr1.slice(i)).concat(sortedArr2.slice(j)); // Concat the merged and
    //sorted elems with any remainder of sortedArr1 and then any remainder of sortedArr2, since
    //they are sorted and one array may be longer than the other
}

Quick Tools:
* .sort()
* While (l < r)
* 2 pointers: let left = 0; let right = nums.length - 1;
* left++, right--
* Temp variable
* i, j
* Standard two-pointer setup:
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        // Logic
        left++;
        right--;
    }
* Adjust based on how close to target on a sorted array: 
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            results.push([left, right]);
            // Logic
        }
    }
* Check inside while loop for duplicates:
    while (left < right) {
        while (left < right && leftLogic) left++;
        while (left < right && rightLogic) right--;
    }


Quick Sum:
1. **Opposite pointers**: sorted array + target
2. **In place swap pointers**: reversal
    - Temp variable
3. **Merge pointers**: merging