# Heap and Priority Queue Pattern
Heap and Priority Queue Pattern: use when you need to efficiently retrieve the maximum or minimum element and maintain order in a collection of elements.

The Heap and Priority Queue pattern involves using a specialized data structure to maintain the highest (or lowest) priority elements at the root, allowing efficient access and manipulation operations. This pattern is particularly useful for problems requiring dynamic ordering and quick retrieval of extremal values.

# Explanation of the Pattern
A Heap is a binary tree-based data structure where each node satisfies the heap property. Priority Queues are commonly implemented using Heaps to ensure efficient insertion, deletion, and retrieval of elements based on priority. Operations maintain the heap property through heapify operations, ensuring the root node always holds the highest (or lowest) priority element.

# Key Concepts
* Heap Property: Ensures that each parent node is higher (or lower) priority than its children.
* Max-Heap and Min-Heap: Structures where the root node holds the maximum or minimum element, respectively.
* Priority Queue Operations: Insertion, extraction of extremal elements, and maintaining order.
* Heapify Operations: Adjusts heap structure after insertion or deletion to restore the heap property efficiently.

# When to Use This Pattern
* Implementing scheduling algorithms (e.g., task scheduling based on priority).
* Sorting elements where partial sorting is sufficient (e.g., finding k largest/smallest elements).
* Problems requiring efficient access to extremal elements.

# Common Use Cases and Approaches
1. Finding K Largest Elements
* Use a Min-Heap to maintain the k largest elements encountered so far.
* Adjust heap structure to accommodate new elements based on comparisons.
Time Complexity: O(n log k), Space Complexity: O(k).

2. Priority Task Scheduling
* Use a Max-Heap to prioritize tasks based on their urgency or importance.
* Adjust heap structure to insert new tasks and extract tasks according to priority.
Time Complexity: O(log n) for insertion and extraction operations, Space Complexity: O(n).

3. Merge K Sorted Lists
* Use a Min-Heap to merge k sorted lists into one sorted list.
* Adjust heap structure to continuously extract and insert elements based on comparisons.
Time Complexity: O(n log k) where n is the total number of elements, Space Complexity: O(k).

4. Top K Frequent Elements
* Use a Min-Heap to find the k most frequent elements in an array.
* Adjust heap structure to maintain the k most frequent elements based on frequency counts.
Time Complexity: O(n log k), Space Complexity: O(n).

Strategy:
const hint1 = "I need quick access to the smallest or largest element repeatedly";
const hint2 = "I need to maintain the top K items as I process input";
const hint3 = "I need to merge or schedule things by priority (like jobs or sorted lists)";
const hint4 = "I need to process elements in a streaming way but still get order-based results (like medians)";
const hint5 = "The array is almost sorted and I need efficient sorting with a sliding window of size K";
const hint6 = "I need to retrieve elements ordered by frequency or custom comparator logic";

// Big picture decision tree
if (problem.requires(getKthSmallestOrLargestElement)) {
    useKthElementHeap(nums, k);
} else if (problem.requires(keepingTrackOfTopKElements)) {
    useTopKHeap(nums, k);
} else if (problem.requires(streamingMedianOrDynamicOrder)) {
    useMedianTwoHeaps(stream);
} else if (problem.requires(scheduleTasksOrMergeKSorted)) {
    useHeapForScheduling(tasks);
} else if (problem.requires(sortAlmostSortedArray)) {
    useHeapForNearlySorted(nums, k);
} else if (problem.requires(frequencyBasedOrdering)) {
    useFrequencyHeap(nums);
} else {
    useBasicMinMaxHeapTemplate(nums);
}

const useBasicMinMaxHeapTemplate = () => {
    // For any problem requiring efficient insert and extract-min/extract-max
    // Ex. Implement a priority queue with push and pop

    class MinHeap = {
        heap: number[] = [];

        private parent(i: number) {
            return Math.floor((i - 1) / 2); // Return the rounded down parent
        }
        private left(i: number) {
            return 2 * i + 1; // Return the left node
        }
        private right(i: number) {
            return 2 * i + 2; // Return the right node
        }

        push(val: number): void {
            this.heap.push(val); // Push the value to the heap
            this.bubbleUp(this.heap.length - 1); // Bubble up the last node in the heap
        }

        pop(): number | undefined {
            if (this.heap.length === 0) return undefined; // If heap is empty, can't pop
            if (this.heap.length === 1) return this.heap.pop(); If there is only 1 val in heap, pop the heap
            const root = this.heap[0]; // Save the heap's first val
            this.heap[0] = this.heap.pop()!; // Set the first val as the last val and remove it from end
            this.bubbleDown(0); // Bubble down the first val
            return root;
        }

        private bubbleUp(i: number): void {
            while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) { // While curr node is less than its parent
                [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]]; // Swap them
                i = this.parent(i)
            }
        }

        private bubbleDown(i: number): void {
            let smallest = i;
            const l = this.left(i), r = this.right(i); // Grab left and right nodes of i

            if (l < this.heap.length && this.heap[l] < this.heap[smallest]) {
                smallest = l; // If left node is smaller than length and the curr node, set smallest as left node
            }
            if (r < this.heap.length && this.heap[r] < this.heap[smallest]) {
                smallest = r; // Same with right node
            }
            if (smallest !== i) { // If curr node is not smallest...
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]; //Swap curr and smallest
                this.bubbleDown(smallest); // Recursively bubble down the smallest node
            }
        }
    }
 }

const useKthElementHeap = (nums: number[], k: number): number => {
    // Ex. Find the 3rd largest element in an array
    
    const heap = new MinHeap(); // Create instance of MinHeap

    for (const num of nums) {
        heap.push(num); // Push num to heap
        if (heap.heap.length > k) {
            heap.pop(); // Pop the heap until it is of size k
        }
    }
    return heap.pop()!; // The last element will be the largest, and the heap will be of size K
}

const useTopKHeap = (nums: number[], k: number): number[] => {
    // Ex. Return the 2 most frequent numbers in array

    const freq: Map<number, number> = new Map(); // Create a new map of numbers and their frequency

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1); // Fill the map with the nums and their frequency
    }

    const heap = new MinHeap();
    for (const [val, count] of freq) {
        heap.push([count, val] as any); // Push each num/frequency pair to heap
        if (heap.heap.length > k) heap.pop(); // Pop the heap until it is only 2 frequencies
    }

    return heap.heap.map(([, val]) => val); // Return the 2 remaining numbers
}

class useMedianTwoHeaps = () => {
    class MedianFinder {
        low: MaxHeap; // Left side (max heap)
        high: MinHeap; // Right side (min heap)

        constructor() {
            this.low = new MaxHeap();
            this.high = new MinHeap(); // Create a MaxHeap and MinHeap
        }

        addNum(num: number): void {
            this.low.push(num); // Push the num to low/max heap
            this.high.push(this.low.pop()!) // Push the last val or low/max heap to high/min heap + pop it

            if (this.low.heap.length < this.high.heap.length) {
                this.low.push(this.high.pop()!); // If low/max heap is shorter than high/min heap, push
                //high/min's last val to low/max and remove it
            }
        }

        findMedian(): number {
            if (this.low.heap.length > this.high.heap.length) {
                return this.low.heap[0]; // If low/max heap is shorter than high/min heap, return low/max 
                //first val
            } else {
                return (this.low.heap[0] + this.high.heap[0]) / 2; // If low/max heap is longer, return
                //midpoint between low/max heap's first val and high/min heap's first val
            }
        }
    }
}

const useHeapForScheduling = (lists: (ListNode | null)[]): ListNode | null => {
    // Ex. Merge K sorted linked lists into one sorted list

    const heap = new MinHeap();
    
    for (const node of lists) {
        if (node) {
            heap.push(node); // Push each node of lists to the heap
        }
    }

    const dummy = new ListNode(0);
    let curr = dummy;

    while (heap.heap.length) {
        const node = heap.pop()!; // Grab the current node and remove it from heap
        curr.next = node; // Set next node as saved node
        curr = curr.next; // Set current node as saved node
        if (node.next) {
            heap.push(node.next); // If there is a next node, push it to the heap
        }
    }
    return dummy.next;
}

const useHeapForNearlySorted = (nums: number[], k: number): number[] => {
    // Ex. Sort an array where each element is at most k away from the sorted position
    
    const heap = new MinHeap();
    const res: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        heap.push(nums[i]); // Push each val to the heap
        if (heap.heap.length > k) {
            res.push(heap.pop()!); // Pop the heap and push it to res until heap is length k
        }
    }

    while (heap.heap.length) {
        res.push(heap.pop()!); // pop the remaining heap values and push to results
    }
    return res;
}

const useFrequencyHeap = (tasks: [number, string][]): string[] => {
    // If I need to pick the next job/task based on priority/deadline
    // Ex. Schedule tasks by priority order. Tasks = [priority, taskName]

    const heap = new MaxHeap();

    for (const task of tasks) {
        heap.push(task); // Push each task pair to the heap
    }

    const res: string[] = [];
    while (heap.heap.length) {
        res.push(heap.pop()![1]); // Push each priority to result and pop it from heap
    }
    return res;
}