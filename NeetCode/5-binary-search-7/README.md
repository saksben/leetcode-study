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

Strategy:
const hint1 = "I need to search for an element or condition inside a sorted array";
const hint2 = "I need to find the first/last occurrence of an element in a sorted array";
const hint3 = "I need to search an answer space (not the array directly), like minimum capacity or maximum speed";
const hint4 = "I need to find the boundary where a condition switches from false to true";
const hint5 = "I need to solve a problem where brute force would be too slow, but I can check feasibility with a helper function";

let input: T[];

// Big Picture Decision Tree:
if (problem.requires(searchingSortedArray)) {
    if (problem.requires(anyOccurrence)) {
        useBinarySearchBasic(input, target);
    } else if (problem.requires(firstOrLastOccurrence)) {
        useBinarySearchBound(input, target);
    }
} else if (problem.requires(conditionSwitchPoint)) {
    useBinarySearchBoundary(input, conditionFn);
} else if (problem.requires(answerInRangeSearch)) {
    useBinarySearchOnAnswerSpace(low, high, conditionFn);
} else if (problem.requires(matrixOrRotatedArraySearch)) {
    if (problem.req.has(rotatedSortedArray)) {
        useBinarySearchRotated(input, target);
    } else if (problem.req.has(sortedMatrix)) {
        useBinarySearchMatrix(input, target);
    }
}

const useBinarySearchBasic = (arr: number[], target: number): number => {
    // If I need to find the index of a target in a sorted array
    let left = 0; right = arr.length - 1; // 2 pointers at ends of array

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Find the midpoint
        if (arr[mid] === target) {
            return mid; // If midpoint is target, return early
        } else if (arr[mid] < target) {
            left = mid + 1; // If midpoint is smaller than target, left is now start of 2nd half
        } else {
            right = mid - 1; // If midpoint is bigger than target, right is now end of 1st half
        }
    }
    return -1; // If you can't find the target, it isn't in the array.
}

const useBinarySearchBound = (arr: number[], target: number): number => {
    // If I need to find the leftmost (first) or rightmost (last) occurrence of a target in a sorted array with duplicates
    // Ex. Find the first and last position of a target element
    
    const findFirst = (arr: number[], target: number): number => {
        let left = 0, right = arr.length - 1; res = -1 // 2 pointers at ends of array, & result

        while (left <= right) {
            const mid = Math.floor((left + right) / 2); // Find midpoint
            if (arr[mid] >= target) {
                if (arr[mid] === target) {
                    res = mid; // If midpoint is target, make result midpoint without locking it in
                }
                right = mid - 1; // Keep searching in the left half for any other first occurrences
            } else {
                left = mid + 1; // If midpoint is smaller than target, left is now start of 2nd half
            }
            return res;  // Return best current option or -1
        }
    }
    
    const findLast = (arr: number[], target: number): number => {
        let left = 0, right = arr.length - 1; res = -1 // 2 pointers at ends of array, & result

        while (left <= right) {
            const mid = Math.floor((left + right) / 2); // Find midpoint
            if (arr[mid] <= target) {
                if (arr[mid] === target) {
                    res = mid; // If midpoint is target, make result midpoint without locking it in
                }
                left = mid + 1;  // Keep searching in the right half for any other last occurrences
            } else {
                right = mid - 1; // If midpoint is bigger than target, right is now end of 1st half
            }
            return res;  // Return best current option or -1
        }
    }
}

const useBinarySearchBoundary = (n: number, isBad: (x: number) => boolean): number => {
    // If I need to find the boundary index where a condition flips from false/true
    // Ex. Find the first bad version in versions 1...n
    let left = 1, right = n, res = -1; // 2 pointers constituting a window, & result

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Find midpoint
        if (isBad(mid)) {
            res = mid; // If trigger is at the midpoint, make res midpoint without locking it in as first
            right = mid - 1; // Keep searching the left half for first occurrence
        } else {
            left = mid + 1; // Otherwise, search the right half
        }
    }
    return res; // Return current first occurrence or -1
}

const useBinarySearchOnAnswer = (low: number, high: number, canDo: (x: number) => boolean): number => {
    // If I need to search for the min/max feasible answer when brute force is too slow
    // Ex. Given weights and days, find the min ship capacity to deliver all packages within days.
    let res = -1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2); // Find midpoint between low and high
        if (canDo(mid)) {
            res = mid; // If trigger is at midpoint, make res midpoint without locking it is as min
            high = mid - 1; // Keep searching left for the min
        } else {
            low = mid + 1; // Otherwise, search the right half
        }
    }
    return res; // Return current min or -1
}

const useBinarySearchRotated = (arr: number[], target: number): number => {
    // If I need to find a target in an array that was sorted and then rotated
    // Ex. Search target in rotated sorted array without duplicates
    let left = 0; right = arr.length - 1; // 2 pointers at ends of array

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Find midpoint

        if (arr[mid] === target) {
            return mid; // If midpoint is target, return early
        }

        if (arr[left] <= arr[mid]) { // Left half sorted
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1; // If left <= target < mid, search left half
            } else {
                left = mid + 1; // Else search the right half
            }
        } else { // Right half sorted
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1; // If mid < target <= right, keep searching right half
            } else {
                right = mid -1; // Else search the left half
            }
        }
    }
    return -1;
}

const useBinarySearchMatrix = (matrix: number[][], target: number): boolean => {
    // If I need to search a target in a sorted 2D matrix (rows and columns sorted)
    if (!matrix.length || !matrix[0].length) {
        return false; // If the matrix is empty row-wise or column-wise, return early
    }

    let row = 0; col = matrix[0].length - 1; // 2 pointers at first row, and last column of first row

    while (row < matrix.length && col >= 0) { // Move forward with row, move backward with col
        if (matrix[row][col] === target) {
            return true; // If the point you're at is target, return early
        } else if (matrix[row][col] > target) {
            col--; // If the point you're at is bigger than target, move col left
        } else {
            row++; // If the point you're at is smaller than target, move row down
        }
    }
    return false;
}


Quick Tools:
1. Sorted array
2. while (left <= right)
3. Left and right pointers at ends of array
4. Midpoint: mid = Math.floor(left + (right - left) / 2)
5. Halve the array each search: left = mid + 1; right = mid - 1
6. Mid = Bigger, smaller, or equal to target?: if (arr[mid] </===/> target)
7. Strategy: define left and right pointers (cover array), then loop while left <= right, then find the midpoint, then compare the 2 halves to find what you're looking for, then adjust the left or right pointer based on which half the target must be in.

Quick Summary:
1. **Basic binary search**: searching a sorted array for any occurrence
2. **Bound binary search**: searching a sorted array for first/last occurrence
3. **Binary search within a boundary**: there is a switch point
4. **Binary search on answer space**: searching for an answer in a range with a low, high, and condition
5. **Binary search on rotated array**: searching a sorted rotated array
6. **Binary search on matrix**: searching a sorted matrix
