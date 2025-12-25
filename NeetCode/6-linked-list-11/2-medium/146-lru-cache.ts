/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 

Constraints:

1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.
 */

export {} // Lets me contain Node2 class to this file

class Node2 {
    key: number;
    value: number;
    prev: Node2 | null;
    next: Node2 | null;

    constructor(key?: number, value?: number) {
        this.key = key ?? 0;
        this.value = value ?? 0;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    private capacity: number;
    private cache: Map<number, Node2>; // Fast access to nodes
    private left: Node2; // Dummy head (least recently used)
    private right: Node2; // Dummy tail (most recently used)

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();

        // Initialize dummy nodes
        this.left = new Node2();
        this.right = new Node2();

        // Link dummy head and tail
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    // Helper: remove a node from the linked list
    private remove(node: Node2): void {
        const prev = node.prev!;
        const next = node.next!;
        prev.next = next;
        next.prev = prev;
    }

    // Helper: insert a node right before the tail (most recently used position)
    private insert(node: Node2): void {
        const prev = this.right.prev!;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    get(key: number): number {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key)!;
        this.remove(node); // Move it to most recently used
        this.insert(node);
        return node.value;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            // Remove old node (I'll re-insert as MRU)
            this.remove(this.cache.get(key)!);
        }

        const newNode = new Node2(key, value);
        this.insert(newNode);
        this.cache.set(key, newNode);

        if (this.cache.size > this.capacity) {
            // Evict least recently used
            const lru = this.left.next!;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}