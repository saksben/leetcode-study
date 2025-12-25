/**
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

Constraints:

1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the words in wordList are unique.
 */

/**
 * Word Ladder
 * 
 * Graph Pattern: BFS on words to find shortest transformation
 */
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue: [string, number][] = [[beginWord, 1]]; // word, transformation length
  const visited = new Set<string>();
  visited.add(beginWord);

  const L = beginWord.length;

  // Precompute all generic forms mapping to words
  const allComboDict: Map<string, string[]> = new Map();
  wordSet.forEach(word => {
    for (let i = 0; i < L; i++) {
      const generic = word.slice(0, i) + '*' + word.slice(i + 1);
      if (!allComboDict.has(generic)) allComboDict.set(generic, []);
      allComboDict.get(generic)!.push(word);
    }
  });

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift()!;

    for (let i = 0; i < L; i++) {
      const generic = currentWord.slice(0, i) + '*' + currentWord.slice(i + 1);

      const neighbors = allComboDict.get(generic) || [];
      for (const neighbor of neighbors) {
        if (neighbor === endWord) return level + 1;
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, level + 1]);
        }
      }
    }
  }

  return 0;
}
