// 22 Generate Parentheses
// Medium

/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
 */

// Create a function that sets min and max limits for if there are more ending parenths than opening or if the parenth sequence exceeds n pairs. If the sequence length is double the pair number and there are no opening parenths, push result. Then recursively add a '(' or ')' to the sequence and balance the number of open parenths accordingly.
function generateParenthesis(n: number): string[] {
  let result: string[] = []; // Create array to contain parenth pairs

  const generate = (openCount: number, closeCount: number, stack: string[]): void => {
    // Base case: if I've used all pairs, join the stack into a string and add it to results
    if (openCount === n && closeCount === n) {
      result.push(stack.join(""))
    };

    // If I can still add an open parenthesis, push it and keep recursively checking/adding until all possibilities are run at this point
    if (openCount < n) {
      stack.push("(");
      generate(openCount + 1, closeCount, stack); // Explore all possibilities at furthest openCount + 1
      stack.pop(); // Remove the last choice to start a new chain
    }

    // If I can add a close parenthesis, push it and keep recursively checking/adding until all possibilities are run at this point
    if (closeCount < openCount) {
      stack.push(")");
      generate(openCount, closeCount + 1, stack); // Explore all possibilities at furthest closeCount + 1
      stack.pop(); // Remove the last choice to start a new chain
    }
  };

// Start recursion with an empty stack and no parentheses.
  generate(0, 0, []);

  return result;
}
