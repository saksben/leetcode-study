/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 */

/**
 * Definition for singly-linked list.
 */
// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Create a dummy node before head to simplify edge cases (like removing the first node)
    const dummy = new ListNode(0, head);

    // Initialize two pointers, both starting at dummy
    let slow: ListNode | null = dummy;
    let fast: ListNode | null = dummy;

    // Move the fast pointer n + 1 steps ahead so there is a gap of n nodes between slow and fast
    for (let i = 0; i <= n; i++) {
        if (fast) fast = fast.next;
    }

    // Move both slow and fast pointers together until fast reaches the end. At that point, slow will be right before the node I want to remove
    while (fast) {
        slow = slow!.next;
        fast = fast.next;
    }

    // Remove the target node
    slow!.next = slow!.next!.next;

    return dummy.next;
}