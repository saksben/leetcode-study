/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */

// Definition for singly-linked list
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0)  // Dummy head to simplify list construction
    let curr = dummy               // Pointer to build the result list
    let carry = 0                  // Carry for sums >= 10

    // Traverse both lists until both are fully processed
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get the current values (or 0 if one list is shorter)
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0

        // Compute sum and carry
        const sum = val1 + val2 + carry
        carry = Math.floor(sum / 10)  // New carry (0 or 1)
        const digit = sum % 10         // The single-digit result to store

        // Append new node with the computed digit
        curr.next = new ListNode(digit)
        curr = curr.next

        // Move pointers forward if available
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    // Return the head of the new list (skipping dummy)
    return dummy.next
}