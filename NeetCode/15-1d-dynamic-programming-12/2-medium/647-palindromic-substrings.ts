/**
 * Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
 */

function countSubstrings(s: string): number {
  const n = s.length;
  let count = 0;

  // dp[i][j] = whether s[i..j] is a palindrome
  const dp: boolean[][] = Array.from({ length: n }, () => new Array(n).fill(false));

  // iterate substrings by length
  for (let length = 1; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;

      if (s[i] === s[j] && (length <= 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        count++;
      }
    }
  }

  return count;
}

// Optimized for space
function countSubstringsOptimized(s: string): number {
  let count = 0;
  const n = s.length;

  function expand(left: number, right: number) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }

  for (let i = 0; i < n; i++) {
    expand(i, i);     // odd-length palindrome
    expand(i, i + 1); // even-length palindrome
  }

  return count;
}
