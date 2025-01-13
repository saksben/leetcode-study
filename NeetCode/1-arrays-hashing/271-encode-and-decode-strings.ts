// Encode and Decode Strings
// Medium

/**
 Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
 */

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // Create an encoded string of each string's length, a delimiter, and the string
    encode(strs) {
        let res = "";
        for (let s of strs) {
            res += s.length + "#" + s;
        }
        return res;
    }

    // res = "4#neet4#code4#love3#you"

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // Have 2 pointers i and j that define the length of each substring and then define the selection of the substring; loop until done
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) { // for the length of the encoded string...
            let j = i;
            while (str[j] !== "#") {
                j++; // select the substring length number
            }
            let length = parseInt(str.substring(i, j)); // extract the length of the substring
            i = j + 1; // move i (start) to right after the delineator #
            j = i + length; // selection range is # plus substring length
            res.push(str.substring(i, j)) // push the selected substring to the results array
            i = j; // i is now the end  of the substring and loops again if less than the encoded string
        }
        return res;
    }
}