/**
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:


Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 1) return head;

    const dummy = new ListNode(0, head);
    let prevGroupEnd: ListNode = dummy;

    while (true) {
        // Check if there are at least k nodes left
        let kth: ListNode | null = prevGroupEnd;
        for (let i = 0; i < k && kth; i++) {
            kth = kth.next;
        }
        if (!kth) break; // Not enough nodes to reverse

        const groupStart = prevGroupEnd.next!;
        const groupEnd = kth;
        const nextGroupStart = groupEnd.next;

        // Reverse this group
        let prev: ListNode | null = nextGroupStart;
        let curr: ListNode | null = groupStart;
        while (curr !== nextGroupStart) {
            const tmp: ListNode | null = curr!.next;
            curr!.next = prev;
            prev = curr;
            curr = tmp;
        }

        // Connect previous group with reversed group
        prevGroupEnd.next = groupEnd;
        prevGroupEnd = groupStart; // Now groupStart is the end of reversed group
    }

    return dummy.next;
}