// Valid Parentheses
// Easy

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true


Example 2:

Input: s = "()[]{}"

Output: true


Example 3:

Input: s = "(]"

Output: false


Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

// Create a map of parenths. Create a stack for opener parenths. Loop through each char, and if it's a closer then pop the latest opener and see if they match or return false, or if it's an opener push it to stack
function isValid(s: string): boolean {
  // Create object of valid chars to look for
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = []; // Create the stack array that will contain opening parenths

  // Loop through the parenth string. If it's a closing parenth, pop the latest opening parenth from the stack and then determine either that it matches the current closing char or continue
  for (let char of s) {
    if (char in map) {
      const topElement = stack.length === 0 ? "#" : stack.pop(); // If all closing parenths have been run through, return a # to trigger in case there is another opening parenth. Otherwise, pop the latest parenth out and make it the topElement

      // If the char's corresponding closing parenth doesn't match the stack's topElement, return false early
      if (map[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char); // Otherwise, it's an opening parenth so add it to the stack 
    }
  }

  return stack.length === 0; // Returns true if all match, returns false if there are lone parenths
}
