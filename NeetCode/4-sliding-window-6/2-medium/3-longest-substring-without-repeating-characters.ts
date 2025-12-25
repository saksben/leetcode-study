/**
 * Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.Given a string s, find the length of the longest substring without duplicate characters.

 */

function lengthOfLongestSubstring(s: string): number {
    let left = 0; // Start of the sliding window
    let maxLength = 0; // Longest unique substring length
    const seen = new Set<string>(); // Store characters in the current window

    // Expand the window by moving 'right' pointer
    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If the character is already in the window, shrink from the left
        while (seen.has(char)) {
            seen.delete(s[left]); // Remove the leftmost char
            left++; // Move window start forward
        }

        seen.add(char); // Add the new char
        maxLength = Math.max(maxLength, right - left + 1); // Update max length
    }

    return maxLength;
}