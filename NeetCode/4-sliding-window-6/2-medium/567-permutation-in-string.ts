/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
 */

function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false; // Impossible if s1 is longer

    const s1Count = new Array(26).fill(0); // Frequency of chars in s1
    const s2Count = new Array(26).fill(0); // Frequency of chars in current window
    const aCharCode = 'a'.charCodeAt(0); // Base ASCII code for 'a'

    // Helper to check if two frequency arrays match
    const matches = (a: number[], b: number[]) => a.every((val, i) => val === b[i]);

    // Build initial frequency for s1 and first window in s2
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - aCharCode]++;
        s2Count[s2.charCodeAt(i) - aCharCode]++;
    }

    // Check initial window
    if (matches(s1Count, s2Count)) return true;

    // Slide window over s2
    for (let i = s1.length; i < s2.length; i++) {
        // Add new char (right side)
        s2Count[s2.charCodeAt(i) - aCharCode]++;
        // Remove char that falls out of the window (left side)
        s2Count[s2.charCodeAt(i - s1.length) - aCharCode]--;

        // Compare after each slide
        if (matches(s1Count, s2Count)) return true;
    }

    return false;
}