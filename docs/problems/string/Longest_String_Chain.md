# Longest String Chain

## Alias
- Leetcode (1048): [Longest String Chain](https://leetcode.com/problems/longest-string-chain/)

## Problem
You are given an array of `words` where each word consists of lowercase English letters.

wordA is a **predecessor** of `wordB` if and only if we can insert **exactly one** letter anywhere in `wordA` **without changing the order of the other characters** to make it equal to `wordB`.

- For example, `"abc"` is a predecessor of `"abac"`, while `"cba"` is not a predecessor of `"bcad"`.

A **word chain** is a sequence of words `[word1, word2, ..., wordk]` with `k >= 1`, where `word1` is a predecessor of `word2`, `word2` is a predecessor of `word3`, and so on. A single word is trivially a **word chain** with `k == 1`.

Return the ***length** of the **longest possible word chain** with words chosen from the given list of words.

## Examples
- Example 1
   - Input
     ```
     ["a","b","ba","bca","bda","bdca"]
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - One of the longest word chains is `["a","ba","bda","bdca"]`.
- Example 2
   - Input
     ```
     ["xbc","pcxbcf","xb","cxbc","pcxbc"]
     ```
   - Output
     ```
     5
     ```
   - Explanation
      - All the words can be put in a word chain `["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"]`.
- Example 3
   - Input
     ```
     ["abcd","dbqca"]
     ```
   - Output
     ```
     1
     ```
   - Explanation
      - The trivial word chain `["abcd"]` is one of the longest word chains.
      - `["abcd","dbqca"]` is not a valid word chain because the ordering of the letters is changed.

## Solutions
- Solution 1
   - Idea
      - Sort the words by word's length. (also can apply bucket sort)
      - For each word, loop on all possible previous word with 1 letter missing.
      - If we have seen this previous word, update the longest chain for the current word.
      - Finally return the longest word chain.
  ```java
  public int longestStrChain(String[] words) {
      Map<String, Integer> dp = new HashMap<>();
      Arrays.sort(words, (a, b)->a.length() - b.length());
      int res = 0;
      for (String word : words) {
          int best = 0;
          for (int i = 0; i < word.length(); ++i) {
              String prev = word.substring(0, i) + word.substring(i + 1);
              best = Math.max(best, dp.getOrDefault(prev, 0) + 1);
          }
          dp.put(word, best);
          res = Math.max(res, best);
      }
      return res;
  }
  ```
