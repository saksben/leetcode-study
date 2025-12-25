/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted linked list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null;

    // Custom comparator for min-heap
    const compare = (a: ListNode, b: ListNode) => a.val - b.val;

    // Implement a simple min-heap using an array
    const heap: ListNode[] = [];

    // Push all non-null list heads into heap
    for (const node of lists) {
        if (node) heap.push(node);
    }

    // Heapify (sort initially)
    heap.sort(compare);

    const dummy = new ListNode(0);
    let curr = dummy;

    while (heap.length > 0) {
        // Pop smallest node from heap
        const node = heap.shift()!;
        curr.next = node;
        curr = curr.next;

        // If the node has a next, push it into the heap
        if (node.next) {
            // Insert maintaining order
            let i = 0;
            while (i < heap.length && heap[i].val < node.next.val) i++;
            heap.splice(i, 0, node.next);
        }
    }

    return dummy.next;
}