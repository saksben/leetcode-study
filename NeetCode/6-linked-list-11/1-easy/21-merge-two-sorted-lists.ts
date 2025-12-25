/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
 */

// Definition for singly-linked list (given already by LeetCode)
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Dummy node acts as a placeholder for the head of the new list
    const dummy = new ListNode(0)
    let tail = dummy // tail keeps track of the end of the merged list. References the SAME node as dummy because it's a reference object, not a primitive

    // Traverse both lists until one is empty
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            // list1 node is smaller (or equal), attach it to merged list
            tail.next = list1
            list1 = list1.next // move list1 pointer forward
        } else {
            // list2 node is smaller, attach it instead
            tail.next = list2
            list2 = list2.next // move list2 pointer forward
        }
        tail = tail.next // move the tail forward to what was just added
    }

    // Attach the remaining nodes (only one of these lists may still have nodes left)
    tail.next = list1 !== null ? list1 : list2

    // Return the head of the merged list (dummy.next skips the placeholder because we want the first node in the list)
    return dummy.next
}
