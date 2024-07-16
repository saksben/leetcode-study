# Intervals Pattern
Intervals Pattern: use when you need to manage or analyze overlapping or non-overlapping intervals of data efficiently.

The Intervals pattern involves operations on a collection of intervals (ranges of data). This pattern is useful for problems where you need to merge overlapping intervals, find gaps between intervals, or perform operations that involve overlapping time or spatial ranges.

# Explanation of the Pattern
Intervals are typically represented as pairs of start and end points. Operations include merging overlapping intervals, sorting intervals, and determining relationships between intervals (e.g., containment, overlap). Efficient solutions often involve sorting intervals based on start or end points and iterating through them while maintaining or updating intervals.

# Key Concepts
* Interval Representation: Representing ranges of data with start and end points.
* Sorting and Merging: Techniques to order intervals and combine overlapping ones.
* Overlap Detection: Identifying intervals that intersect or share common boundaries.
* Edge Cases: Handling intervals that touch or are contiguous without overlapping.
* Efficiency: Designing algorithms with optimal time and space complexity for interval operations.

# When to Use This Pattern
* Scheduling tasks or events over time periods (e.g., meeting scheduling).
* Analyzing genomic sequences or ranges of numerical data.
* Solving problems involving resource allocation or time-based queries.

# Common Use Cases and Approaches
1. Merge Intervals
* Combine overlapping intervals into a consolidated set.
* Sort intervals by start time and merge overlapping intervals sequentially.
Time Complexity: O(n log n) for sorting, Space Complexity: O(n) for storing merged intervals.

2. Insert Interval
* Insert a new interval into a sorted set of non-overlapping intervals.
* Adjust existing intervals to accommodate the new interval and merge if necessary.
Time Complexity: O(n) for insertion and merging, Space Complexity: O(1) if modifying in place.

3. Meeting Rooms II
* Determine the minimum number of meeting rooms required to schedule all meetings.
* Sort meetings by start time and use a min-heap to track end times of ongoing meetings.
Time Complexity: O(n log n) for sorting and heap operations, Space Complexity: O(n) for heap storage.

4. Find Free Time
* Find gaps or free time between intervals in a schedule.
* Sort intervals and iterate to find gaps between consecutive intervals.
Time Complexity: O(n log n) for sorting, Space Complexity: O(1) for computation without extra storage.