// 242 Valid Anagram
// Easy

/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

// 1566 ms, slow
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false; // If the strings aren't equal length, it is obviously not an anagram, so return false early

  let first: Array<string | null> = s.split(""); // Create an array of strings or nulls and fill it with the first string's chars
  const second = t.split(""); // Create an array and fill it with the second string's chars

  for (let i = 0; i < second.length; i++) {
    // Loop through the second string
    const element = second[i]; // Track each char
    let found = first.indexOf(element); // If the char exists in the first string, get its index. If not, return -1

    if (found !== -1) {
      first[found] = null; // If the char exists in the first string, set the first string's index to null at that char
    } else {
      return false; // Else if the char does not exist in the first string, return false early because it therefore is not an anagram
    }
  }
  return true; // If you got this far, return true because all chars of the second array are in the first array
}

// 76 ms
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false; // If the strings aren't equal length, it is obviously not an anagram, so return false early

  const counts: { [key: string]: number } = {}; // Create an object

  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1; // For each char of the first string, add 1 to its value (count) in the object
  }
  for (let char of t) {
    if (!counts[char]) return false; // For each char of the second string, if the char doesn't exist or === 0, return false early because it's not an anagram.
    counts[char]--; // Since the decrement comes after, a 0 value would mean there are more instances of the char in t than s. If the char doesn't exist, then it wasn't in s.
  }
  return true; // If you got this far, return true
}
