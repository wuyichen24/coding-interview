# Word Break

## Alias
- Leetcode (139): [Word Break](https://leetcode.com/problems/word-break/)

## Problem
Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

## Examples
- Example 1
   - Input
     ```
     s = "leetcode"
     wordDict = ["leet","code"]
     ```
   - Output
     ```
     true
     ```
   - Explanation
      - Return true because "leetcode" can be segmented as "leet code".
- Example 2
   - Input
     ```
     s = "applepenapple"
     wordDict = ["apple","pen"]
     ```
   - Output
     ```
     true
     ```
   - Explanation
      - Return true because "applepenapple" can be segmented as "apple pen apple".
      - Note that you are allowed to reuse a dictionary word.
- Example 3
   - Input
     ```
     s = "catsandog"
     wordDict = ["cats","dog","sand","and","cat"]
     ```
   - Output
     ```
     false
     ```

## Solutions
- **Solution 1: Backtracking**
   - Idea
       - Use index `i` to record the start index for matching the next word.
   - Complexity
       - Time complexity: *O(2<sup>N<sup> * MN)* (M is the size of dictionary, N is the length of string)
  ```
  class Solution {
      List<String> wordDict;

      boolean found = false;                         // indicate we find the valid answer or not
      LinkedList<String> track = new LinkedList<>(); // store the word selection 

      public boolean wordBreak(String s, List<String> wordDict) {
          this.wordDict = wordDict;
          backtrack(s, 0);
          return found;
      }

      void backtrack(String s, int i) {
          if (found) {              // if we already found an valid answer 
              return;
          }
          if (i == s.length()) {    // if we build the word from dictionary
              found = true;
              return;
          }

          for (String word : wordDict) { 
              int len = word.length();
              if (i + len <= s.length() && s.substring(i, i + len).equals(word)) {  // if it is matching
                  track.addLast(word);
                  backtrack(s, i + len);
                  track.removeLast();
              }
          }
      }
  }
  ```
- **Solution 1: Dynamic programming**
