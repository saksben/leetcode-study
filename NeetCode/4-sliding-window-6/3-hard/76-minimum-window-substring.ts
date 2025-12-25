/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 */

function minWindow(s: string, t: string): string {
    if (t.length > s.length) return ""; // Edge case: impossible

    // Frequency map for required chars in t
    const need = new Map<string, number>();
    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    const window = new Map<string, number>(); // Frequency map for window
    let have = 0; // How many required chars we currently have
    const needCount = need.size; // Total unique chars required

    let result = [-1, -1]; // Store window boundaries
    let minLen = Infinity; // Track min window length

    let left = 0;

    // Expand window using 'right' pointer
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        window.set(char, (window.get(char) || 0) + 1);

        // If current char count matches what we need, increase "have"
        if (need.has(char) && window.get(char) === need.get(char)) {
            have++;
        }

        // When window is valid, try to shrink it
        while (have === needCount) {
            // Update smallest window if needed
            if ((right - left + 1) < minLen) {
                result = [left, right];
                minLen = right - left + 1;
            }

            // Remove leftmost char and shrink window
            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar)! - 1);

            // If we just lost a required char, window is no longer valid
            if (need.has(leftChar) && window.get(leftChar)! < need.get(leftChar)!) {
                have--;
            }

            left++; // Move left pointer to shrink
        }
    }

    // If result never updated, return empty string
    const [start, end] = result;
    return minLen === Infinity ? "" : s.slice(start, end + 1);
}