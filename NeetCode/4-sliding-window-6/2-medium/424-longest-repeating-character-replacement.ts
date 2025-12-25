/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
 */

function characterReplacement(s: string, k: number): number {
   const count: Record<string, number> = {}; // Track char frequencies
    let left = 0; // Left pointer
    let maxFreq = 0; // Max frequency of any char in the window
    let maxLength = 0; // Result: longest valid window size

    // Expand the window by moving the right pointer
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count[char] = (count[char] || 0) + 1; // Increment char count
        maxFreq = Math.max(maxFreq, count[char]); // Update most frequent char count

        // Check if window is invalid (too many replacements needed)
        while ((right - left + 1) - maxFreq > k) {
            count[s[left]]--; // Shrink window from the left
            left++;
        }

        // Update max length of valid window
        maxLength = Math.max(maxLength, right - left + 1);
    } 

    return maxLength;
}
