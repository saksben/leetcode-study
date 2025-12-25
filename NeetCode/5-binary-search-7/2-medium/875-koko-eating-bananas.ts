/**
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
 

Constraints:

1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109
 */

function minEatingSpeed(piles: number[], h: number): number {
    // This is a story problem variant of the "153 find minimum in rotated sorted array" problem
    // Create a range of speeds from 1 pile per hour to the max amount of piles per hour
    let left = 1; // 1 pile per hour minimum
    let right = Math.max(...piles); // Koko can't eat faster than the biggest pile per hour

    // Helper function to check if Koko can finish all piles with a speed of k (rate of bananas eaten per hour)
    const canFinish = (k: number): boolean => {
        let hours = 0;
        for (const pile of piles) {
            // Each pile takes ceil(pile / k) hours to eat, because she will stop eating if she eats a pile before the rate per hour
            hours += Math.ceil(pile / k);
        }
        return hours <= h;
    }

    // Binary search for the minimum k
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (canFinish(mid)) {
            // Koko can finish -> try smaller k
            right = mid;
        } else {
            // Koko can't finish -> need faster k
            left = mid + 1;
        }
    }

    // When loop ends, left == right == smallest valid k
    return left;
}