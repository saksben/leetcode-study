/**
 * Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */

function longestPalindrome(s: string): string {
  const n = s.length;
  if (n <= 1) return s;

  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));
  let start = 0;
  let maxLength = 1;

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check substrings of length > 2
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = length;
      }
    }
  }

  return s.slice(start, start + maxLength);
}

// Optimized for space
function longestPalindromeCenterExpand(s: string): string {
  let start = 0, end = 0;

  function expandAroundCenter(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // length of palindrome
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i);   // odd-length palindrome
    const len2 = expandAroundCenter(i, i+1); // even-length palindrome
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.slice(start, end + 1);
}
