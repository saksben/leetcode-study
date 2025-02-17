// Min Stack
// Medium

/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.

 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

class MinStack {
    private stack: number[]
    private minStack: number[]

    // Create a stack array for the main value, and a minStack to retrieve whatever the min is at any time
    constructor() {
        this.stack = []
        this.minStack = []
    }

    // Push a value to the stack. Also, push the min value to the stack (determine whether the current min or val is the new current min)
    push(val: number): void {
        this.stack.push(val) // Push the val to the stack

        // Track the min value by pushing val (if the first value) or fetching the current min and then determining whether it or val is the new current min, then push it to the min stack
        if (this.minStack.length === 0) {
            this.minStack.push(val)
        } else {
            let min = this.getMin()
            min = val < min ? val : min
            this.minStack.push(min)
        }
    }

    // Pop most recent values for both stack and min (if stack is popped, the new min was the previous min)
    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    // Find the stack value at the latest entry
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    // Find the min value at the latest entry
    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}