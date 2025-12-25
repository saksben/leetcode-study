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

- Hash Function: Converts keys into indices for hash tables.
- Collision Handling: Techniques like chaining or open addressing to handle hash table collisions.
- Space-Time Tradeoff: Using additional space (hash table) to achieve faster time complexity.
  O(1) - O(n) time complexity

# When to Use This Pattern

- When you need efficient lookups, insertions, or deletions (O(1) time complexity).
- When dealing with problems involving frequent searches for elements in an array.
- When the problem can benefit from tracking elements or cumulative values using hash tables.

Strategy:
const hint1 = "I need to look up whether x exists"
const hint2 = "I need to count, compare, or group values"

let input: T[]

// Big picture decision tree
if (problem.requires(immediateLookupByIndex) && size.isFixedOrSmall()) {
useArray(input); // Templates: direct indexing, counting array
console.log("remember that looping is inefficient");
} else if (problem.requires(frequentLookupByKey) || !size.isFixedOrSmall()) {
if (problem.requires(uniquenessCheck)) {
useHashSet(input); // Template: membership check, duplicate detection
} else if
(problem.requires(counting) || problem.requires(grouping)) || problem.requires(usingExtraPropertyInfo) {
useHashMap(input); // Templates: frequency map, grouping map, info map
} else {
useObject(input); // Template: lightweight frequency/lookup
}
} else {
useArrayWithLooping(); // Template: brute force scan
}

const useArray = (nums) => {
// If you need to look a value up and know the index
const directIndexing = (nums, index) => {
return array[index];
}

    // If you need to count a finite/small number of keys, like letters in the alphabet
    const countingChars = () => {
        let count = new Array(26).fill(0); // Create an array of 26 elems and fill it with 0's
        for (let char of s) {
            count[char.charCodeAt(0) - 97]++; // For each letter in string, increase its count
        }
    }

}

const useHashSet = (nums) => {
// When you need to check for existing membership
const membershipCheck = (nums, target) => {
let set = new Set(nums) {
return set.has(target);
}
}

    // When you want to see if there are any duplicates
    const duplicateDetection = (nums) => {
        let set = new Set<T>();
        for (let elem of nums) {
            if (set.has(elem)) { return true; } // If it's in Set, return early as true
            set.add(elem); // Otherwise, add the elem to the set
        }
        return false; // If you reach here, there are no duplicates
    }

}

const useHashMap = (nums) => {
// If you need to find the frequency of arbitrary keys
const frequencyMap = () => {
let map = new Map<T, number>();
for (let elem of nums) {
map.set(elem, (map.get(elem) || 0) + 1); // Count each elem from 0 or last count
}
}

    // If you need to group elements together, like an anagram
    const grouping = (arr) => {
        let groups = new Map<string, string[]>();
        for (let word of words) {
            let key = num.split('').sort().join(''); // Create a unique key per grouping
            //by creating a sorted array of its contents and turning it into a string
            if (!groups.has(key)) { groups.set(key, []); } // If key isn't already in map,
            //initialize it with an empty holding array
            groups.get(key)!.push(word); // Add the elem to the key's array of instances
        }
    }

    // If you need to link elements to extra info you'll need later, like its index, count,
    //or grouping. Ex. finding a complementary number in an array.
    // It's basically like using useHashSet()'s duplicateDetection()
    const infoMap = (nums, target) => {
        let map = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (map.has(target - nums[i])) { // Instant lookup of existing number for each val
                return [map.get(target - nums[i]), i] // Instant retrieval of complementary val
            }
            map.set(nums[i], i) // Otherwise, add the elem and its index to the map
        }
    }

}

const useObject = (arr) => {
// If you need to get the frequency of a string
let freq: { [key: string]: number } = {};
for (let char of s) {
freq[char] = (freq[char] || 0) + 1; // For each char, count from 0 or last count
}
}

const useArrayWithLooping = (arr) => {
// If you need to find a duplicate value in an array through brute force
for (let i = 0; i < arr.length; i++) { // Loop through arr to get each value
for (let j = i + 1; j < arr.length; j++) { // Loop through arr ahead to find any dup
if (arr[i] === arr[j]) { return true; } // If the values match, they are dup's
}
}
return false; // If you got here, there are no duplicates
}

# Common Use Cases and Approaches

This pattern combines the strengths of both arrays and hash tables to solve various problems efficiently. Here are some common use cases and approaches:

1. Finding Duplicates in an Array

- Use a hash table (set or map) to track seen elements.
- Iterate through the array, checking if the element is already in the hash table.
- If it is, you've found a duplicate; otherwise, add it to the hash table.
- Time Complexity: O(n), Space Complexity: O(n).

2. Two Sum Problem

- Use a hash table to store elements and their indices as you iterate through the array.
- For each element, check if the complement (target - element) exists in the hash table.
- If it does, return the indices of the current element and the complement.
  Time Complexity: O(n), Space Complexity: O(n).

3. Subarray Sum Equals K

- Use a hash table to store the cumulative sum up to each index and its frequency.
- Iterate through the array, updating the cumulative sum.
- Check if the difference between the cumulative sum and the target sum exists in the hash table.
- If it does, add the frequency of the difference to the count of subarrays.
  Time Complexity: O(n), Space Complexity: O(n).

4. Longest Consecutive Sequence

- Use a hash table (set) to store all elements of the array.
- Iterate through the array, checking if the current element is the start of a sequence (i.e., element - 1 is not in the set).
- If it is, count the length of the sequence by checking consecutive elements (element + 1, element + 2, etc.).
- Update the maximum sequence length.
  Time Complexity: O(n), Space Complexity: O(n).

Quick rules of thumb:
- Need order + index access: array
- Need uniqueness check: HashSet
- Need frequency counting or grouping by value/type: HashMap
- Need fast lookup in small bounded domains: Array as HashMap substitute, ex. count[num]++

Quick Priority:
1. Array (if direct index known and fixed domain).
2. HashSet (for uniqueness).
3. HashMap (dynamic, arbitrary keys).
4. Object (lightweight hash map for strings).
5. Array (when forced into linear search / iteration).

Quick tools:
1. Check if exists:
    for (let num of nums) {
        if (dataStructure.has(num)) {
            return true
        } else {
            dataStructure.add(num)
        }
    }
2. Counter object:
    let counts: {[key: string]: number} = {} OR let counts: Record<string, number> = {}
    for (let char of s) {
        count[char] = (counts[char] || 0) + 1
    }

Quick Summary:
1. Array
   - Direct indexing
   - Counting array
2. HashSet
   - Membership check
   - Duplicate detection
3. HashMap
   - Frequency map
   - Grouping map
   - Info map
4. Object
   - Lightweight frequency/lookup
5. Array with looping
   - Brute force scan
