# Bit Manipulation Pattern
Bit Manipulation Pattern: use when you need to manipulate individual bits to optimize or solve problems efficiently.

The Bit Manipulation pattern involves using bitwise operators to perform operations at the bit level. This pattern is useful for problems where bit-level operations can simplify or optimize calculations, such as bitmasking, counting bits, or finding unique representations of numbers.

# Explanation of the Pattern
Bit Manipulation utilizes bitwise operators (AND, OR, XOR, shift operators) to perform operations directly on bits of integers. This pattern is especially effective in scenarios where memory efficiency or performance optimization is critical, such as in competitive programming or low-level optimizations. Common techniques include bitmasking to represent subsets or combinations, counting set bits, and using XOR properties for unique representations.

# Key Concepts
* Bitwise Operators: AND (&), OR (|), XOR (^), shift operators (<<, >>).
* Bitmasking: Using bit patterns to represent states or subsets.
* Counting Bits: Efficiently counting set bits (1s) in a number.
* Unique Representations: Leveraging XOR properties for unique identifiers or efficient computations.
* Bit Tricks: Techniques like checking if a number is a power of two or swapping values using XOR.

# When to Use This Pattern
* Problems involving set operations where elements are represented as bits (e.g., subsets, permutations).
* Optimizing memory or computational efficiency in low-level programming tasks.
* Problems requiring unique representations or efficient bitwise operations.

# Common Use Cases and Approaches
1. Bitmasking for Subsets
* Generate all possible subsets of a set using bitmasking.
* Use bitwise operations to represent subsets and iterate through possible combinations.
Time Complexity: O(2^n), Space Complexity: O(1).

2. Counting Bits
* Count the number of set bits (1s) in a binary representation of a number.
* Use bitwise operations to efficiently count bits without iterating through each bit.
Time Complexity: O(log n), Space Complexity: O(1).

3. Single Number
* Find the single number in an array where every other element appears twice.
* Utilize XOR bitwise operation properties to cancel out paired elements.
Time Complexity: O(n), Space Complexity: O(1).

4. Bitwise AND of Numbers Range
* Calculate the bitwise AND of all numbers in a range.
* Use bit manipulation techniques to efficiently compute the result.
Time Complexity: O(1), Space Complexity: O(1).