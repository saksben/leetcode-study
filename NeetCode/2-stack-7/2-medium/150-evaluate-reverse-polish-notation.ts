// 150 Evaluate Reverse Polish Notation
// Medium

/**
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 

Constraints:

1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
 */

// Create interface for the operator object that has a string key and value that takes 2 number params and returns a number
interface IOperatorSets {
  [key: string]: (a: number, b: number) => number;
}

// Create an interface for the operators object, and a stack. Loop through the tokens array, and perform the operator function on the top 2 numbers in the stack, else add the number to the stack. Return the remaining stack number.
function evalRPN(tokens: string[]): number {
  // Create object for operators containing string keys and their corresponding resultant number
  const operatorSets: IOperatorSets = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => (a / b) | 0,
  };

  // Create the stack array to put all the non-operators (numbers) in
  const stack: number[] = [];

  // For each item in the tokens array, if the item is an operator then set the 2 most recent stack items as a and b and remove them from the stack and replace them with the value returned by the operator function, otherwise push the item to the stack if it's not an operator
  for (let i of tokens) {
    if (operatorSets[i] != null) {
      const b = stack.pop()!;
      const a: number = stack.pop()!;
      stack.push(operatorSets[i](a, b));
    } else {
      stack.push(Number(i));
    }
  }

  // Return the latest value in the stack
  return stack.pop()!;
}

function evalRPN2(tokens: string[]): number {
  // Stack to hold operands (numbers)
  const stack: number[] = [];

  // Define the valid operators
  const operators = new Set(["+", "-", "*", "/"]);

  for (const token of tokens) {
    // If token is an operator, pop top two operands and evaluate
    if (operators.has(token)) {
      const b = stack.pop()!; // Right operand
      const a = stack.pop()!; // Left operand

      let result: number;

      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = Math.trunc(a / b);
          break;
        default:
          throw new Error(`Unknown operator: ${token}`);
      }

      // Push the result back on the stack
      stack.push(result);
    } else {
      // Otherwise, it's a number -> parse and push to stack
      stack.push(Number(token));
    }
  }

  // Final result will be the only number left in the stack
  return stack.pop()!;
}