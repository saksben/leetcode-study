/**
 * You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
 */

function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return;

    // Step 1: find the middle of the list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // Step 2: reverse the second half of the list
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;
    while (curr) {
        const nextTemp = curr.next; // Save the next node before breaking the link
        curr.next = prev; // Reverse the link by changing its next node from next to prev
        prev = curr; // Move prev forward
        curr = nextTemp; // Move curr forward (original next)
    }

    // Step 3: merge the 2 halves.
    let first: ListNode | null = head;
    let second: ListNode | null = prev; // At this point, prev is the head of the reversed second half

    while (second && second.next) {
        // Save next nodes
        const tmp1: ListNode | null = first!.next;
        const tmp2 = second.next;

        // Reorder pointers
        first!.next = second;
        second.next = tmp1;

        // Move both pointers forward to the original nexts
        first = tmp1;
        second = tmp2;
    }
}