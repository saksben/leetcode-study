# Linked List Pattern
Linked List Pattern: use when you need to manipulate or traverse elements in a linked list efficiently.

The Linked List pattern involves operations on a linear data structure where each element points to the next. This pattern is useful for problems where direct access to elements isn't required, and insertion and deletion operations are frequent. It optimizes time complexity for certain operations compared to arrays, especially when dealing with dynamic data structures.

# Explanation of the Pattern
A Linked List consists of nodes where each node contains a data field and a reference (or link) to the next node in the sequence. Operations involve traversing the list from the head node to the desired node, inserting or deleting nodes, and manipulating pointers to maintain list integrity.

# Key Concepts
* Node: Basic unit containing data and a pointer to the next node.
* Head and Tail: Pointers to the first and last nodes of the list, respectively.
* Traversal: Iterating through nodes from head to tail or vice versa.
* Insertion and Deletion: Operations that adjust pointers to maintain list structure.

# When to Use This Pattern
* Handling dynamic data where size may change frequently.
* Implementing stacks, queues, or other data structures using linked lists.
* Problems requiring efficient insertion or deletion operations.

# Common Use Cases and Approaches
1. Reverse a Linked List
* Use three pointers to reverse links between nodes iteratively.
* Adjust pointers to reverse the direction of traversal.
Time Complexity: O(n), Space Complexity: O(1)

2. Detect Cycle in a Linked List
* Use two pointers (slow and fast) to detect if there's a cycle in the linked list.
* Adjust pointers based on their movement speed to detect overlapping.
Time Complexity: O(n), Space Complexity: O(1)

3. Merge Two Sorted Linked Lists
* Recursively or iteratively merge two sorted linked lists into one.
* Adjust pointers to link nodes based on their values.
Time Complexity: O(n + m), Space Complexity: O(1)

4. Remove Nth Node From End of List
* Use two pointers to find and remove the nth node from the end of the linked list.
* Adjust pointers to maintain proper links after removal.
Time Complexity: O(n), Space Complexity: O(1)


Strategy:
const hint1 = "I need to traverse a sequence where random access is not possible (no indexes)";
const hint2 = "I need to detect cycles or loops in a structure";
const hint3 = "I need to reverse or reorder elements in a list in-place";
const hint4 = "I need to merge 2 or more sorted sequences without extra arrays";
const hint5 = "I need to find the middle or nth-from-end element efficiently";
const hint6 = "I need to delete nodes based on conditions without breaking links";
const hint7 = "I need to check if a sequence is symmetric (palindrome) using only O(1) space";

// Big picture decision tree
if (problem.requires(detectingCycle)) {
    useFloydsCycleDetection(listHead);
} else if (problem.requires(findingNthFromEnd)) {
    useTwoPointerNthFromEnd(listHead, n);
} else if (problem.requires(reversingList)) {
    useReverseLinkedList(listHead);
} else if (problem.requires(mergingSortedLists)) {
    useMergeTwoSortedLists(list1, list2);
} else if (problem.requires(reorderingList)) {
    useFindMiddleReverseMerge(listHead);
} else if (problem.requires(removingNodesByCondition)) {
    useDummyNodeDeletion(listHead, conditionFn);
} else if (problem.requires(palindromeCheck)) {
    usePalindromeCheck(listHead);
} else {
    useTraversalTemplate(listHead);
}

const useFloydsCycleDetection = (head: ListNode | null): boolean => {
    // If I need to detect if a list has a cycle, or find cycle start
    // Ex. Tortoise & Hare: determine if there is a cycle in which a node's next points back to a prev node

    let slow = head, fast = head; // Start both pointers at the head
    while (fast && fast.next) {
        slow = slow!.next; // While fast exists and has a next node, advance slow
        fast = fast.next.next; // Advance fast 2 places (eventually slow becomes the middle)
        if (slow === fast) return true; // If slow ever equals fast, there is a cycle
    }
    return false;
}

const useTwoPointerNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
    // I need to find the kth element from the end without using extra space

    let first = head, second = head; // Start both pointers at the head
    while (n-- > 0 && first) {
        first = first.next; // While first exists and n has a number, advance first and decrement n
    }
    while (first) {
        first = first.next; // While first exists, advance first and second
        second = second.next;
    }
    return second; // Return the second node, which is n elements away from when first reaches the end
}

const useReverseLinkedList = (head: ListNode | null): ListNode | null {
    // If I need to reverse a list
    
    let prev: ListNode | null = null; // Declare previous
    let curr = head; // Start current at the head
    while (curr) {
        const next = curr.next; // Save the next node
        curr.next = prev; // Set current node's next node as what was saved as prev (splits list)
        prev = curr; // Save the prev node as whatever is current node
        curr = next; // Update current node to what was next, restart at whatever node current is
    }
    return prev; 
}

const useMergeTwoSortedLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    // If I need to merge two sorted linked lists

    const dummy = new ListNode(0);
    let curr = dummy;
    while (l1 & l2) {
        if (l1.val < l2.val) {
            curr.next = l1; // While l1 and l2 exist, if l1 is smaller than l2, set the next node as l1
            l1 = l1.next; // Advance l1 to compare new l1 and old l2
        } else {
            curr.next = l2; // If l1 is bigger than l2, set the next node as l2
            l2 = l2.next; // Advance l2 to compare old l1 and new l2
        }
        curr = curr.next; // Advance current node
    }
    curr.next = l1 || l2; // Set the last node as whatever is the biggest
    return dummy.next;
}

const useFindMiddleReverseMerge = (head: ListNode | null): void => {
    // If I need to reorder a list like [L0,L1,...,Ln] -> [L0,Ln,L1,Ln-1,...]
    if (!head || !head.next) return; // If there isn't a head, return early

    let slow = head, fast = head; // 2 pointers at the start
    while (fast && fast.next) {
        slow = slow!.next; // While there fast has a next node, advance slow
        fast = fast.next.next; // Advance slow by 2 (eventually slow becomes the middle)
    }

    let second = useReverseLinkedList(slow!.next); // Reverse second half of the list
    slow!.next = null;

    let first = head; // pointer at head
    while (second) {
        const temp1 = first!.next, temp2 = second.next; // Save nodes after heads of reg and reverse lists
        first!.next = second; // Set next node as head of reverse list
        second.next = temp1; // Set second half's next node as head of reg list
        first = temp1!; // Advance first
        second = temp2; // Advance second
    }
}

const useDummyNodeDeletion = (head: ListNode | null, condition: (val: number) => boolean): ListNode | null => {
    // If I need to remove nodes under a condition like (val === target) or (val < x), etc.
    const dummy = new ListNode(0, head);
    let curr = dummy;
    while (curr.next) {
        if (condition(curr.next.val)) {
            curr.next = curr.next.next // While there is a next node, if it meets condition,
            //set it as its following node (basically deletes it) and restart loop at current (not next)
        } else {
            curr = curr.next; // If next node doesn't meet condition, advance current node
        }
    }
    return dummy.next;
}

const usePalindromeCheck = (head: ListNode | null): boolean => {
    // If I need to check if a list's values form a palindrome

    if (!head || !head.next) return true; // Return early if empty

    let slow = head, fast = head; // 2 pointers at head
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next; // Advance slow, advance fast by 2x (finds middle)
    }

    let second = useReverseLinkedList(slow); // Reverse the second half of the list and return rev head

    let first = head; // Pointer at head
    while (second) {
        if (first!.val !== second.val) {
            return false; // If the reg head and rev head don't match, this is not a palindrome
        }
        first = first!.next; // Advance first
        second = second.next; // Advance second
    }
}

const useTraversalTemplate(head: ListNode | null): void => {
    let curr = head; // Start with the head
    while (curr) {
        // process(curr.val); // While there is a next node, do what you need to do
        curr = curr.next; // Set the next current node as the following node
    }
}


Quick Tools:
1. 2 pointers at new list start, return starting pointer as head: let dummy = head; let tail = dummy; return dummy.next
2. 2 pointers at existing list start: let slow = head, fast = head;
3. While loop until pointer hits end: while (fast && fast.next)
4. Advance node: curr = curr.next
5. Find midpoint:
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next; // Advance slow, advance fast by 2x (finds middle)
    }

Quick Summary:
1. **Floyd's Cycle Detection**: detect a cycle
2. **Two pointers**: find the nth from the end
3. **Reverse a linked list**
4. **Merge two sorted lists**
5. **Find the middle, reverse, and merge**: reorder the list
6. **Dummy node deletion**: removing nodes by a condition
7. **Check if palindrome**
8. **Traverse a linked list**
