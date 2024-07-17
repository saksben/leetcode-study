// Group Anagrams
// Medium

/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// 118ms, uses sort(). O(n*k*log(k)) where n is length of input array and k is max length of a string in input array
function groupAnagrams2(strs: string[]): string[][] {
    let map = new Map();

    for (let str of strs) {
        let sorted = str.split("").sort().join("") // For each string in the array, split into its chars, then sort it a-z, then make it a new string
        if (map.has(sorted)) map.set(sorted, [...map.get(sorted), str]) // If the map already has the new string as a key, update its value's array to add the original string
        else map.set(sorted, [str]) // Otherwise store the new string as key, with an array containing the original string as its value
    }

    return Array.from(map.values()) // Create an array from the map's values (string arrays)
};

// 129ms, no sort(). O(n*k) where n is the size of input array and k is the max length of a string in input array
function groupAnagrams(strs: string[]): string[][] {
    let result: { [key: string]: string[] } = {}; // Create an object of string keys and string array values

    for (let str of strs) { // For each string in strs...
        let count = new Array(26).fill(0); // Create an array the size of the alphabet and fill their values with 0's
        for (let char of str) count[char.charCodeAt(0) - 97]++; // For each char of the string, increment the value of each letter used at its numeric index in the alphabet
        
        let key = count.join("#"); // create a key out of all the char counts
        
        if (result[key]) {
            result[key].push(str); // If the object already has a key using the same count of chars, add the original string to its string array
        } else {
            result[key] = [str]; // Otherwise, set the value of the key to an array containing the original string
        }
    }

    return Object.values(result); // Return an array of the object's values (string arrays)
};