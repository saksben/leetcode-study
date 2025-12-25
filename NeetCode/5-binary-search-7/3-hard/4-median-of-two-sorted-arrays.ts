/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;

    let left = 0;
    let right = m;

    while (left <= right) {
        // Partition indices for nums1 and nums2
        const partition1 = Math.floor(left + (right - left) / 2); // Midpoint of nums1
        const partition2 = Math.floor((m + n + 1) / 2) - partition1; // Midpoint of the 2 arrays together

        // Elements just to the left/right of each partition
        const maxLeft1 = partition1 > 0 ? nums1[partition1 - 1] : -Infinity; // As long as nums1 has a midpoint and an element before it, return the value of the element before it
        const minRight1 = partition1 < m ? nums1[partition1] : Infinity; // As long as the midpoint index of nums1 is less than the length of nums1, return the value of the midpoint of nums1

        const maxLeft2 = partition2 > 0 ? nums2[partition2 - 1] : -Infinity; // As long as there is a midpoint of the 2 arrays together, return the value of the element before it
        const minRight2 = partition2 < n ? nums2[partition2] : Infinity; // As long as the midpoint index of both arrays together is less than the length of both arrays together, return the value of the midpoint of both arrays together

        // Check if I've found the correct partition
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) { // If val of element before nums1 midpoint <= val of midpoint of both arrays together, and val of element before midpoint of both arrays together <= val of nums1 midpoint
            // If total length is even, median median is avg of middle two
            if ((m + n) % 2 === 0) {
                return (
                    (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
                );
            } else {
                // If odd, median is max of left half
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) { // Too far right in nums1 -> move left
            right = partition1 - 1;
        } else { // Too far left in nums -> move right
            left = partition1 + 1;
        }
    }

    // Should never reach here if inputs are valid
    throw new Error("Input arrays are not sorted or invalid");
}