# Arrays & Hashing Pattern
Arrays and Hashing: use when you need efficient data retrieval and manipulation with quick/frequent access to elements based on keys or indexes.

The NeetCode Arrays and Hashing pattern focuses on solving problems related to arrays and hash tables, which are fundamental data structures in computer science. This pattern leverages the strengths of arrays for indexed data access and hash tables for efficient lookups and storage.

# Arrays
Arrays are a collection of elements, identified by index or key, stored in contiguous memory locations. They provide efficient access to elements using indices, with a time complexity of O(1) for access and update operations. However, arrays have limitations, such as fixed size and inefficient insertion or deletion operations, which typically have O(n) time complexity in the worst case.

Strengths:
- if you need to access elements sequentially
- if you know the index of the element (hash table has overhead)
- if collection size is known/fixed (arrays allocate contiguous memory)
- simpler, no collisions or overhead

Limits:
- fixed size => hash table
- inefficient insert/delete operations => hash table lookup by key

# Hashing
Hashing involves mapping data (keys) to a fixed-size array (hash table) using a hash function. The hash function converts keys into array indices. Hash tables provide average-case O(1) time complexity for insertion, deletion, and lookup operations, making them efficient for problems involving frequent searches, insertions, and deletions.

Strengths:
- if you need to access elements quickly/frequently by key
- doesn't care about size
- fast lookup by key

Limits:
- takes up extra space for random element indexes => array
- overhead of table resizing/rehashing on change => array
- collisions complicate => array

# Key Concepts
* Hash Function: Converts keys into indices for hash tables.
* Collision Handling: Techniques like chaining or open addressing to handle hash table collisions.
* Space-Time Tradeoff: Using additional space (hash table) to achieve faster time complexity.
O(1) - O(n) time complexity

# When to Use This Pattern
* When you need efficient lookups, insertions, or deletions (O(1) time complexity).
* When dealing with problems involving frequent searches for elements in an array.
* When the problem can benefit from tracking elements or cumulative values using hash tables.

Strategy:
const hint1 = "I need to look up whether x exists"
const hint2 = "I need to check or distinguish something for each value in a data structure (e.g. counts or comparisons)"
if ((problem.req.has(immediateLookupByIndexOrKey) || problem.req.has(frequentLookupByIndexOrKey)) && canStoreInArray) {
    const looping = 'inefficient';
    if (array.wouldRequire(looping) || array.length === undefined) {
        useHashTable() || useObject();
    } else {
        useArray();
    }

    try {
        let map = new Map()
        for (let i = 0; i < array.length; i++) {
            if (map.has(array[i])) {
                doLogic(map.get(array[i]))
            } else {
                map.set(array[i], i)
            }
        }
    } catch (error) {
        if (error instanceof LoopTypeError) {
            let obj = {}
            let count = countingLogic()
            for (let element of array) {
                obj[element] = count
            }
        }
        console.log(error + "; try the same thing with an object, set, or other data structure")
    }
}

# Common Use Cases and Approaches
This pattern combines the strengths of both arrays and hash tables to solve various problems efficiently. Here are some common use cases and approaches:

1. Finding Duplicates in an Array
* Use a hash table (set or map) to track seen elements.
* Iterate through the array, checking if the element is already in the hash table.
* If it is, you've found a duplicate; otherwise, add it to the hash table.
* Time Complexity: O(n), Space Complexity: O(n).

2. Two Sum Problem
* Use a hash table to store elements and their indices as you iterate through the array.
* For each element, check if the complement (target - element) exists in the hash table.
* If it does, return the indices of the current element and the complement.
Time Complexity: O(n), Space Complexity: O(n).

3. Subarray Sum Equals K
* Use a hash table to store the cumulative sum up to each index and its frequency.
* Iterate through the array, updating the cumulative sum.
* Check if the difference between the cumulative sum and the target sum exists in the hash table.
* If it does, add the frequency of the difference to the count of subarrays.
Time Complexity: O(n), Space Complexity: O(n).

4. Longest Consecutive Sequence
* Use a hash table (set) to store all elements of the array.
* Iterate through the array, checking if the current element is the start of a sequence (i.e., element - 1 is not in the set).
* If it is, count the length of the sequence by checking consecutive elements (element + 1, element + 2, etc.).
* Update the maximum sequence length.
Time Complexity: O(n), Space Complexity: O(n).
