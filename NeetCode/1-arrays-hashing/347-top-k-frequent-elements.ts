// Top K Frequent Elements
// Medium

/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

function topKFrequent(nums: number[], k: number): number[] {
  const hm: {[key: number]: number} = {};
  // Create an empty array to store the elements based on their frequency
  const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  let ans: number[] = []
  
  // Iterate through the input array and add the frequency of each element to the hash map
  for (const num of nums) {
      hm[num] = (hm[num] || 0) + 1;
  }
  // Iterate through the hash map and add the elements to the frequency array based on their frequency
  for (const key in hm) {
      const frequency = hm[key]
      if (frequency) {
          freq[frequency].push(Number(key))
      }
  }

  // Iterate through the frequency array from the highest frequency to the lowest
  for (let j = freq.length - 1; j >= 0 && k > 0; j--) {
      // If the current frequency array is not empty, add the elements to the ans array
      // and decrement k until k is 0 or the frequency array is empty
      if (freq[j].length > 0) {
          for (const element of freq[j]) {
              if (k > 0) {
                  ans.push(element)
                  k--
              }
          }
      }
  }
  return ans;
};

function topKFrequent2(nums: number[], k: number): number[] {
  const map = new Map();
  const bucket: Array<Set<number>> = [];
  const result: number[] = [];

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1); // For each number given, add it to the map as a key with a value of either 0 or its incremented count
  }

  for (let [num, freq] of map) { // For each entry in the map...
    if (!bucket[freq]) { // If the bucket array doesn't already contain a set with an element representing the entry's count, add it
      bucket[freq] = new Set<number>();
    }
    bucket[freq].add(num); // Otherwise if it does exist, add the entry's key (the number) to the set
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
      if (result.length >= k) {
        break;
      }
    }
  }

  return result.slice(0, k);
}
