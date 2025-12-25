/**
 * You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

"1" -> 'A'

"2" -> 'B'

...

"25" -> 'Y'

"26" -> 'Z'

However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

For example, "11106" can be decoded into:

"AAJF" with the grouping (1, 1, 10, 6)
"KJF" with the grouping (11, 10, 6)
The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
Note: there may be strings that are impossible to decode.

Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.

The test cases are generated so that the answer fits in a 32-bit integer.

 

Example 1:

Input: s = "12"

Output: 2

Explanation:

"12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:

Input: s = "226"

Output: 3

Explanation:

"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:

Input: s = "06"

Output: 0

Explanation:

"06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

 

Constraints:

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).
 */

/**
 * Decode Ways
 * 
 * 1D Dynamic Programming pattern
 */
function numDecodings(s: string): number {
  const n = s.length;
  if (n === 0) return 0;

  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1; // empty string

  // dp[1] depends on first character
  dp[1] = s[0] !== '0' ? 1 : 0;

  for (let i = 2; i <= n; i++) {
    const oneDigit = Number(s.slice(i - 1, i));
    const twoDigit = Number(s.slice(i - 2, i));

    // single-digit decode (1..9)
    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }

    // two-digit decode (10..26)
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}

// Optimized for space
function numDecodings2(s: string): number {
  if (!s || s[0] === '0') return 0;

  let prev2 = 1; // dp[i-2]
  let prev1 = 1; // dp[i-1]

  for (let i = 1; i < s.length; i++) {
    let curr = 0;
    const oneDigit = Number(s[i]);
    const twoDigit = Number(s[i - 1] + s[i]);

    if (oneDigit >= 1 && oneDigit <= 9) curr += prev1;
    if (twoDigit >= 10 && twoDigit <= 26) curr += prev2;

    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}
